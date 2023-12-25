import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const CustomSafeAreaView = ({ children, style }) => {
  const insets = useSafeAreaInsets()

  return (
    <LinearGradient
      colors={['#FFFFFF', '#F0F0F0']} // Adjust the colors as needed
      style={{
        flex: 1
      }}
    >
      <View
        style={[
          { flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom },
          style
        ]}
      >
        {children}
      </View>
    </LinearGradient>
  )
}

export default CustomSafeAreaView
