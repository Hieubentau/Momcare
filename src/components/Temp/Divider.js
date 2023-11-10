import React from 'react'
import { View, StyleSheet } from 'react-native'

const Divider = () => {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center'
  }
})

export default Divider
