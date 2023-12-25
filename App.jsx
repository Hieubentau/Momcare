import React, { useEffect } from 'react'
import { DefaultTheme, PaperProvider } from 'react-native-paper'
import { AlertNotificationRoot } from 'react-native-alert-notification'
import { AuthProvider, GlobalStateProvider } from './src/contexts'
import InnerApp from './src/root'
import * as SplashScreen from 'expo-splash-screen'

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    // a custom theme color often used in healthcare apps
    primary: 'dodgerblue',
    secondaryContainer: 'transparent'
  }
}

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [splashVisible, setSplashVisible] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false)
      SplashScreen.hideAsync()
    }, 1000)
  }, [])

  if (splashVisible) {
    return null
  }

  return (
    <GlobalStateProvider>
      <AlertNotificationRoot theme={'dark'}>
        <AuthProvider>
          <PaperProvider theme={theme}>
            <InnerApp />
          </PaperProvider>
        </AuthProvider>
      </AlertNotificationRoot>
    </GlobalStateProvider>
  )
}
