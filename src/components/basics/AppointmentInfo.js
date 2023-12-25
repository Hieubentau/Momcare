import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppointmentInfoText from '../UpcomingAppointmentScreen/AppointmentInfoText'
import CardMethod from './CardMethod'

const AppointmentInfo = ({ item }) => {
  const { appointmentInfoText, appointmentInfoTitle, cardPackageMethod } =
    styles
  return (
    <View>
      <Text style={appointmentInfoTitle}>Scheduled Appointment</Text>
      <Text style={appointmentInfoText}>{item.date}</Text>
      <Text>
        {item.time} ({item.duration})
      </Text>
      <Text style={appointmentInfoTitle}>Patient Information</Text>
      <AppointmentInfoText
        appointmentInfoText={appointmentInfoText}
        category="Full Name"
        content={item.patientFullName}
      />
      <AppointmentInfoText
        appointmentInfoText={appointmentInfoText}
        category="Gender"
        content={item.patientGender}
      />
      <AppointmentInfoText
        appointmentInfoText={appointmentInfoText}
        category="Age"
        content={item.patientAge}
      />
      <AppointmentInfoText
        appointmentInfoText={appointmentInfoText}
        category="Problem"
        content={item.patientProblem}
      />
      <Text style={appointmentInfoTitle}>Your Package</Text>
      <TouchableOpacity disabled={true} style={cardPackageMethod}>
        <CardMethod item={item} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  appointmentInfoTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  appointmentInfoText: {
    marginTop: 4
  },
  cardPackageMethod: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 100,
    justifyContent: 'center',
    marginTop: 6
  }
})

export default AppointmentInfo
