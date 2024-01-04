import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

export const DefaultSafeAreaView = (props) => {
  const { style, children, usingLinear = false } = props
  return usingLinear ? (
    <LinearGradient
      colors={['#FFFFFF', '#F0F0F0']} // Adjust the colors as needed
      style={{
        flex: 1
      }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  ) : (
    <SafeAreaView style={[container, style]}>{children}</SafeAreaView>
  )
}

const container = {
  flex: 1,
  backgroundColor: '#fff'
}
