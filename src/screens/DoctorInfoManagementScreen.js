/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, StatusBar, Keyboard } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import { Ionicons } from '@expo/vector-icons'
import DoctorInfoTextInput from '../components/HospitalScreen/DoctorInfoTextInput'
import { InputContainerWithHelper } from '../components/basics'
import DropdownDoctorInfo from '../components/HospitalScreen/DropdownDoctorInfo'
import { hospitals } from '../ultilities/hospitals'
import { medicalSpecialties } from '../ultilities/medicalSpecialties'

const DoctorInfoManagementScreen = (props) => {
  const { navigation, route } = props
  const { item: passingData } = route.params

  const [showNextButton, setShowNextButton] = useState(true)

  useEffect(() => {
    // Add a listener for keyboard hide events
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setShowNextButton(true)
        nameRef.current && nameRef.current.blur()
        medicalSpecialtyRef.current && medicalSpecialtyRef.current.blur()
      }
    )

    // Clean up the listener on component unmount
    return () => {
      keyboardDidHideListener.remove()
    }
  }, [])
  const nameRef = useRef()
  const medicalSpecialtyRef = useRef()

  const [name, setName] = useState({
    value: passingData.name ?? '',
    error: null
  })
  const [hospital, setHospital] = useState({
    value: passingData.hospitalId ?? '',
    error: null
  })
  const [medicalSpecialty, setMedicalSpecialty] = useState({
    value: passingData.medicalSpecialty ?? '',
    error: null
  })
  const setValue = (e, setter) => setter({ value: e, error: null })
  const isFieldValid = (field) => field.value.length > 0

  const { container, imageWrapper, textInputWrapper, buttonUpdateWrapper } =
    styles

  return (
    <View style={container}>
      <View>
        <Ionicons
          name="md-person-outline"
          size={56}
          color="black"
          style={imageWrapper}
        />
        <InputContainerWithHelper helperText={name.error}>
          <DoctorInfoTextInput
            ref={nameRef}
            label="Họ và tên"
            value={name.value}
            error={!!name.error}
            mode="outlined"
            style={textInputWrapper}
            onChangeText={(e) => setValue(e, setName)}
            onFocus={() => setShowNextButton(false)}
          />
        </InputContainerWithHelper>

        <View style={{ marginTop: 16 }}>
          <InputContainerWithHelper helperText={hospital.error}>
            <DropdownDoctorInfo
              listDataValue={hospitals}
              dataValue={hospital}
              setDataValue={setHospital}
              title={passingData.hospitalId ?? 'Chọn bệnh viện công tác'}
              titleIconMaterialCommunityIcons="hospital-marker"
            />
          </InputContainerWithHelper>
        </View>

        <View style={{ marginTop: 16 }}>
          <InputContainerWithHelper helperText={medicalSpecialty.error}>
            <DropdownDoctorInfo
              listDataValue={medicalSpecialties}
              dataValue={medicalSpecialty}
              setDataValue={setMedicalSpecialty}
              title={passingData.medicalSpecialty ?? 'Chọn chuyên khoa'}
              titleIconMaterialCommunityIcons="doctor"
            />
          </InputContainerWithHelper>
        </View>
        {/* <InputContainerWithHelper helperText={medicalSpecialty.error}>
          <DoctorInfoTextInput
            ref={medicalSpecialtyRef}
            label="Chuyên khoa"
            value={medicalSpecialty.value}
            error={!!medicalSpecialty.error}
            mode="outlined"
            style={textInputWrapper}
            onChangeText={(e) => setValue(e, setMedicalSpecialty)}
            onFocus={() => setShowNextButton(false)}
          />
        </InputContainerWithHelper> */}
      </View>
      {showNextButton ? (
        <Button
          style={buttonUpdateWrapper}
          mode="contained"
          onPress={() => {
            if (!isFieldValid(name)) {
              setName({ ...name, error: 'Vui lòng nhập tên bác sĩ' })
              return
            }
            if (hospital.value === '') {
              setHospital({
                ...hospital,
                error: 'Vui lòng chọn bệnh viện công tác'
              })
              return
            }
            if (medicalSpecialty.value === '') {
              setMedicalSpecialty({
                ...medicalSpecialty,
                error: 'Vui lòng chọn chuyên khoa'
              })
              return
            }

            navigation.navigate('Hospital', { passingData })
          }}
        >
          Lưu
        </Button>
      ) : null}
    </View>
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
  imageWrapper: {
    flexDirection: 'row',
    padding: 12,
    alignSelf: 'center'
  },
  textInputWrapper: {
    marginTop: 24
  },
  buttonUpdateWrapper: {}
})

export default DoctorInfoManagementScreen
