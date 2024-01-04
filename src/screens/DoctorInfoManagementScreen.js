/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, StatusBar, Keyboard } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'

import axios from 'axios'
import { API_URL, REQ_RETURN_STATUS } from '../config'
import eventEmitter from '../components/basics/EventEmitter'
import { eventEmitterInfo } from '../ultilities/eventEmitterInfo'

import { Ionicons } from '@expo/vector-icons'
import DoctorInfoTextInput from '../components/HospitalScreen/HospitalManagementDoctor/DoctorInfoTextInput'
import { InputContainerWithHelper } from '../components/basics'
import DropdownDoctorInfo from '../components/HospitalScreen/HospitalManagementDoctor/DropdownDoctorInfo'
import { genders } from '../ultilities/genders'
import { creatorAdminInfo } from '../ultilities/creatorAdminInfo'
import { defaultDoctorInfo } from '../ultilities/defaultDoctorInfo'

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

  console.log(gender.value)

  const fetchData = async (url, method, body) => {
    if (method === 'PUT') {
      try {
        console.log(2000)

        const result = await axios.put(url, body)

        console.log(body)

        if (result.status === 200) {
          return {
            ret: REQ_RETURN_STATUS.OK,
            message: 'Cập nhật thông tin thành công'
          }
        }
      } catch (err) {
        console.log(err)
        return {
          ret: REQ_RETURN_STATUS.SERVER_ERROR,
          message: err.message
        }
      }
    } else if (method === 'POST') {
      try {
        console.log(2000)

        const result = await axios.post(url, body)

        console.log(body)

        if (result.status === 200) {
          return {
            ret: REQ_RETURN_STATUS.OK,
            message: 'Thêm bác sĩ thành công'
          }
        }
      } catch (err) {
        console.log(err)
        return {
          ret: REQ_RETURN_STATUS.SERVER_ERROR,
          message: err.message
        }
      }
    }
  }
  const showErrorDialog = (message) => {
    Dialog.show({
      type: ALERT_TYPE.DANGER,
      title: 'Lỗi',
      textBody: message,
      autoClose: 1000
    })
  }

  const submit = () => async () => {
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

    const sex = (() => {
      switch (gender?.value) {
        case 'Nam':
          return 'MALE'
        case 'Nữ':
          return 'FEMALE'
        default:
          return 'NOT_MENTION'
      }
    })()

    const medicalSpecialtyId =
      listMedicalSpecialty[
        listMedicalSpecialty?.findIndex(
          (item) => item.label === medicalSpecialty.value
        )
      ]?.value

    let updateDoctorInfo = {
      creatorRole: creatorAdminInfo.creatorRole,
      creatorId: creatorAdminInfo.creatorId,
      name: name.value,
      age: parseInt(age.value),
      phone: phone.value,
      sex: sex,
      medicalSpecialtyId: medicalSpecialtyId
    }

    if (passingData.mode === 'update') {
      console.log(updateDoctorInfo)
      const requestUpdateDoctorInfoURL = `${API_URL}/doctors/${passingData.doctorId}`
      const method = 'PUT'
      const result = await fetchData(
        requestUpdateDoctorInfoURL,
        method,
        updateDoctorInfo
      )
      if (result.ret === REQ_RETURN_STATUS.OK) {
        Toast.show({
          type: 'success',
          text1: result.message,
          visibilityTime: 1000
        })
        eventEmitter.emit(eventEmitterInfo.doctorInfoUpdated)
      } else {
        showErrorDialog(result.message)
      }
    } else if (passingData.mode === 'add') {
      updateDoctorInfo = {
        ...updateDoctorInfo,
        hospitalId: passingData.hospitalId,
        email: defaultDoctorInfo.email,
        password: defaultDoctorInfo.password,
        consultingPriceViaCall: defaultDoctorInfo.consultingPriceViaCall,
        consultingPriceViaMessage: defaultDoctorInfo.consultingPriceViaMessage,
        degree: defaultDoctorInfo.degree
      }
      console.log(updateDoctorInfo)
      const requestUpdateDoctorInfoURL = `${API_URL}/create_doctor`
      const method = 'POST'
      const result = await fetchData(
        requestUpdateDoctorInfoURL,
        method,
        updateDoctorInfo
      )
      if (result.ret === REQ_RETURN_STATUS.OK) {
        Toast.show({
          type: 'success',
          text1: result.message,
          visibilityTime: 1000
        })
        eventEmitter.emit(eventEmitterInfo.doctorInfoAdded)
      } else {
        showErrorDialog(result.message)
      }
    }

    navigation.navigate('Hospital', { passingData })
  }

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
        <Button style={buttonUpdateWrapper} mode="contained" onPress={submit()}>
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
