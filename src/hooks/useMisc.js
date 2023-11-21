import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * A hook to get all possible roles from the server
 */
export const useRole = () => {
  const [role, setRole] = useState([])

  useEffect(() => {
    // a fetch call to the server to get all possible roles
    axios
      .get('http://localhost:3333/api/v1/role')
      .then((res) => {
        setRole(res.data)
      })
      .catch((err) => {
        console.log('Error fetching roles:', err)
        console.log(err)
      })
  }, [])

  return role
}

export const useMedicalSpecialty = (search = null, en = true) => {
  const [medicalSpecialty, setMedicalSpecialty] = useState([])
  useEffect(() => {
    axios
      .get(`${process.env.DEV_URL_NGROK}/medspec/`)
      .then((res) => {
        setMedicalSpecialty(res.data)
      })
      .catch((err) => {
        console.log('Error fetching medical specialty:', err)
      })
  }, [])

  if (search) {
    return medicalSpecialty.filter((item) => {
      if (en) {
        return item.englishName.toLowerCase().includes(search.toLowerCase())
      }
      return item.vietnameseName.toLowerCase().includes(search.toLowerCase())
    })
  }

  return medicalSpecialty
}
