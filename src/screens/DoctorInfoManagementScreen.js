/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList } from 'react-native'
import { TextInput } from 'react-native-paper'

import { Ionicons } from '@expo/vector-icons'
import ListCardsInfo from '../components/Doctors/ListCardsInfo'
import AbsoluteBottomButton from '../components/basics/AbsoluteBottomButton'
import DoctorInfoTextInput from '../components/HospitalScreen/DoctorInfoTextInput'

const DoctorInfoManagementScreen = (props) => {
  const { navigation, route } = props
  const { item: passingData } = route.params
  console.log('1', passingData)

  const [name, setName] = useState(passingData.name ?? '')
  const [hospitalId, setHospitalId] = useState(passingData.hospitalId ?? '')
  const [medicalSpecialty, setMedicalSpecialty] = useState(
    passingData.medicalSpecialty ?? ''
  )

  const { container, imageWrapper, textInputWrapper } = styles

  return (
    <View style={container}>
      <Ionicons
        name="md-person-outline"
        size={56}
        color="black"
        style={imageWrapper}
      />
      <DoctorInfoTextInput
        label="Họ và tên"
        value={name}
        mode="outlined"
        style={textInputWrapper}
        onChangeText={(text) => setName(text)}
      />
      <DoctorInfoTextInput
        label="Bệnh viện"
        value={hospitalId}
        mode="outlined"
        style={textInputWrapper}
        onChangeText={(text) => setHospitalId(text)}
      />
      <DoctorInfoTextInput
        label="Chuyên khoa"
        value={medicalSpecialty}
        mode="outlined"
        style={textInputWrapper}
        onChangeText={(text) => setMedicalSpecialty(text)}
      />
      <AbsoluteBottomButton
        nextScreen="Hospital"
        passingData={passingData}
        buttonName="Lưu"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0
  },
  imageWrapper: {
    flexDirection: 'row',
    padding: 12,
    alignSelf: 'center'
  },
  textInputWrapper: {
    marginBottom: 16
  }
})

export default DoctorInfoManagementScreen
