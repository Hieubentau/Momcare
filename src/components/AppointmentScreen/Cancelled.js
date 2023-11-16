import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

const Cancelled = () => {
  const { container } = styles
  return (
    <View style={container}>
      <Text>Cancelled</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Cancelled
