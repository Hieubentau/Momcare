import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'

import PrescriptionScreen from '../screens/PrescriptionScreen'

import { BottomNavigation, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { UserScreen } from '../screens/UserScreen'
import { Foundation } from '@expo/vector-icons'
import HomeStack from '../stack/HomeStack'
import AppointmentStack from '../stack/AppointmentStack'

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
        backgroundColor: 'white',
        // a shadow to the top of the tab bar
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
      animationEasing={'ease-in-out'}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="home" color={color} size={focused ? 30 : 26} />
          )
        }}
      />
      <Tab.Screen
        name="AppointmentStack"
        component={AppointmentStack}
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
