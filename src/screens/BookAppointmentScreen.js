import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Calendar from '../components/Temp/Calendar'

const BookAppointmentScreen = () => {
  const { container } = styles
  return (
    <View style={container}>
      <Calendar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default BookAppointmentScreen
