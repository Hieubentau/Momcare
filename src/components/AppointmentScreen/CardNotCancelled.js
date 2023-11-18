import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import { Ionicons, AntDesign } from '@expo/vector-icons'

const CardNotCancelled = (props) => {
  const { item, statusAppointmentText, statusAppointmentColor } = props
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const {
    cardWrapper,
    imageWrapper,
    textInfoWrapper,
    doctorName,
    methodWrapper,
    statusWrapper,
    dateAndTimeWrapper,
    methodImageWrapper
  } = styles

  return (
    <View style={cardWrapper}>
      <Ionicons
        name="md-person-outline"
        size={48}
        color="black"
        style={imageWrapper}
      />
      <View style={textInfoWrapper}>
        <Text style={doctorName}>{item.name}</Text>
        <View style={methodWrapper}>
          <Text>{item.method} - </Text>
          <Text
            style={[
              statusWrapper,
              {
                borderColor: statusAppointmentColor,
                color: statusAppointmentColor
              }
            ]}
          >
            {statusAppointmentText}
          </Text>
        </View>
        <Text style={dateAndTimeWrapper}>
          {item.date} | {item.time}
        </Text>
      </View>
      <TouchableOpacity disabled={true} style={methodImageWrapper}>
        <AntDesign name={item.iconAntDesign} size={18} color={themeColor} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center'
  },
  imageWrapper: {},
  textInfoWrapper: {
    flex: 1,
    marginLeft: 16
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  methodWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  statusWrapper: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 15
  },
  dateAndTimeWrapper: {
    marginTop: 4
  },
  methodImageWrapper: {
    backgroundColor: 'gainsboro',
    padding: 12,
    borderRadius: 50
  }
})

export default CardNotCancelled
