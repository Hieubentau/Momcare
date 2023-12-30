/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import CardAppointment from './CardAppointment'

const CardAppointments = ({ item, onPress, backgroundColor, styles }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardTouchable, { backgroundColor }]}
  >
    <CardAppointment item={item} />
  </TouchableOpacity>
)

const ListAppointment = (props) => {
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const {
    navigation,
    item,
    selectedCardAppointment,
    setSelectedCardAppointment,
    appointmentNextScreen
  } = props
  const { cardTouchable } = styles

  const backgroundColor = 'white'

  return (
    <CardAppointments
      item={item}
      onPress={() => {
        setSelectedCardAppointment(item.id),
          navigation.navigate(appointmentNextScreen, { item }),
          console.log(item)
      }}
      onPressout={() => setSelectedCardAppointment(item.id)}
      backgroundColor={backgroundColor}
      styles={{
        cardTouchable,
        themeColor
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

export default ListAppointment
