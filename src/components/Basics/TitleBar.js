import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const TitleBar = (props) => {
  const { navigation, previousScreen, titleName } = props
  const { titleBarWrapper, arrowLeftIcon, titleBarName } = styles
  return (
    <View style={titleBarWrapper}>
      <TouchableOpacity
        onPress={() => navigation.goBack(previousScreen)}
        style={arrowLeftIcon}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={titleBarName}>{titleName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  arrowLeftIcon: {
    marginRight: 16
  },
  titleBarName: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default TitleBar
