import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PatientDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PatientDetails</Text>
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

export default PatientDetailsScreen
