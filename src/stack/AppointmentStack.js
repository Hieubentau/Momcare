import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppointmentScreen from '../screens/AppointmentScreen'
import ReviewSummaryScreen from '../screens/ReviewSummaryScreen'
import CompletedAppointmentScreen from '../screens/CompletedAppointmentScreen'
import UpcomingAppointmentScreen from '../screens/UpcomingAppointmentScreen'
import React from 'react'

const Stack = createNativeStackNavigator()

const AppointmentStack = () => {
  return (
    <Stack.Navigator initialRouteName="Appointment">
      <Stack.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewSummary"
        component={ReviewSummaryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompletedAppointment"
        component={CompletedAppointmentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpcomingAppointment"
        component={UpcomingAppointmentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AppointmentStack
