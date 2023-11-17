import { createContext, useContext, useState } from 'react'
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
  const { setIsLoggedIn } = useContext(AppStateContext)
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(2)
  // const validRole = useRole()

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
      console.log(email, password)
      // const { status, data } = await axios.post(
      //   'http://192.168.133.105:3333/api/v1/user/login',
      //   {
      //     email,
      //     password
      //   }
      // )

      const fakeData = {
        status: 200,
        data: {
          data: {
            token: 'fakeToken',
            user: {
              id: 1,
              role: 2
            }
          }
        }
      }

      const { status: fakeStatus, data } = fakeData

      if (fakeStatus === 200) {
        const { token, user } = data.data
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
