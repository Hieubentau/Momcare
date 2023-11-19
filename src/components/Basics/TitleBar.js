import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Appbar, useTheme } from 'react-native-paper'

const TitleBar = (props) => {
  const { navigation, previousScreen, titleName, children, back = true } = props
  const theme = useTheme()
  const { titleBarWrapper, arrowLeftIcon, titleBarName } = styles
  return (
    <Appbar.Header
      style={{
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0
      }}
      theme={theme}
      statusBarHeight={0}
    >
      {back && (
        <Appbar.BackAction
          onPress={() => navigation.goBack(previousScreen)}
          style={{
            marginLeft: -8
          }}
          iconColor={theme.colors.primary}
        />
      )}
      {titleName && (
        <Appbar.Content title={titleName} titleStyle={titleBarName} />
      )}
      {children}
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  titleBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
    // marginBottom: 16
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
