import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { Divider, useTheme } from 'react-native-paper'

import { Ionicons } from '@expo/vector-icons'

import TitleBar from '../components/Basics/TitleBar'

const UpcomingAppointmentScreen = (props) => {
  const { navigation, route } = props
  const { item } = route.params

  const {
    container,
    cardWrapper,
    imageWrapper,
    doctorInfoWrapper,
    doctorName,
    doctorSpeciality,
    optionAppointmentWrapper,
    appointmentButton,
    appointmentText
  } = styles

  const theme = useTheme()
  const themeColor = theme.colors.primary

  return (
    <SafeAreaView style={container}>
      <TitleBar
        navigation={navigation}
        previousScreen="Appointment"
        titleName="My Appointment"
      />
      <TouchableOpacity style={[cardWrapper, { height: 100 }]} disabled={true}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name="md-person-outline"
            size={48}
            color="black"
            style={imageWrapper}
          />
          <View style={doctorInfoWrapper}>
            <Text style={doctorName}>{item.name}</Text>
            <Divider />
            <Text style={doctorSpeciality}>{item.speciality}</Text>
            <Text style={doctorSpeciality}>{item.hospital}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={optionAppointmentWrapper}>
        <TouchableOpacity
          style={[
            appointmentButton,
            { backgroundColor: 'white', borderColor: themeColor }
          ]}
        >
          <Text style={[appointmentText, { color: themeColor }]}>
            Cancel Appointment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            appointmentButton,
            { backgroundColor: themeColor, borderColor: themeColor }
          ]}
        >
          <Text style={[appointmentText, { color: 'white' }]}>
            Reschedule Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0
  },
  cardWrapper: {
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 12,
    marginTop: 0
  },
  imageWrapper: {
    flex: 0.25
  },
  doctorInfoWrapper: {
    flex: 1
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2
  },
  doctorSpeciality: {
    marginTop: 4
  },
  optionAppointmentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6
  },
  appointmentButton: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 8
  },
  appointmentText: {
    fontSize: 14
  }
})

export default UpcomingAppointmentScreen
