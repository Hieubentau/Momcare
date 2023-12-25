import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Divider, useTheme } from 'react-native-paper'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useMedicalSpecialty } from '../../hooks/useMisc'

const CardInfo = ({ item }) => {
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const {
    cardWrapper,
    imageWrapper,
    textInfoWrapper,
    doctorName,
    doctorSpeciality,
    ratingWrapper
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
        <Divider />
        <Text style={doctorSpeciality}>
          {item.medicalSpecialty} | {item.hospitalId}
        </Text>
        <View style={ratingWrapper}>
          <AntDesign name="star" size={16} color={themeColor} />
          <Text>
            {' '}
            {item.point ?? 0} ({item.review} reviews)
          </Text>
        </View>
      </View>
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
    marginBottom: 2
  },
  doctorSpeciality: {
    marginTop: 2
  },
  ratingWrapper: {
    flexDirection: 'row',
    marginTop: 4
  }
})

export default CardInfo
