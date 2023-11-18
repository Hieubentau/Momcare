import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import CardInfo from '../Basics/CardInfo'

const CardDoctor = ({ item, onPress, backgroundColor, styles }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardTouchable, { backgroundColor }]}
  >
    <CardInfo item={item} />
  </TouchableOpacity>
)

const ListCardsInfo = (props) => {
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const { navigation, item, selectedDoctor, setSelectedDoctor } = props
  const { cardTouchable } = styles

  const backgroundColor = 'white'

  return (
    <CardDoctor
      item={item}
      onPress={() => {
        setSelectedDoctor(item.id),
          navigation.navigate('DoctorInfo', { item }),
          console.log(item)
      }}
      onPressout={() => setSelectedDoctor(item.id)}
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

export default ListCardsInfo
