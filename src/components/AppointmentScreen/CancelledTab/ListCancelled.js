import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import CardCancelled from './CardCancelled'

const CardCancelledAptment = ({ item, backgroundColor, styles }) => (
  <TouchableOpacity
    disabled={true}
    style={[styles.cardTouchable, { backgroundColor }]}
  >
    <CardCancelled item={item} />
  </TouchableOpacity>
)

const ListCancelled = (props) => {
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const { navigation, item } = props
  const { cardTouchable } = styles

  const backgroundColor = 'white'

  return (
    <CardCancelledAptment
      item={item}
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

export default ListCancelled
