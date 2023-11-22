import { useEffect, useState } from 'react'
import axios from 'axios'

export const DEV_URL_NGROK = 'https://0b6c-118-71-137-209.ngrok-free.app'

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
