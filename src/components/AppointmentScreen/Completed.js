import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

const Completed = () => {
  const { container } = styles
  return (
    <View style={container}>
      <Text>Completed</Text>
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

export default Completed
