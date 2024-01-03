/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import statusAppointmentColor from '../basics/StatusAppointmentColor'

const CardAppointment = ({ item }) => {
  const appointmentColor = statusAppointmentColor(item.state)

  const {
    cardWrapper,
    imageWrapper,
    textInfoWrapper,
    patientName,
    methodWrapper,
    statusWrapper,
    dateAndTimeWrapper
  } = styles

  return (
    <View style={cardWrapper}>
      <MaterialCommunityIcons
        name="hospital"
        size={48}
        color="black"
        style={imageWrapper}
      />

      <View style={textInfoWrapper}>
        <Text style={patientName}>Ngày: {item.date}</Text>
        <Text style={dateAndTimeWrapper}>Thời gian: {item.hour}</Text>
      </View>
      <View style={methodWrapper}>
        <Text
          style={[
            statusWrapper,
            {
              borderColor: appointmentColor,
              color: appointmentColor
            }
          ]}
        >
          {item.state === 'UNCOMFIRM' ? 'UNCONFIRM' : item.state}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    backgroundColor: 'gainsboro',
    height: 80,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center'
  },
  imageWrapper: {},
  textInfoWrapper: {
    flex: 1,
    marginLeft: 16
  },
  patientName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  methodWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusWrapper: {
    fontSize: 12,
    padding: 4,
    borderWidth: 1,
    borderRadius: 15
  },
  dateAndTimeWrapper: {
    marginTop: 4
  }
})

export default CardAppointment
