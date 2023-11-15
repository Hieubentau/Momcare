import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from './src/screens/SplashScreen'
import SignInScreen from './src/screens/SignInScreen'
import Tabs from './src/components/Tabs'
import DoctorsScreen from './src/screens/DoctorsScreen'
import DoctorInfoScreen from './src/screens/DoctorInfoScreen'
import BookAppointmentScreen from './src/screens/BookAppointmentScreen'
import BookAppointmentMethodScreen from './src/screens/BookAppointmentMethodScreen'

import { AuthProvider } from './src/contexts/authContext'
import { useAuthContext } from './src/hooks/useAuthContext'
import { DefaultTheme, PaperProvider } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import {
  AppStateContext,
  AppStateProvider
} from './src/contexts/appStateContext'
import { AlertNotificationRoot } from 'react-native-alert-notification'
import PatientDetailsScreen from './src/screens/PatientDetailsScreen'

const Stack = createNativeStackNavigator()

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    // a custom theme color often used in healthcare apps
    primary: 'dodgerblue'
    // a custom background color for content areas
  }
}

const InnerApp = ({ splashVisible }) => {
  const { isLoggedIn } = useContext(AppStateContext)
  console.log(isLoggedIn)

  return (
    <AlertNotificationRoot theme={'dark'}>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator>
              {splashVisible ? (
                <Stack.Screen
                  name="Splash"
                  component={SplashScreen}
                  options={{ headerShown: false }}
                />
              ) : !isLoggedIn ? (
                // No token found, user isn't signed in
                <Stack.Screen
                  name="SignIn"
                  component={SignInScreen}
                  options={{
                    headerShown: false,
                    title: 'Sign In'
                    // When logging out, a pop animation feels intuitive
                    //animationTypeForReplace: state.isSignout ? 'pop' : 'push'
                  }}
                />
              ) : (
                <Stack.Screen
                  name="Tabs"
                  component={Tabs}
                  options={{ headerShown: false }}
                />
              )}
              <Stack.Screen
                name="Doctors"
                component={DoctorsScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="DoctorInfo"
                component={DoctorInfoScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BookAppointment"
                component={BookAppointmentScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BookAppointmentMethod"
                component={BookAppointmentMethodScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
						<Stack.Screen
							name="PatientDetails"
							component={PatientDetailsScreen}
							options={{ headerShown: false }}
						/>
          </NavigationContainer>
          <Toast autoHide={true} />
        </PaperProvider>
      </AuthProvider>
    </AlertNotificationRoot>
  )
}

export default function App() {
  const { isLoggedIn } = useContext(AppStateContext)
  const [splashVisible, setSplashVisible] = React.useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false)
    }, 1000)
  }, [])

  console.log(isLoggedIn)

  return (
    <AppStateProvider>
      <InnerApp splashVisible={splashVisible} />
    </AppStateProvider>
  )
}
