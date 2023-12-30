/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import statusAppointmentColor from './StatusAppointmentColor'
import { AntDesign } from '@expo/vector-icons'

const CardMethod = ({ item }) => {
  const appointmentColor = statusAppointmentColor(item.appointmentStatus)

  const {
    cardWrapper,
    methodImageWrapper,
    methodDescriptionWrapper,
    methodName,
    methodDescription,
    methodPrice
  } = styles

  return (
    <View style={cardWrapper}>
      <TouchableOpacity disabled={true} style={methodImageWrapper}>
        <AntDesign
          name={item.iconAntDesign}
          size={28}
          color={appointmentColor}
        />
      </TouchableOpacity>
      <View style={methodDescriptionWrapper}>
        <Text style={methodName}>{item.method}</Text>
        <Text style={methodDescription}>{item.description}</Text>
      </View>
      <Text style={[methodPrice, { color: appointmentColor }]}>
        ${item.price}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center'
  },
  methodImageWrapper: {
    backgroundColor: 'gainsboro',
    padding: 16,
    borderRadius: 50
  },
  methodDescriptionWrapper: {
    flex: 1,
    marginLeft: 16
  },
  methodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2
  },
  methodDescription: {
    marginTop: 2
  },
  methodPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2
  }
})

export default CardMethod
