import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import AppointmentScreen from '../screens/AppointmentScreen'
import PrescriptionScreen from '../screens/PrescriptionScreen'

import { ThemeColorContext } from '../contexts/themeColorContext'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  const themeColor = useContext(ThemeColorContext)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: themeColor,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'white'
        },
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
      <Tab.Screen name="Prescription" component={PrescriptionScreen} />
    </Tab.Navigator>
  )
}

export default Tabs
