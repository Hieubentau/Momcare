import { View } from 'react-native'

// a vertical view is a view that contains a column of elements

export const VerticalView = ({ children, style }) => {
  return (
    <View
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
      }}
    >
      {children}
    </View>
  )
}
