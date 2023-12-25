/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'

import { useTheme } from 'react-native-paper'
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons'

import HospitalManagementDoctor from './HospitalScreen/HospitalManagementDoctor'
import HospitalManagementSchedule from './HospitalScreen/HospitalManagementSchedule'

const Tab = createMaterialBottomTabNavigator()

const HospitalBottomTabs = () => {
  const theme = useTheme()
  const themeColor = theme.colors.primary

  return (
    <Tab.Navigator
      initialRouteName={'Doctor'}
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
      animationEasing={'ease-in-out'}
    >
      <Tab.Screen
        name="Doctor"
        component={HospitalManagementDoctor}
        options={{
          tabBarLabel: 'Doctor',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={focused ? 30 : 26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={HospitalManagementSchedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name="calendar"
              color={color}
              size={focused ? 30 : 26}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default HospitalBottomTabs
