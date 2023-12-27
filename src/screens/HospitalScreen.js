/* eslint-disable react/jsx-filename-extension */
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
    flex: 1
  }
})

export default HospitalScreen
