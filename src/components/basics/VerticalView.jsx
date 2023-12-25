import React from 'react'
import { ScrollView, View } from 'react-native'

// a vertical view is a view that contains a column of elements

export const VerticalView = ({
  children,
  style,
  withScroll = false,
  contentContainerStyle,
  ...other
}) => {
  return (
    <>
      {withScroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          style={[container, style]}
          contentContainerStyle={[contentContainer, contentContainerStyle]}
          {...other}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[container, contentContainer, style]}>{children}</View>
      )}
    </>
  )
}

const container = {
  width: '100%',
  flexDirection: 'column'
}

const contentContainer = {
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12
}
