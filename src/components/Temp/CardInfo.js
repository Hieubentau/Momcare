import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ThemeColorContext } from '../../contexts/themeColorContext'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import Divider from './Divider'

const CardInfo = ({ item }) => {
  const themeColor = useContext(ThemeColorContext)
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
        <Divider height={8} />
        <Text style={doctorSpeciality}>
          {item.speciality} | {item.hospital}
        </Text>
        <View style={ratingWrapper}>
          <AntDesign name="star" size={16} color={themeColor} />
          <Text>
            {' '}
            {item.rating} ({item.review} reviews)
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    padding: 12
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
