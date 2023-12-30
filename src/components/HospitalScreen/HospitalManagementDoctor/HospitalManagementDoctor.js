/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { API_URL, REQ_RETURN_STATUS } from '../../../config'

import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Button, FAB } from 'react-native-paper'

import { useTheme } from 'react-native-paper'
import { ItemSeparatorHeight } from '../../basics/ItemSeparatorHeight'
import ListDoctorOfHospital from './ListDoctorOfHospital'
import SearchBarComponent from '../../HomeScreen/SearchBarComponent'

import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import { genders } from '../../../ultilities/genders'

const HospitalManagementDoctor = ({ navigation }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const refSearchBar = useRef(null)

  const hospitalId = 1
  const [hospitalInfo, setHospitalInfo] = useState([])
  const fetchHospitalInfo = async () => {
    try {
      console.log(1000)
      const response = await axios.get(`${API_URL}/hospital/${hospitalId}`)

      console.log(response.data)

      return {
        ret: REQ_RETURN_STATUS.OK,
        data: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        ret: REQ_RETURN_STATUS.SERVER_ERROR,
        message: err.message
      }
    }
  }
  useEffect(() => {
    const getHospitalInfo = async () => {
      const result = await fetchHospitalInfo()
      if (result.ret === REQ_RETURN_STATUS.OK) {
        setHospitalInfo(result.data)
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Lỗi kết nối',
          textBody: result.message,
          autoClose: 1000
        })
      }
    }
    getHospitalInfo()
  }, [])

  const [doctorGeneralInfo, setDoctorGeneralInfo] = useState([])
  const fetchListDoctorOfHospital = async () => {
    try {
      console.log(1111)
      const response = await axios.get(
        `${API_URL}/doctor/hospital/${hospitalId}`
      )

      console.log(response.data)

      return {
        ret: REQ_RETURN_STATUS.OK,
        data: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        ret: REQ_RETURN_STATUS.SERVER_ERROR,
        message: err.message
      }
    }
  }
  useEffect(() => {
    const getListDoctorOfHospital = async () => {
      const result = await fetchListDoctorOfHospital()
      if (result.ret === REQ_RETURN_STATUS.OK) {
        setDoctorGeneralInfo(result.data)
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Lỗi kết nối',
          textBody: result.message,
          autoClose: 1000
        })
      }
    }
    getListDoctorOfHospital()
  }, [])

  const [medicalSpecialty, setMedicalSpecialty] = useState([])
  const fetchListMedicalSpecialty = async () => {
    try {
      console.log(2222)
      const response = await axios.get(`${API_URL}/medspec`)

      console.log(response.data)

      return {
        ret: REQ_RETURN_STATUS.OK,
        data: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        ret: REQ_RETURN_STATUS.SERVER_ERROR,
        message: err.message
      }
    }
  }
  useEffect(() => {
    const getHospitalInfo = async () => {
      const result = await fetchListMedicalSpecialty()
      if (result.ret === REQ_RETURN_STATUS.OK) {
        setMedicalSpecialty(result.data)
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Lỗi kết nối',
          textBody: result.message,
          autoClose: 1000
        })
      }
    }
    getHospitalInfo()
  }, [])

  if (hospitalInfo && hospitalInfo.name) {
    hospitalInfo.name = hospitalInfo.name.replace('Hospital', '')
  }

  const listMedicalSpecialty = medicalSpecialty?.map((item) => {
    return {
      label: item.vietnameseName,
      value: item.medicalSpecialtyId
    }
  })

  const listDoctorGeneralInfo = doctorGeneralInfo?.map((doctor) => {
    var medicalSpecialtyName = ''
    if (medicalSpecialty) {
      medicalSpecialtyName = medicalSpecialty.find(
        (item) => item.medicalSpecialtyId === doctor.medicalSpecialtyId
      )?.vietnameseName
    }
    const genderItem = genders.find((g) => g.englishName === doctor.sex)
    const doctorGender = genderItem ? genderItem.label : 'Khác'
    return {
      ...doctor,
      medicalSpecialty: medicalSpecialtyName,
      hospitalName: hospitalInfo.name,
      gender: doctorGender
    }
  })

  const theme = useTheme()
  const themeColor = theme.colors.primary
  const { container, fabWrapper, flatListWrapper } = styles

  const renderListDoctors = ({ item }) => (
    <ListDoctorOfHospital
      navigation={navigation}
      item={item}
      nextScreen="DoctorInfoManagement"
      listMedicalSpecialty={listMedicalSpecialty}
      selectedDoctor={selectedDoctor}
      setSelectedDoctor={setSelectedDoctor}
    />
  )

  return (
    <View style={container}>
      <SearchBarComponent
        ref={refSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <View style={flatListWrapper}>
        <FlatList
          data={listDoctorGeneralInfo}
          renderItem={renderListDoctors}
          keyExtractor={(item) => item.doctorId}
          extraData={selectedDoctor}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<ItemSeparatorHeight height={16} />}
        />
      </View>
      <View style={fabWrapper}>
        <FAB
          icon="plus"
          label="Thêm bác sĩ mới"
          color={themeColor}
          style={{ backgroundColor: 'white' }}
          onPress={() => {
            navigation.navigate('DoctorInfoManagement', {
              item: { hospitalName: hospitalInfo.name },
              listMedicalSpecialty
            })
          }}
        />
      </View>
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
  fabWrapper: {
    flexGrow: 1,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
  flatListWrapper: {
    marginTop: 12
  }
})

export default HospitalManagementDoctor
