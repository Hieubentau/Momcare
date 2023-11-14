import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ThemeColorContext } from '../../contexts/themeColorContext'
import CardMethod from '../Temp/CardMethod'

const CardAppointmentMethod = ({ item, onPress, backgroundColor, styles }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardTouchable, { backgroundColor }]}
  >
    <CardMethod item={item} />
  </TouchableOpacity>
)

const ListAppointmentMethods = (props) => {
  const themeColor = useContext(ThemeColorContext)
  const { navigation, item, selectedMethod, setSelectedMethod } = props
  const { cardTouchable } = styles

  const backgroundColor = item.id === selectedMethod ? 'gainsboro' : 'white'

  return (
    <CardAppointmentMethod
      item={item}
      onPress={() => {
        setSelectedMethod(item.id), console.log(item)
      }}
      onPressout={() => setSelectedMethod(item.id)}
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

export default ListAppointmentMethods
