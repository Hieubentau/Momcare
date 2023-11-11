import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ThemeColorContext } from '../../contexts/themeColorContext'
import CardInfo from './CardInfo'

const CardDoctor = ({ item, onPress, backgroundColor, styles }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardTouchable, { backgroundColor }]}
  >
    <CardInfo item={item} />
  </TouchableOpacity>
)

const ListCardsInfo = (props) => {
  const themeColor = useContext(ThemeColorContext)
  const { item, selectedDoctor, setSelectedDoctor } = props
  const { cardTouchable } = styles

  const backgroundColor = item.id === selectedDoctor ? 'gainsboro' : 'white'

  return (
    <CardDoctor
      item={item}
      onPress={() => setSelectedDoctor(item.id)}
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
