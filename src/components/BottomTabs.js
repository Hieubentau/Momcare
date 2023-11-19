import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'

import HomeScreen from '../screens/HomeScreen'
import AppointmentScreen from '../screens/AppointmentScreen'
import PrescriptionScreen from '../screens/PrescriptionScreen'

import { BottomNavigation, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { UserScreen } from '../screens/UserScreen'
import { Foundation } from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator()

const BottomTabs = () => {
  const theme = useTheme()
  const themeColor = theme.colors.primary

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      // screenOptions={{
      //   tabBarActiveTintColor: themeColor,
      //   tabBarInactiveTintColor: 'grey',
      //   tabBarStyle: {
      //     backgroundColor: 'white'
      //   },
      //   headerShown: false
      // }}
      theme={theme}
      shifting={true}
      activeColor={themeColor}
      barStyle={{
        backgroundColor: '#faf3f3',
        // a shadow to the top of the tab bar
        shadow: '5px 5px 5px #000',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        elevation: 0
      }}
      animationEasing={'ease-in-out'}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="home" color={color} size={focused ? 30 : 26} />
          )
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          tabBarLabel: 'Appointment',
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

export default BottomTabs
