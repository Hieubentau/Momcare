import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import CardInfo from '../components/Temp/CardInfo'

const DoctorInfoScreen = (props) => {
  const { navigation, route } = props
  const { item } = route.params
  const {
    container,
    titleBarWrapper,
    arrowLeftIcon,
    titleBarName,
    cardWrapper,
    doctorInfoWrapper,
    doctorInfoTitle,
    bookAppointmentButton,
    bookAppointmentText
  } = styles
  return (
    <SafeAreaView style={container}>
      <View style={titleBarWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack('Doctors')}
          style={arrowLeftIcon}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={titleBarName}>{item.name}</Text>
      </View>
      <TouchableOpacity style={cardWrapper} disabled={true}>
        <CardInfo item={item} />
      </TouchableOpacity>
      <View style={doctorInfoWrapper}>
        <Text style={doctorInfoTitle}>About me</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, doloremque, quas voluptatibus voluptas dolore
          voluptatem ipsam quae natus voluptatum. Quisquam voluptate, quod,
          doloremque, quas voluptatibus voluptas dolore voluptatem ipsam quae
          natus voluptatum.
        </Text>
        <Text style={doctorInfoTitle}>Working Time</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, doloremque, quas voluptatibus voluptas dolore
          voluptatem ipsam quae natus voluptatum. Quisquam voluptate, quod,
          doloremque, quas voluptatibus voluptas dolore voluptatem ipsam quae
          natus voluptatum.
        </Text>
      </View>
      <Text style={doctorInfoTitle}>Reviews</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptate, quod, doloremque, quas voluptatibus voluptas dolore
        voluptatem ipsam quae natus voluptatum. Quisquam voluptate, quod,
        doloremque, quas voluptatibus voluptas dolore voluptatem ipsam quae
        natus voluptatum.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookAppointment', { item })}
        style={bookAppointmentButton}
      >
        <Text style={bookAppointmentText}>Book Appointment</Text>
      </TouchableOpacity>
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
  titleBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  arrowLeftIcon: {
    marginRight: 16
  },
  titleBarName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  cardWrapper: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 100,
    justifyContent: 'center'
  },
  doctorInfoWrapper: {},
  doctorInfoTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  bookAppointmentButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookAppointmentText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default DoctorInfoScreen
