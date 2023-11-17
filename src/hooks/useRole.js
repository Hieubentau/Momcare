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