import AsyncStorage from '@react-native-async-storage/async-storage'
import { AS_KEY, AS_STATUS } from '../config'

export const store = async (key, value) => {
  try {
    value = JSON.stringify(value)
    await AsyncStorage.setItem(key, value)
  } catch (err) {
    console.log('store', err)
  }
}

export const read = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    if (jsonValue) {
      const data = JSON.parse(jsonValue)
      return {
        status: AS_STATUS.OK,
        data
      }
    } else {
      return {
        status: AS_STATUS.NORU
      }
    }
  } catch (e) {
    console.log('read', e)
    return {
      status: AS_STATUS.ERROR
    }
  }
}

export const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log('remove', e)
  }
}
