import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { Divider, Portal, Snackbar, useTheme } from 'react-native-paper'

import { Ionicons } from '@expo/vector-icons'

import ReviewDetail from '../components/ReviewSummaryScreen/ReviewDetail'
import TitleBar from '../components/basics/TitleBar'

import { bookingHour } from '../ultilities/bookingHour'
import { packageBooking } from '../ultilities/packageBooking'
import { durationPrices } from '../ultilities/durationPrices'
import ConfirmedModal from '../components/basics/ConfirmedModal'

const ReviewSummaryScreen = (props) => {
  const { navigation, route } = props
  const { passingData } = route.params

  const [visible, setVisible] = useState(false)
  const onToggleSnackBar = () => setVisible(!visible)
  const onDismissSnackBar = () => setVisible(false)

  const [isConfirmedBookModalVisible, setIsConfirmedBookModalVisible] =
    useState(false)

  const {
    container,
    cardWrapper,
    imageWrapper,
    doctorInfoWrapper,
    doctorName,
    doctorSpeciality,
    confirmButton,
    confirmText
  } = styles

  const theme = useTheme()
  const themeColor = theme.colors.primary

  const selectedDurationPrice = durationPrices.find(
    (item) => item.duration === passingData.selectedDuration
  )
  const multiplier = selectedDurationPrice
    ? selectedDurationPrice.multiplier
    : 1 // Default to 1 if no matching duration is found
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
            <Text style={doctorName}>{passingData.name}</Text>
            <Divider />
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
          title={'Duration (' + passingData.selectedDuration + ')'}
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

      {/* <Portal>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Back to Home',
            onPress: () => {
              navigation.navigate('Tabs')
            }
          }}
        >
          Confirm successfully!
        </Snackbar>
      </Portal> */}
      <ConfirmedModal
        navigation={navigation}
        isConfirmedModalVisible={isConfirmedBookModalVisible}
        setIsConfirmedModalVisible={setIsConfirmedBookModalVisible}
        iconMaterialCommunityIcons="check-circle"
        confirmModalTitleText="Payment Successful!"
        confirmModalMessageText={`You have successfully booked appointment with ${passingData.name}.`}
        goBackText="Go back Home"
        goBackScreen="Tabs"
      />

      <TouchableOpacity
        onPress={() => {
          setIsConfirmedBookModalVisible(!isConfirmedBookModalVisible)
        }}
        style={[confirmButton, { backgroundColor: themeColor }]}
      >
        <Text style={confirmText}>Confirm</Text>
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
  },
  confirmButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  confirmText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ReviewSummaryScreen
