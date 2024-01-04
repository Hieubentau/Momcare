import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, AS_KEY, AS_STATUS, REQ_RETURN_STATUS, ROLE } from '../config'
import { read, remove, store } from '../ultilities'

const AuthContext = createContext({
  isAuthorized: false,
  token: null,
  setToken: () => {},
  user: {
    id: null,
    role: null
  },
  userDetails: null,
  setUser: () => {},
  login: (email, password) => {},
  logout: () => {}
})

const storeTokenAndUser = (token, email, id) =>
  store(AS_KEY.TOKEN, token + ' ' + email + ' ' + id)

const fetchUserDetails = async (email, user, setUser) => {
  try {
    const response = await axios.get(`${API_URL}/user/${email}`)
    if (response?.data !== 'not registered') {
      const { userId, password_hash, ...others } = response.data
      setUser({
        ...user,
        ...others,
        id: userId
      })
    }
  } catch (err) {
    console.log('fetchUserDetails', err)
  }
}
export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({
    id: null,
    role: null
  })
  const [userDetails, setUserDetails] = useState(null)
  console.log(user, userDetails)
  const login = async (email, password) => {
    try {
      const response = await axios.get(`${API_URL}/login`, {
        params: {
          email,
          password
        }
      })
      if (response?.data === 'not registered') {
        return {
          ret: REQ_RETURN_STATUS.USER_ERROR,
          res: {
            pos: 'email',
            mess: 'Tài khoản không tồn tại'
          }
        }
      } else if (response?.data === 'wrong password') {
        return {
          ret: REQ_RETURN_STATUS.USER_ERROR,
          res: {
            pos: 'pw',
            mess: 'Mật khẩu không đúng'
          }
        }
      } else {
        const { token, user } = response.data
        if (token && user) {
          setToken(token)
          setUser(user)
          await fetchUserInformation(email, user, setUser, setUserDetails)
          await storeTokenAndUser(token, email, user.id)
          setIsAuthorized(true)
          return {
            ret: REQ_RETURN_STATUS.OK,
            message: 'Đăng nhập thành công'
          }
        } else {
          return {
            ret: REQ_RETURN_STATUS.USER_ERROR,
            message: 'Đăng nhập thất bại'
          }
        }
      }
    } catch (err) {
      console.log('login', err)
      return {
        ret: REQ_RETURN_STATUS.SERVER_ERROR,
        message: err.message
      }
    }
  }

  const logout = async () => {
    await axios.get(`${API_URL}/logout`, {
      params: {
        token
      }
    })
    await remove(AS_KEY.TOKEN)
    setToken(null)
    setUser({
      id: null,
      role: null
    })
    setUserDetails(null)
    setIsAuthorized(false)
  }

  useEffect(() => {
    const validateToken = async () => {
      const response = await read(AS_KEY.TOKEN)
      console.log(response)
      if (response?.status === AS_STATUS.OK) {
        const [_token, email, id] = response.data.split(' ')
        const isValid = await axios.get(`${API_URL}/check/`, {
          params: {
            token: _token,
            userid: id
          }
        })
        if (isValid?.data === 'ok') {
          setToken(_token)
          await fetchUserInformation(email, user, setUser, setUserDetails)
          setIsAuthorized(true)
        } else {
          await remove(AS_KEY.TOKEN)
          setToken(null)
          setUser({
            id: null,
            role: null
          })
          setIsAuthorized(false)
        }
      }
    }
    validateToken()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        token,
        setToken,
        user,
        userDetails,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

const fetchUserDetailsById = async (user, setUserDetails) => {
  const type =
    user.role === ROLE.PATIENT
      ? 'patients'
      : user.role === ROLE.DOCTOR
      ? 'doctor'
      : 'hospital'
  const field = user.role === ROLE.PATIENT ? 'patient' : type
  try {
    const response = await axios.get(`${API_URL}/${type}/${user.id}`)
    if (response?.data?.user && response?.data?.[field]) {
      setUserDetails(response.data[field])
    }
  } catch (err) {
    console.log('fetchUserDetailsById', err)
  }
}

const fetchUserInformation = async (email, user, setUser, setUserDetails) => {
  await fetchUserDetails(email, user, setUser)
  await fetchUserDetailsById(user, setUserDetails)
}
