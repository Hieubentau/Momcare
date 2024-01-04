import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HorizontalView } from './HorizontalView'
import { Text } from 'react-native-paper'

export const Section = (props) => {
  const { children, title, style, buttons } = props
  return (
    <View style={[styles.container, style]}>
      <HorizontalView style={styles.titleContainer}>
        <Text variant="titleMedium">{title}</Text>
        <View style={styles.buttonContainer}>{[...buttons]}</View>
      </HorizontalView>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column'
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 12
  },
  buttonContainer: {
    flexDirection: 'row'
  }
})
