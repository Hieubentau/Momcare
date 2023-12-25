import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { API_URL, REQ_RETURN_STATUS } from '../config'

const AuthContext = createContext({
  isAuthorized: false,
  token: null,
  setToken: (_) => {},
  user: {
    id: null,
    role: null
  },
  setUser: (_) => {},
  login: (email, password) => {},
  logout: () => {}
})

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({
    id: null,
    role: null
  })

  const login = async (email, password) => {
    try {
      const response = await axios.get(`${API_URL}/login`, {
        params: {
          email,
          password
        }
      })

      console.log(response.data)

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
          setIsAuthorized(true)
          setToken(token)
          setUser(user)
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
      console.log(err)
      return {
        ret: REQ_RETURN_STATUS.SERVER_ERROR,
        message: err.message
      }
    }
  }

  const logout = () => {}

  return (
    <AuthContext.Provider
      value={{ isAuthorized, token, setToken, user, setUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
