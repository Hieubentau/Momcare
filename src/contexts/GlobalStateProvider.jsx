import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, AS_KEY, AS_STATUS } from '../config'
import { read, store } from '../ultilities'

const GlobalStateContext = createContext({
  language: 'vi',
  setLanguage: (_) => {},
  medicalSpecialties: []
})

export const GlobalStateProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi')
  const [medicalSpecialties, setMedicalSpecialties] = useState([])

  useEffect(() => {
    const fetchMedSpecs = async () => {
      const cachedMS = await read(AS_KEY.MEDICAL_SPECS)
      if (cachedMS.status === AS_STATUS.OK) {
        setMedicalSpecialties(cachedMS.data)
      } else {
        axios
          .get(`${API_URL}/medspec/`)
          .then((res) => {
            console.log(res.data)
            setMedicalSpecialties(res.data)
            store(AS_KEY.MEDICAL_SPECS, res.data)
          })
          .catch((err) => {
            console.log('Error fetching medical specialty:', err)
          })
      }
    }
    fetchMedSpecs()
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
