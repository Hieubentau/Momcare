/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL, REQ_RETURN_STATUS } from '../config'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import { FontAwesome } from '@expo/vector-icons'

import AppointmentInfoText from '../components/UpcomingAppointmentScreen/AppointmentInfoText'
import { genders } from '../ultilities/genders'

const AppointmentInfoManagementScreen = ({ route }) => {
  const { item } = route.params
  const [patientInfo, setPatientInfo] = useState([])

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
    const getPatientInfo = async () => {
      const requestPatientInfoURL = `${API_URL}/patients/${item.patientId}/`
      const result = await fetchData(requestPatientInfoURL)
      if (result.ret === REQ_RETURN_STATUS.OK) {
        setPatientInfo(result.data)
      } else {
        showErrorDialog(result.message)
      }
    }
    getPatientInfo()
  }, [item.patientId])

  console.log(patientInfo)

  let patientGender = 'Khác'
  if (patientInfo && patientInfo.patient && patientInfo.patient.sex) {
    const genderItem = genders.find(
      (g) => g.englishName === patientInfo.patient.sex
    )
    patientGender = genderItem ? genderItem.label : 'Khác'
  }

  const { container, imageWrapper, appointmentInfoText, appointmentInfoTitle } =
    styles
  return (
    <View style={container}>
      <FontAwesome
        name="hospital-o"
        size={56}
        color="black"
        style={imageWrapper}
      />
      <View style={{ marginVertical: StatusBar.currentHeight || 0 }}>
        <Text style={appointmentInfoTitle}>Thông tin lịch đặt khám bệnh</Text>
        <AppointmentInfoText
          appointmentInfoText={appointmentInfoText}
          category="Ngày"
          content={item?.date}
        />
        <AppointmentInfoText
          appointmentInfoText={appointmentInfoText}
          category="Thời gian bắt đầu"
          content={item?.hour}
        />
      </View>
      <View style={{ marginVertical: StatusBar.currentHeight || 0 }}>
        <Text style={appointmentInfoTitle}>Thông tin bệnh nhân</Text>
        <AppointmentInfoText
          appointmentInfoText={appointmentInfoText}
          category="Họ và tên"
          content={patientInfo.patient?.name ?? 'Không rõ'}
        />
        <AppointmentInfoText
          appointmentInfoText={appointmentInfoText}
          category="Giới tính"
          content={patientGender}
        />
        <AppointmentInfoText
          appointmentInfoText={appointmentInfoText}
          category="Tuổi"
          content={patientInfo.patient?.age ?? 'Không rõ'}
        />
        <AppointmentInfoText
          appointmentInfoText={appointmentInfoText}
          category="Số điện thoại"
          content={patientInfo.patient?.phone ?? 'Không rõ'}
        />
        <AppointmentInfoText
          appointmentInfoText={appointmentInfoText}
          category="Địa chỉ"
          content={patientInfo.patient?.address ?? 'Không rõ'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16
  },
  imageWrapper: {
    flexDirection: 'row',
    padding: 12,
    alignSelf: 'center'
  },
  appointmentInfoTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  appointmentInfoText: {
    marginTop: 4
  }
})

export default AppointmentInfoManagementScreen
