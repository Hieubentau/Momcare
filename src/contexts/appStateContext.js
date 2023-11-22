import { createContext, useEffect, useState } from 'react'
import { DEV_URL_NGROK } from '../hooks/useMisc'
import axios from 'axios'

export const AppStateContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  MedicalSpecialty: []
})

export const AppStateProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [language, setLanguage] = useState('en')
  const [MedicalSpecialty, setMedicalSpecialty] = useState([])
  useEffect(() => {
    axios
      .get(`${DEV_URL_NGROK}/medspec/`)
      .then((res) => {
        console.log(res.data)
        setMedicalSpecialty(res.data)
      })
      .catch((err) => {
        console.log('Error fetching medical specialty:', err)
      })
  }, [])

  return (
    <AppStateContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
        MedicalSpecialty: MedicalSpecialty
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}
