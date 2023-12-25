import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../config'

const GlobalStateContext = createContext({
  language: 'vi',
  setLanguage: (_) => {},
  medicalSpecialties: []
})

export const GlobalStateProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi')
  const [medicalSpecialties, setMedicalSpecialties] = useState([])

  useEffect(() => {
    axios
      .get(`${API_URL}/medspec/`)
      .then((res) => {
        console.log(res.data)
        setMedicalSpecialties(res.data)
      })
      .catch((err) => {
        console.log('Error fetching medical specialty:', err)
      })
  }, [])

  return (
    <GlobalStateContext.Provider
      value={{ medicalSpecialties, language, setLanguage }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalStateContext)
