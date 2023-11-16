import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useTheme } from 'react-native-paper'
import Upcoming from '../components/AppointmentScreen/Upcoming'
import Completed from '../components/AppointmentScreen/Completed'
import Cancelled from '../components/AppointmentScreen/Cancelled'

const TopTabs = createMaterialTopTabNavigator()

const AppointmentScreen = () => {
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const { container, titleName } = styles
  return (
    <View style={container}>
      <Text style={titleName}>Appointment</Text>
      <TopTabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: themeColor,
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          },
          headerShown: false
        }}
      >
        <TopTabs.Screen name="Upcoming" component={Upcoming} />
        <TopTabs.Screen name="Completed" component={Completed} />
        <TopTabs.Screen name="Cancelled" component={Cancelled} />
      </TopTabs.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0
  },
  titleName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  }
})

export default AppointmentScreen
