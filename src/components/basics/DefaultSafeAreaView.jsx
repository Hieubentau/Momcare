import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export const DefaultSafeAreaView = (props) => {
  const { style, children } = props
  return <SafeAreaView style={[container, style]}>{children}</SafeAreaView>
}

const container = {
  flex: 1,
  backgroundColor: '#fff'
}
