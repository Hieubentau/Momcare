import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import CardNotCancelled from './CardNotCancelled'

const CardNotCancelledAptment = ({
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
    <CardNotCancelled
      item={item}
      statusAppointmentText={statusAppointmentText}
      statusAppointmentColor={styles.statusAppointmentColor}
    />
  </TouchableOpacity>
)

const ListNotCancelled = (props) => {
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

  const backgroundColor = 'white'

  return (
    <CardNotCancelledAptment
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

export default ListNotCancelled
