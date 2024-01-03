/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper'
import CardInfoDoctor from './CardInfoDoctor'

const CardDoctor = ({ item, onPress, backgroundColor, styles }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardTouchable, { backgroundColor }]}
  >
    <CardInfoDoctor item={item} />
  </TouchableOpacity>
)

const ListDoctorOfHospital = (props) => {
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const {
    navigation,
    item,
    nextScreen,
    listMedicalSpecialty,
    selectedDoctor,
    setSelectedDoctor
  } = props
  const { cardTouchable } = styles

  const backgroundColor = 'white'

  return (
    <CardDoctor
      item={item}
      listMedicalSpecialty={listMedicalSpecialty}
      key={item.doctorId}
      onPress={() => {
        setSelectedDoctor(item.doctorId),
          navigation.navigate(nextScreen, {
            item,
            listMedicalSpecialty
          }),
          console.log(item)
      }}
      onPressout={() => setSelectedDoctor(item.doctorId)}
      backgroundColor={backgroundColor}
      styles={{
        cardTouchable,
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
  }
})

export default ListDoctorOfHospital
