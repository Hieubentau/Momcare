import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
