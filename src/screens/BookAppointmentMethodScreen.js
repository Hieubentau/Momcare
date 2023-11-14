import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'
import TitleBar from '../components/Temp/TitleBar'
import ListItemWithoutIcon from '../components/Temp/ListItemWithoutIcon'
import { ItemSeparatorWidth } from '../components/Temp/ItemSeparatorWidth'

import { bookingHour } from '../ultilities/bookingHour'
import AbsoluteBottomButton from '../components/Temp/AbsoluteBottomButton'
import DropdownComponent from '../components/Temp/DropdownComponent'

const BookAppointmentMethodScreen = (props) => {
  const { navigation, route } = props
  const { passingData } = route.params
  const { container, selectDurationWrapper, selectTitle } = styles

  return (
    <View style={container}>
      <TitleBar
        navigation={navigation}
        previousScreen="DoctorInfo"
        titleName="Select Package"
      />
      <View style={selectDurationWrapper}>
        <Text style={selectTitle}>Selected Duration</Text>
        <DropdownComponent />
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
  selectDurationWrapper: {},
  selectTitle: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  selectTimeWrapper: {},
  selectTimeTitle: {
    marginTop: 16
  },
  flatListWrapper: {}
})

export default BookAppointmentMethodScreen
