import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ThemeColorContext } from '../../contexts/themeColorContext'

const ItemWithoutIcon = ({
  item,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
  styles
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.textTouchable, { backgroundColor }, { borderColor }]}
  >
    <Text style={{ padding: 8, color: textColor }}>{item.message}</Text>
  </TouchableOpacity>
)

const ListItemWithoutIcon = (props) => {
  const themeColor = useContext(ThemeColorContext)
  const { item, selectedIdwithoutIcon, setSelectedIdwithoutIcon } = props
  const { textTouchable } = styles

  const backgroundColor =
    item.id === selectedIdwithoutIcon ? themeColor : 'white'

  const borderColor = themeColor

  const textColor = item.id === selectedIdwithoutIcon ? 'white' : themeColor

  return (
    <ItemWithoutIcon
      item={item}
      onPress={() => setSelectedIdwithoutIcon(item.id)}
      onPressout={() => setSelectedIdwithoutIcon(item.id)}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      styles={{
        textTouchable,
        themeColor
      }}
    />
  )
}

const styles = StyleSheet.create({
  textTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 2
  }
})

export default ListItemWithoutIcon
