/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, StatusBar, Keyboard } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import { Ionicons } from '@expo/vector-icons'
import DoctorInfoTextInput from '../components/HospitalScreen/HospitalManagementDoctor/DoctorInfoTextInput'
import { InputContainerWithHelper } from '../components/basics'
import DropdownDoctorInfo from '../components/HospitalScreen/HospitalManagementDoctor/DropdownDoctorInfo'
import { genders } from '../ultilities/genders'
import { medicalSpecialties } from '../ultilities/medicalSpecialties'

const DoctorInfoManagementScreen = (props) => {
  const { navigation, route } = props
  const { item: passingData, listMedicalSpecialty } = route.params

  const [showNextButton, setShowNextButton] = useState(true)

  useEffect(() => {
    // Add a listener for keyboard hide events
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setShowNextButton(true)
        nameRef.current && nameRef.current.blur()
        ageRef.current && ageRef.current.blur()
        phoneRef.current && phoneRef.current.blur()
      }
    )

    // Clean up the listener on component unmount
    return () => {
      keyboardDidHideListener.remove()
    }
  }, [])
  const nameRef = useRef()
  const ageRef = useRef()
  const phoneRef = useRef()

  const [name, setName] = useState({
    value: passingData.name ?? '',
    error: null
  })
  const [age, setAge] = useState({
    value: passingData.age?.toString() ?? '',
    error: null
  })
  const [phone, setPhone] = useState({
    value: passingData.phone ?? '',
    error: null
  })
  const [gender, setGender] = useState({
    value: passingData.sex ?? '',
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
            inputMode="text"
            style={textInputWrapper}
            onChangeText={(e) => setValue(e, setName)}
            onFocus={() => setShowNextButton(false)}
            isDisabled={false}
          />
        </InputContainerWithHelper>

        <InputContainerWithHelper helperText={age.error}>
          <DoctorInfoTextInput
            ref={ageRef}
            label="Tuổi"
            value={age.value}
            error={!!age.error}
            mode="outlined"
            inputMode="numeric"
            style={textInputWrapper}
            onChangeText={(e) => setValue(e, setAge)}
            onFocus={() => setShowNextButton(false)}
            isDisabled={false}
          />
        </InputContainerWithHelper>
        <InputContainerWithHelper helperText={phone.error}>
          <DoctorInfoTextInput
            ref={phoneRef}
            label="Số điện thoại"
            value={phone.value}
            error={!!phone.error}
            mode="outlined"
            inputMode="numeric"
            style={textInputWrapper}
            onChangeText={(e) => setValue(e, setPhone)}
            onFocus={() => setShowNextButton(false)}
            isDisabled={false}
          />
        </InputContainerWithHelper>

        <View style={textInputWrapper}>
          <InputContainerWithHelper helperText={gender.error}>
            <DropdownDoctorInfo
              listDataValue={genders}
              dataValue={gender}
              setDataValue={setGender}
              title={passingData.gender ?? 'Chọn giới tính'}
              titleIconMaterialCommunityIcons="account"
            />
          </InputContainerWithHelper>
        </View>

        <View style={textInputWrapper}>
          <InputContainerWithHelper helperText={medicalSpecialty.error}>
            <DropdownDoctorInfo
              listDataValue={listMedicalSpecialty}
              dataValue={medicalSpecialty}
              setDataValue={setMedicalSpecialty}
              title={passingData.medicalSpecialty ?? 'Chọn chuyên khoa'}
              titleIconMaterialCommunityIcons="doctor"
            />
          </InputContainerWithHelper>
        </View>

        <DoctorInfoTextInput
          label="Bệnh viện công tác"
          value={passingData.hospitalName}
          mode="outlined"
          style={textInputWrapper}
          isDisabled={true}
        />
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
            if (!isFieldValid(age)) {
              console.log(age.value.length)
              setAge({ ...age, error: 'Vui lòng nhập tuổi' })
              return
            }
            if (!isFieldValid(phone)) {
              setPhone({ ...phone, error: 'Vui lòng nhập số điện thoại' })
              return
            }
            if (gender.value === '') {
              setGender({
                ...gender,
                error: 'Vui lòng chọn giới tính'
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
    marginTop: 16
  },
  buttonUpdateWrapper: {}
})

export default DoctorInfoManagementScreen
