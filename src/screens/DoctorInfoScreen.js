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

import CardInfo from '../components/Basics/CardInfo'
import TitleBar from '../components/Basics/TitleBar'
import AbsoluteBottomButton from '../components/Basics/AbsoluteBottomButton'

const DoctorInfoScreen = (props) => {
  const { navigation, route } = props
  const { item } = route.params
  const { container, cardWrapper, doctorInfoWrapper, doctorInfoTitle } = styles
  return (
    <SafeAreaView style={container}>
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
      <AbsoluteBottomButton
        navigation={navigation}
        nextScreen="BookAppointment"
        passingData={item}
        buttonName="Book Appointment"
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
    height: 100,
    justifyContent: 'center'
  },
  doctorInfoWrapper: {},
  doctorInfoTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default DoctorInfoScreen
