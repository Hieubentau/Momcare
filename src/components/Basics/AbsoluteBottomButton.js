import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const AbsoluteBottomButton = (props) => {
  const { nextScreen, passingData, buttonName } = props
  const navigation = useNavigation()
  const { bookAppointmentButton, bookAppointmentText } = styles
  const theme = useTheme()
  const themeColor = theme.colors.primary
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(nextScreen, { passingData }),
          console.log('passing data', passingData)
      }}
      style={[bookAppointmentButton, { backgroundColor: themeColor }]}
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
