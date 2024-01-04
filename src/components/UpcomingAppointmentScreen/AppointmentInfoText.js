import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AppointmentInfoText = (props) => {
  const { appointmentInfoText, category, content } = props
  return (
    <View style={styles.appointmentInfoTextWrapper}>
      <Text style={[appointmentInfoText, { flex: 1 }]}>{category}</Text>
      <Text style={[appointmentInfoText, { flex: 1 }]}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appointmentInfoTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default AppointmentInfoText
