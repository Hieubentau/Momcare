import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import TitleBar from '../components/Temp/TitleBar'
import Divider from '../components/Temp/Divider'

import { bookingHour } from '../ultilities/bookingHour'
import { packageBooking } from '../ultilities/packageBooking'
import { durationPrices } from '../ultilities/durationPrices'
import ReviewDetail from '../components/ReviewSummaryScreen/ReviewDetail'

const ReviewSummaryScreen = (props) => {
  const { navigation, route } = props
  const { passingData } = route.params
  const {
    container,
    cardWrapper,
    imageWrapper,
    doctorInfoWrapper,
    doctorName,
    doctorSpeciality
  } = styles

  const selectedDurationPrice = durationPrices.find(
    (item) => item.duration === passingData.selectedDuration
  )
  const multiplier = selectedDurationPrice
    ? selectedDurationPrice.multiplier
    : 1 // Default to 1 if no matching duration is found
  return (
    <SafeAreaView style={container}>
      <TitleBar
        navigation={navigation}
        previousScreen="Doctors"
        titleName="Review Summary"
      />
      <TouchableOpacity style={[cardWrapper, { height: 100 }]} disabled={true}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name="md-person-outline"
            size={48}
            color="black"
            style={imageWrapper}
          />
          <View style={doctorInfoWrapper}>
            <Text style={doctorName}>{passingData.name}</Text>
            <Divider height={8} />
            <Text style={doctorSpeciality}>{passingData.speciality}</Text>
            <Text style={doctorSpeciality}>{passingData.hospital}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[cardWrapper, { height: 120 }]} disabled={true}>
        <ReviewDetail
          title="Date & Hour"
          info={
            passingData.selectedDay +
            ' | ' +
            bookingHour[passingData.selectedBookingHour].message
          }
        />
        <ReviewDetail
          title="Package"
          info={packageBooking[passingData.selectedMethod - 1].method}
        />
        <ReviewDetail title="Duration" info={passingData.selectedDuration} />
      </TouchableOpacity>
      <TouchableOpacity style={[cardWrapper, { height: 120 }]} disabled={true}>
        <ReviewDetail
          title="Amount"
          info={'$' + packageBooking[passingData.selectedMethod - 1].price}
        />
        <ReviewDetail
          title={'Duration' + passingData.selectedDuration}
          info={
            multiplier +
            ' x $' +
            packageBooking[passingData.selectedMethod - 1].price
          }
        />
        <Divider />
        <ReviewDetail
          title="Total"
          info={
            '$' +
            multiplier * packageBooking[passingData.selectedMethod - 1].price
          }
        />
      </TouchableOpacity>
      <TouchableOpacity style={[cardWrapper, { height: 75 }]} disabled={true}>
        <ReviewDetail title="Card Number" info={passingData.cardNumber} />
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
  cardWrapper: {
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    padding: 12,
    marginTop: 16
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
  }
})

export default ReviewSummaryScreen
