import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ThemeColorContext } from '../../contexts/themeColorContext'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import Divider from './Divider'

const Card = ({ item, onPress, backgroundColor, styles }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardTouchable, { backgroundColor }]}
  >
    <View style={styles.cardWrapper}>
      <Ionicons
        name="md-person-outline"
        size={48}
        color="black"
        style={styles.imageWrapper}
      />
      <View style={styles.textInfoWrapper}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Divider height={8} />
        <Text style={styles.doctorSpeciality}>
          {item.speciality} | {item.hospital}
        </Text>
        <View style={styles.ratingWrapper}>
          <AntDesign name="star" size={16} color={styles.themeColor} />
          <Text>
            {' '}
            {item.rating} ({item.review} reviews)
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

const ListCards = (props) => {
  const themeColor = useContext(ThemeColorContext)
  const { item, selectedDoctor, setSelectedDoctor } = props
  const {
    cardTouchable,
    cardWrapper,
    textInfoWrapper,
    doctorName,
    doctorSpeciality,
    ratingWrapper
  } = styles

  const backgroundColor = item.id === selectedDoctor ? 'gainsboro' : 'white'

  return (
    <Card
      item={item}
      onPress={() => setSelectedDoctor(item.id)}
      onPressout={() => setSelectedDoctor(item.id)}
      backgroundColor={backgroundColor}
      styles={{
        cardTouchable,
        cardWrapper,
        textInfoWrapper,
        doctorName,
        doctorSpeciality,
        ratingWrapper,
        themeColor
      }}
    />
  )
}

const styles = StyleSheet.create({
  cardTouchable: {
    borderRadius: 16,
    height: 100,
    justifyContent: 'center'
  },
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

export default ListCards
