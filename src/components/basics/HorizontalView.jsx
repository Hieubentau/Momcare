import React from 'react'
import { View } from 'react-native'
export const HorizontalView = ({ children, style, ...others }) => {
  return (
    <View style={[container, style]} {...others}>
      {children}
    </View>
  )
}

const container = {
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: 12
}
