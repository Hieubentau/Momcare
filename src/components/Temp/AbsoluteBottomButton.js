import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const AbsoluteBottomButton = (props) => {
  const { navigation, nextScreen, passingData, buttonName } = props
  const { bookAppointmentButton, bookAppointmentText } = styles
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(nextScreen, { passingData }),
          console.log('passing data', passingData)
      }}
      style={bookAppointmentButton}
    >
      <Text style={bookAppointmentText}>{buttonName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bookAppointmentButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookAppointmentText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default AbsoluteBottomButton
