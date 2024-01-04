import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import AppointmentScreen from '../screens/AppointmentScreen'
import PrescriptionScreen from '../screens/PrescriptionScreen'

import { useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { UserScreen } from '../screens/UserScreen'
import { Foundation } from '@expo/vector-icons'
import { HomeScreen } from '../screens'

const Tab = createMaterialBottomTabNavigator()

export const PatientNavigator = () => {
  const theme = useTheme()
  const themeColor = theme.colors.primary

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      theme={theme}
      shifting={true}
      activeColor={themeColor}
      inactiveColor={'grey'}
      barStyle={{
        backgroundColor: 'white',
        shadow: '5px 5px 5px #000',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        elevation: 0,
        borderTopWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopStyle: 'solid',
        borderColor: '#cecece',
        overflow: 'hidden'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="home" color={color} size={focused ? 30 : 26} />
          )
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          tabBarLabel: 'Đặt lịch',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="calendar"
              color={color}
              size={focused ? 30 : 26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Prescription"
        component={PrescriptionScreen}
        options={{
          tabBarLabel: 'Prescription',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="description"
              color={color}
              size={focused ? 30 : 26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="person"
              color={color}
              size={focused ? 30 : 26}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}
