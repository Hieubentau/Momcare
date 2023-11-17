import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import CardCompleted from './CardCompleted'

const CardCompletedAptment = ({
  item,
  onPress,
  backgroundColor,
  statusAppointmentText,
  styles
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardTouchable, { backgroundColor }]}
  >
    <CardCompleted
      item={item}
      statusAppointmentText={statusAppointmentText}
      statusAppointmentColor={styles.statusAppointmentColor}
    />
  </TouchableOpacity>
)

const ListCompleted = (props) => {
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const {
    navigation,
    item,
    selectedCardAppointment,
    setSelectedCardAppointment,
    statusAppointmentText,
    statusAppointmentColor,
    appointmentNextScreen
  } = props
  const { cardTouchable } = styles

  const backgroundColor =
    item.id === selectedCardAppointment ? 'gainsboro' : 'white'

  return (
    <CardCompletedAptment
      item={item}
      onPress={() => {
        setSelectedCardAppointment(item.id),
          navigation.navigate(appointmentNextScreen, { item }),
          console.log(item)
      }}
      onPressout={() => setSelectedCardAppointment(item.id)}
      backgroundColor={backgroundColor}
      statusAppointmentText={statusAppointmentText}
      styles={{
        cardTouchable,
        themeColor,
        statusAppointmentColor
      }}
    />
  )
}

const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 16,
    height: 100,
    justifyContent: 'center'
  }
})

export default ListCompleted
