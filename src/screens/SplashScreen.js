import React, { useContext } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { ThemeColorContext } from '../contexts/themeColorContext'

const SplashScreen = () => {
  const themeColor = useContext(ThemeColorContext)
  const { container, logoWrapper, logoText, center } = styles
  return (
    <SafeAreaView style={[container, center]}>
      <View style={[logoWrapper, center]}>
        <Text style={logoText}>MOMCARE </Text>
        <Entypo name="leaf" size={36} color={themeColor} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoWrapper: {
    flexDirection: 'row'
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'dodgerblue'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SplashScreen
