import { createContext, useState } from 'react'
import { useRole } from '../hooks/useRole'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useAxios from '../hooks/useAxios'

export const AuthContext = createContext({
  saveToken: () => {},
  user: null,
  setUser: () => {},
  role: 2,
  signIn: () => {}
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(2)
  const validRole = useRole()
  const guestAxios = useAxios(false)

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

  const signIn = (email, password) => {
    console.log(email, password)
    guestAxios
      .post('/user/login', { email, password })
      .then((res) => {
        const { status, response } = res
        if (status === 200) {
          // save token in async storage
          const { token, user } = response
          saveToken(token)
          setUser(user)
          setRole(user.role)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        saveToken,
        user,
        setUser,
        role,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
