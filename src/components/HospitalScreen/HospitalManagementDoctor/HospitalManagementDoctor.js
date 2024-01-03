/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { API_URL, REQ_RETURN_STATUS } from '../../../config'

import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Button, FAB } from 'react-native-paper'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import eventEmitter from '../../basics/EventEmitter'
import { eventEmitterInfo } from '../../../ultilities/eventEmitterInfo'

import { useTheme } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native'
import { ItemSeparatorHeight } from '../../basics/ItemSeparatorHeight'
import ListDoctorOfHospital from './ListDoctorOfHospital'
import SearchBarComponent from '../../HomeScreen/SearchBarComponent'

import { genders } from '../../../ultilities/genders'

const HospitalManagementDoctor = ({ navigation, route }) => {
  const [dataChanged, setDataChanged] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState('')

  const userId = 200
  const hospitalId = 1
  const [hospitalInfo, setHospitalInfo] = useState([])
  const [doctorGeneralInfo, setDoctorGeneralInfo] = useState([])
  const [medicalSpecialty, setMedicalSpecialty] = useState([])

  // search
  const refSearchBar = useRef(null)
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // create a ref to focus the search bar
  const { focusSearchBar } = route.params || {}
  useFocusEffect(() => {
    if (focusSearchBar && refSearchBar.current) {
      refSearchBar.current.focus()
    }
  })

  const fetchData = async (requestURL) => {
    try {
      console.log(1000)
      const response = await axios.get(requestURL)
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
  const showErrorDialog = (message) => {
    Dialog.show({
      type: ALERT_TYPE.DANGER,
      title: 'Lỗi kết nối',
      textBody: message,
      autoClose: 1000
    })
  }

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        setLoading(true)
        const { status, data } = await axios.get(`${API_URL}/doctor/name/`, {
          params: {
            name: searchQuery
          }
        })

        setLoading(false)
        if (status === 200) {
          setDoctorGeneralInfo(data)
        } else {
          setDoctorGeneralInfo([])
        }
      } catch (err) {
        setLoading(false)
        setDoctorGeneralInfo([])
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error',
          textBody: 'Cannot fetch data!',
          autoClose: 1000
        })
      }
    }
    if (searchQuery) {
      const debounce = setTimeout(() => {
        fetchFilterData()
      }, 500)

      return () => clearTimeout(debounce)
    }

    const updateInfoListener = async () => {
      setDataChanged(!dataChanged)
    }

    eventEmitter.on(eventEmitterInfo.doctorInfoUpdated, updateInfoListener)
    eventEmitter.on(eventEmitterInfo.doctorInfoAdded, updateInfoListener)

    const getHospitalInfo = async () => {
      const requestHospitalInfoURL = `${API_URL}/hospital/${userId}`
      const result = await fetchData(requestHospitalInfoURL)
      if (result.ret === REQ_RETURN_STATUS.OK) {
        setHospitalInfo(result.data)
      } else {
        showErrorDialog(result.message)
      }
    }
    getHospitalInfo()

    const getListDoctorOfHospital = async () => {
      const requestListDoctorOfHospitalURL = `${API_URL}/doctor/hospital/${hospitalId}`
      const result = await fetchData(requestListDoctorOfHospitalURL)
      if (result.ret === REQ_RETURN_STATUS.OK) {
        setDoctorGeneralInfo(result.data)
      } else {
        showErrorDialog(result.message)
      }
    }
    getListDoctorOfHospital()

    const getListMedicalSpecialty = async () => {
      const requestListMedicalSpecialtyURL = `${API_URL}/medspec`
      const result = await fetchData(requestListMedicalSpecialtyURL)
      if (result.ret === REQ_RETURN_STATUS.OK) {
        setMedicalSpecialty(result.data)
      } else {
        showErrorDialog(result.message)
      }
    }
    getListMedicalSpecialty()

    return () => {
      eventEmitter.off(eventEmitterInfo.doctorInfoUpdated, updateInfoListener)
      eventEmitter.off(eventEmitterInfo.doctorInfoAdded, updateInfoListener)
    }
  }, [searchQuery, dataChanged, setDataChanged])

  if (hospitalInfo && hospitalInfo.hospital && hospitalInfo.hospital.name) {
    hospitalInfo.hospital.name = hospitalInfo.hospital.name.replace(
      ' Hospital',
      ''
    )
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
      hospitalName: hospitalInfo.hospital.name,
      gender: doctorGender,
      mode: 'update'
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
              item: {
                hospitalId: hospitalInfo.hospital.hospitalId,
                hospitalName: hospitalInfo.hospital.name,
                mode: 'add'
              },
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
