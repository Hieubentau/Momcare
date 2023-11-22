import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { Divider, useTheme } from 'react-native-paper'

import { Ionicons } from '@expo/vector-icons'

import AppointmentInfoText from '../components/UpcomingAppointmentScreen/AppointmentInfoText'
import CardMethod from '../components/Basics/CardMethod'
import AbsoluteBottomButton from '../components/Basics/AbsoluteBottomButton'
import CancelModal from '../components/UpcomingAppointmentScreen/CancelModal'
import CancelModalButton from '../components/UpcomingAppointmentScreen/CancelModalButton'
import ConfirmedModal from '../components/Basics/ConfirmedModal'

const UpcomingAppointmentScreen = (props) => {
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false)
  const [isConfirmedCancelModalVisible, setIsConfirmedCancelModalVisible] =
    useState(false)

  const { navigation, route } = props
  const { item } = route.params

  const {
    container,
    cardWrapper,
    imageWrapper,
    doctorInfoWrapper,
    doctorName,
    doctorSpeciality,
    optionAppointmentWrapper,
    optionAppointmentButton,
    optionAppointmentText,
    appointmentInfoTitle,
    appointmentInfoText,
    cardPackageMethod
  } = styles

  const theme = useTheme()
  const themeColor = theme.colors.primary

  return (
    <SafeAreaView style={container}>
      <TouchableOpacity style={[cardWrapper, { height: 100 }]} disabled={true}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name="md-person-outline"
            size={48}
            color="black"
            style={imageWrapper}
          />
          <View style={doctorInfoWrapper}>
            <Text style={doctorName}>{item.name}</Text>
            <Divider />
            <Text style={doctorSpeciality}>{item.speciality}</Text>
            <Text style={doctorSpeciality}>{item.hospital}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={optionAppointmentWrapper}>
        <TouchableOpacity
          onPress={() => setIsCancelModalVisible(!isCancelModalVisible)}
          style={[
            optionAppointmentButton,
            { backgroundColor: 'white', borderColor: themeColor }
          ]}
        >
          <Text style={[optionAppointmentText, { color: themeColor }]}>
            Cancel Appointment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('RescheduleAppointment', { passingData: item })
          }
          style={[
            optionAppointmentButton,
            { backgroundColor: themeColor, borderColor: themeColor }
          ]}
        >
          <Text style={[optionAppointmentText, { color: 'white' }]}>
            Reschedule Appointment
          </Text>
        </TouchableOpacity>
      </View>

      <CancelModal
        isCancelModalVisible={isCancelModalVisible}
        setIsCancelModalVisible={setIsCancelModalVisible}
      >
        <CancelModalButton
          isCancelModalVisible={isCancelModalVisible}
          setIsCancelModalVisible={setIsCancelModalVisible}
          isConfirmedCancelModalVisible={isConfirmedCancelModalVisible}
          setIsConfirmedCancelModalVisible={setIsConfirmedCancelModalVisible}
        />
      </CancelModal>
      <ConfirmedModal
        navigation={navigation}
        isConfirmedModalVisible={isConfirmedCancelModalVisible}
        setIsConfirmedModalVisible={setIsConfirmedCancelModalVisible}
        iconMaterialCommunityIcons="folder-check-outline"
        confirmModalTitleText="Cancel Appointment Success!"
        confirmModalMessageText="We are very sad that you have canceled your appointment. We will always improve our service to satisfy you in the next appointment."
        goBackText="Go back"
        goBackScreen="Tabs"
      />

      <Text style={appointmentInfoTitle}>Scheduled Appointment</Text>
      <Text style={appointmentInfoText}>{item.date}</Text>
      <Text>
        {item.time} ({item.duration})
      </Text>
      <Text style={appointmentInfoTitle}>Patient Information</Text>
      <AppointmentInfoText
        appointmentInfoText={appointmentInfoText}
        category="Full Name"
        content={item.patientFullName}
      />
      <AppointmentInfoText
        appointmentInfoText={appointmentInfoText}
        category="Gender"
        content={item.patientGender}
      />
      <AppointmentInfoText
        appointmentInfoText={appointmentInfoText}
        category="Age"
        content={item.patientAge}
      />
      <AppointmentInfoText
        appointmentInfoText={appointmentInfoText}
        category="Problem"
        content={item.patientProblem}
      />
      <Text style={appointmentInfoTitle}>Your Package</Text>
      <TouchableOpacity disabled={true} style={cardPackageMethod}>
        <CardMethod item={item} />
      </TouchableOpacity>
      <AbsoluteBottomButton
        navigation={navigation}
        nextScreen=""
        passingData={item}
        buttonName={item.method}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0
  },
  cardWrapper: {
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 12,
    marginTop: 0
  },
  imageWrapper: {
    flex: 0.25
  },
  doctorInfoWrapper: {
    flex: 1
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2
  },
  doctorSpeciality: {
    marginTop: 4
  },
  optionAppointmentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  optionAppointmentButton: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 8
  },
  optionAppointmentText: {
    fontSize: 14
  },
  appointmentInfoTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  appointmentInfoText: {
    marginTop: 4
  },
  cardPackageMethod: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 100,
    justifyContent: 'center',
    marginTop: 6
  }
})

export default UpcomingAppointmentScreen
