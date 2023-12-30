/* eslint-disable react/jsx-filename-extension */
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

import AppointmentInfo from '../components/basics/AppointmentInfo'

const CompletedAppointmentScreen = (props) => {
  const { navigation, route } = props
  const { item } = route.params

  const {
    container,
    cardWrapper,
    imageWrapper,
    doctorInfoWrapper,
    doctorName,
    doctorSpeciality
  } = styles

  const theme = useTheme()
  const themeColor = theme.colors.primary

  return (
    <SafeAreaView style={container}>
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

      <AppointmentInfo item={item} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
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
  }
})

export default CompletedAppointmentScreen
