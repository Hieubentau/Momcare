import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Appbar, useTheme } from 'react-native-paper'
import { getHeaderTitle } from '@react-navigation/elements'

const TitleBar = (props) => {
  const { navigation, route, options, back, ...otherAction } = props
  const previous = navigation.canGoBack()
  const theme = useTheme()

  const { titleBarWrapper, arrowLeftIcon, titleBarName } = styles
  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          style={arrowLeftIcon}
          iconColor={theme.colors.primary}
        />
      ) : undefined}
      {options?.headerShown === false ? null : (
        <Appbar.Content
          title={options?.headerTitle}
          titleStyle={titleBarName}
        />
      )}
      {options?.headerRight ? options?.headerRight({ ...otherAction }) : null}
    </Appbar.Header>
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
