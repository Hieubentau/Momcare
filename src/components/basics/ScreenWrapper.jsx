import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React, { ScrollView, View } from 'react-native'

export const ScreenWrapper = (props) => {
  const { children, withScroll = true, style, ...other } = props
  const insets = useSafeAreaInsets()
  const containerStyle = [
    container,
    {
      paddingBottom: insets.bottom,
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }
  ]
  return (
    <>
      {withScroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          style={[containerStyle, style]}
          {...other}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, style]}>{children}</View>
      )}
    </>
  )
}

const container = {
  flex: 1,
  backgroundColor: '#fff'
}
