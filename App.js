import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './src/screens/SplashScreen'
import SignInScreen from './src/screens/SignInScreen'
import BottomTabs from './src/components/BottomTabs'
import DoctorsScreen from './src/screens/DoctorsScreen'
import DoctorInfoScreen from './src/screens/DoctorInfoScreen'
import BookAppointmentScreen from './src/screens/BookAppointmentScreen'
import BookAppointmentMethodScreen from './src/screens/BookAppointmentMethodScreen'
import AddPaymentMethodScreen from './src/screens/AddPaymentMethodScreen'

import { AuthProvider } from './src/contexts/authContext'
import { DefaultTheme, PaperProvider } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import {
  AppStateContext,
  AppStateProvider
} from './src/contexts/appStateContext'
import { AlertNotificationRoot } from 'react-native-alert-notification'
import PatientDetailsScreen from './src/screens/PatientDetailsScreen'
import ReviewSummaryScreen from './src/screens/ReviewSummaryScreen'
import CompletedAppointmentScreen from './src/screens/CompletedAppointmentScreen'
import UpcomingAppointmentScreen from './src/screens/UpcomingAppointmentScreen'
import TitleBar from './src/components/Basics/TitleBar'

const Stack = createStackNavigator()

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

const InnerApp = ({ splashVisible }) => {
  const { isLoggedIn } = useContext(AppStateContext)

  return (
    <AlertNotificationRoot theme={'dark'}>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={splashVisible ? 'Splash' : 'SignIn'}
              screenOptions={{
                header: ({ navigation, route, options, back }) => {
                  return (
                    <TitleBar
                      navigation={navigation}
                      route={route}
                      options={options}
                      back={back}
                    />
                  )
                },
                headerMode: 'screen'
              }}
            >
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
                    title: 'Sign In',
                    animationTypeForReplace: !isLoggedIn ? 'pop' : 'push'
                  }}
                />
              ) : (
                <Stack.Screen
                  name="Tabs"
                  component={BottomTabs}
                  options={{ headerShown: false }}
                />
              )}
              <Stack.Screen
                name="Doctors"
                component={DoctorsScreen}
                options={{ headerTitle: 'Search Doctors' }}
              />

              <Stack.Screen
                name="DoctorInfo"
                component={DoctorInfoScreen}
                options={{ headerTitle: 'Doctor Info' }}
              />
              <Stack.Screen
                name="BookAppointment"
                component={BookAppointmentScreen}
                options={{ headerTitle: 'Book Appointment' }}
              />
              <Stack.Screen
                name="BookAppointmentMethod"
                component={BookAppointmentMethodScreen}
                options={{ headerTitle: 'Appointment Schedule' }}
              />
              <Stack.Screen
                name="PatientDetails"
                component={PatientDetailsScreen}
                options={{ headerTitle: 'Patient Details' }}
              />
              <Stack.Screen
                name="AddPaymentMethod"
                component={AddPaymentMethodScreen}
                options={{ headerTitle: 'Add New Card' }}
              />
              <Stack.Screen
                name="ReviewSummary"
                component={ReviewSummaryScreen}
                options={{ headerTitle: 'Review Summary' }}
              />
              <Stack.Screen
                name="CompletedAppointment"
                component={CompletedAppointmentScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UpcomingAppointment"
                component={UpcomingAppointmentScreen}
                options={{ headerTitle: 'My Appointment' }}
              />
            </Stack.Navigator>
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
