import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import DoctorsScreen from '../screens/DoctorsScreen'
import TitleBar from '../components/Basics/TitleBar'
import DoctorInfoScreen from '../screens/DoctorInfoScreen'
import React from 'react'
import BookAppointmentScreen from '../screens/BookAppointmentScreen'
import BookAppointmentMethodScreen from '../screens/BookAppointmentMethodScreen'
import PatientDetailsScreen from '../screens/PatientDetailsScreen'
import AddPaymentMethodScreen from '../screens/AddPaymentMethodScreen'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchDoctor"
        component={DoctorsScreen}
        options={{
          title: 'Search Doctor'
        }}
      />
      <Stack.Screen
        name="DoctorInfo"
        component={DoctorInfoScreen}
        options={{ title: 'Doctor Info' }}
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
      <Stack.Screen
        name="PatientDetails"
        component={PatientDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddPaymentMethod"
        component={AddPaymentMethodScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
