import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from './src/screens/SplashScreen'
import SignInScreen from './src/screens/SignInScreen'
import Tabs from './src/components/Tabs'

import { AuthContext } from './src/contexts/authContext'
import { ThemeColorContext } from './src/contexts/themeColorContext'
import { useAuthContext } from './src/hooks/useAuthContext'

const Stack = createNativeStackNavigator()

export default function App() {
  const [state, authContext] = useAuthContext()
  const themeColor = 'dodgerblue'
  const [splashVisible, setSplashVisible] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false)
    }, 1000)
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      <ThemeColorContext.Provider value={themeColor}>
        <NavigationContainer>
          <Stack.Navigator>
            {splashVisible ? (
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            ) : state.isLoading ? (
              // We haven't finished checking for the token yet
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            ) : state.userToken == null ? (
              // No token found, user isn't signed in
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  title: 'Sign In',
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push'
                }}
              />
            ) : (
              // User is signed in
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeColorContext.Provider>
    </AuthContext.Provider>
  )
}
