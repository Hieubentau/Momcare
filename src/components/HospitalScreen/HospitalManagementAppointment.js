/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { API_URL, REQ_RETURN_STATUS } from '../../config'
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'

import SearchBarComponent from '../HomeScreen/SearchBarComponent'
import { appointmentDetail } from '../../ultilities/appoimentDetail'
import { ItemSeparatorHeight } from '../basics/ItemSeparatorHeight'
import ListAppointment from './ListAppointment'

const HospitalManagementAppointment = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const refSearchBar = useRef(null)

  const [totalAppointments, setTotalAppointments] = useState(0)
  const [selectedCardAppointment, setSelectedCardAppointment] = useState('')
  const [listAppointment, setListAppointment] = useState([])

  const userId = 200
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
    const getListAppointment = async () => {
      const requestListAppointmentURL = `${API_URL}/users/${userId}/appointments/`
      const result = await fetchData(requestListAppointmentURL)
      if (result.ret === REQ_RETURN_STATUS.OK) {
        const updatedListAppointment = result.data.map((appointment) => {
          const appointmentDate = new Date(appointment.time)
          return {
            ...appointment,
            hour: appointmentDate
              ?.toISOString()
              .split('T')[1]
              .replace('.000Z', ''),
            date: appointmentDate?.toISOString().split('T')[0]
          }
        })
        setListAppointment(updatedListAppointment)
      } else {
        showErrorDialog(result.message)
      }
    }
    getListAppointment()
    setTotalAppointments(listAppointment?.length)
  }, [listAppointment?.length])

  const { container, statsContainer, statsText, flatListWrapper } = styles

  const renderListAppointment = ({ item }) => (
    <ListAppointment
      navigation={navigation}
      item={item}
      selectedCardAppointment={selectedCardAppointment}
      setSelectedCardAppointment={setSelectedCardAppointment}
      appointmentNextScreen="Chi tiết lịch đặt khám"
    />
  )

  return (
    <View style={container}>
      <SearchBarComponent
        ref={refSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <View style={statsContainer}>
        <Text style={statsText}>Tổng số lịch đặt: {totalAppointments}</Text>
      </View>
      <View style={flatListWrapper}>
        <FlatList
          data={listAppointment}
          renderItem={renderListAppointment}
          keyExtractor={(item) => item.hospitalAppointmentId}
          extraData={selectedCardAppointment}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<ItemSeparatorHeight height={16} />}
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
  statsContainer: {
    paddingVertical: 16
  },
  statsText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  flatListWrapper: {
    flex: 1
  }
})

export default HospitalManagementAppointment
