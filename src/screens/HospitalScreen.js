import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import HospitalBottomTabs from '../components/HospitalBottomTabs'

const HospitalScreen = () => {
  return (
    <View style={styles.container}>
      <HospitalBottomTabs />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
})

export default HospitalScreen
