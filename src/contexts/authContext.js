import { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useAxios, { fetchData } from '../hooks/useAxios'
import { AppStateContext } from './appStateContext'
import axios from 'axios'

export const AuthContext = createContext({
  saveToken: () => {},
  user: null,
  setUser: () => {},
  role: 2,
  signIn: () => {},
  logout: () => {}
})

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppStateContext)
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(2)

  const saveToken = (token) => {
    // save token in async storage
    AsyncStorage.setItem('token', token)
      .then(() => {
        console.log('token saved')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const signIn = async (email, password) => {
    try {
      // console.log(email, password)
      // console.log(process.env.DEV_URL_NGROK)
      // const { status, data } = await axios.get(
      //   `${process.env.DEV_URL_NGROK}/login`,
      //   {
      //     params: {
      //       email: email,
      //       password: password
      //     }
      //   }
      // )
      setRole(2)
      setIsLoggedIn(true);
      return true;

      if (status === 200) {
        const { token, user } = data
        saveToken(token)
        setUser(user)
        setIsLoggedIn(true)
        setRole(user.role)
        return true
      }

      return false
    } catch (err) {
      console.log(err)
      return false
    }
  }

  const logout = async () => {
    const { response } = await fetchData('POST', '/user/logout', true)
    await AsyncStorage.removeItem('token')
    setUser(null)
    setIsLoggedIn(false)
    setRole(null)
    return response ? response.status === 200 : false
  }

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token')
        if (token) {
          const { status, data } = await axios.get(
            `${process.env.DEV_URL_NGROK}/check`,
            {
              params: {
                token: token
              }
            }
          )
          if (status === 200 && data.userID && data.role) {
            setUser(data)
            setIsLoggedIn(true)
            setRole(data.role)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }

    if (!isLoggedIn && setIsLoggedIn) {
      checkToken()
    }
  }, [isLoggedIn, setIsLoggedIn])

  return (
    <AuthContext.Provider
      value={{
        saveToken,
        user,
        setUser,
        role,
        signIn,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
