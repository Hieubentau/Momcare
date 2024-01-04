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
    primary: 'dodgerblue',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(212, 227, 255)',
    onPrimaryContainer: 'rgb(0, 28, 58)',
    secondary: 'rgb(84, 95, 113)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(216, 227, 248)',
    onSecondaryContainer: 'rgb(17, 28, 43)',
    tertiary: 'rgb(110, 86, 118)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(247, 216, 255)',
    onTertiaryContainer: 'rgb(39, 20, 48)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(253, 252, 255)',
    onBackground: 'rgb(26, 28, 30)',
    surface: 'rgb(255, 255, 255)',
    onSurface: 'rgb(26, 28, 30)',
    surfaceVariant: 'rgb(224, 226, 236)',
    onSurfaceVariant: 'rgb(67, 71, 78)',
    outline: 'rgb(116, 119, 127)',
    outlineVariant: 'rgb(195, 198, 207)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(47, 48, 51)',
    inverseOnSurface: 'rgb(241, 240, 244)',
    inversePrimary: 'rgb(165, 200, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(240, 244, 251)',
      level2: 'rgb(233, 239, 249)',
      level3: 'rgb(225, 235, 246)',
      level4: 'rgb(223, 233, 245)',
      level5: 'rgb(218, 230, 244)'
    },
    surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
    onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
    backdrop: 'rgba(45, 49, 56, 0.4)'
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
