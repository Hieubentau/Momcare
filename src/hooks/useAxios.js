import { useState, useEffect } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getTokens = async () => {
  try {
    const tokens = await AsyncStorage.getItem('tokens')
    return JSON.parse(tokens) // Assuming tokens are stored as a JSON string
  } catch (error) {
    console.error('Error fetching tokens:', error)
    return null
  }
}

const useAxios = (requireAuth = true) => {
  const baseURL = 'http://localhost:3333/api/v1'
  const [guest, setGuest] = useState(
    axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  )

  const [auth, setAuth] = useState(null)

  useEffect(() => {
    const fetchTokens = async () => {
      const tokens = await getTokens()

      setAuth(
        axios.create({
          baseURL,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokens}`
          }
        })
      )
    }

    fetchTokens()
  }, [requireAuth])

  return requireAuth ? auth : guest
}

export default useAxios
