import { useState, useEffect } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const fetchData = async (method, url, auth = false, payload = {}) => {
  try {
    if (!payload) payload = {}
    // Create headers object
    const headers = {
      'Content-Type': 'application/json'
    }

    // Add Authorization header if auth is true
    if (auth) {
      try {
        const token = await AsyncStorage.getItem('token')
        headers['Authorization'] = `Bearer ${token}`
        console.log(headers)
      } catch (err) {
        console.log(err)
      }
    }

    if (method.toLowerCase() === 'get') {
      const res = await axios.get(
        `http://${process.env.BASE_URL}:${process.env.BASE_PORT}/api/v1` + url,
        { headers }
      )

      return { response: res.data, error: null, loading: false }
    } else if (method.toLowerCase() === 'post') {
      const res = await axios.post(
        `http://${process.env.BASE_URL}:${process.env.BASE_PORT}/api/v1` + url,
        payload,
        { headers }
      )

      return { response: res.data, error: null, loading: false }
    } else if (method.toLowerCase() === 'put') {
      const res = await axios.put(
        `http://${process.env.BASE_URL}:${process.env.BASE_PORT}/api/v1` + url,
        payload,
        { headers }
      )

      return { response: res.data, error: null, loading: false }
    } else if (method.toLowerCase() === 'delete') {
      const res = await axios.delete(
        `http://${process.env.BASE_URL}:${process.env.BASE_PORT}/api/v1` + url,
        { headers }
      )

      return { response: res.data, error: null, loading: false }
    }

    return { response: null, error: 'Invalid method', loading: false }
  } catch (err) {
    return { response: null, error: err, loading: false }
  }
}
