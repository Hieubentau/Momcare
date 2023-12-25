import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'
import TitleBar from '../components/basics/TitleBar'

import AbsoluteBottomButton from '../components/basics/AbsoluteBottomButton'
import DropdownComponent from '../components/BookAppointmentMethodScreen/DropdownComponent'
import ListAppointmentMethods from '../components/BookAppointmentMethodScreen/ListAppointmentMethods'

import { ItemSeparatorHeight } from '../components/basics/ItemSeparatorHeight'
import { packageBooking } from '../ultilities/packageBooking'

const dataDuration = [
  { label: '20 minutes', value: '1' },
  { label: '30 minutes', value: '2' },
  { label: '45 minutes', value: '3' },
  { label: '1 hour', value: '4' },
  { label: '2 hours', value: '5' }
]

const BookAppointmentMethodScreen = (props) => {
  const { navigation, route } = props
  const { passingData } = route.params
  const [selectedDuration, setSelectedDuration] = useState('')
  const [selectedMethod, setSelectedMethod] = useState(1)
  const {
    container,
    selectDurationWrapper,
    selectTitle,
    selectPackageWrapper,
    selectPackageTitle,
    flatListWrapper
  } = styles

  const renderListMethods = ({ item }) => (
    <ListAppointmentMethods
      navigation={navigation}
      item={item}
      selectedMethod={selectedMethod}
      setSelectedMethod={setSelectedMethod}
    />
  )

  return (
    <View style={container}>
      <View style={selectDurationWrapper}>
        <Text style={selectTitle}>Selected Duration</Text>
        <DropdownComponent
          dataDuration={dataDuration}
          selectedDuration={selectedDuration}
          setSelectedDuration={setSelectedDuration}
        />
      </View>
      <View style={selectPackageWrapper}>
        <Text style={[selectTitle, selectPackageTitle]}>Selected Package</Text>
        <View style={flatListWrapper}>
          <FlatList
            data={packageBooking}
            renderItem={renderListMethods}
            keyExtractor={(item) => item.id}
            extraData={selectedMethod}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={<ItemSeparatorHeight height={16} />}
          />
        </View>
      </View>
      <AbsoluteBottomButton
        navigation={navigation}
        nextScreen="PatientDetails"
        passingData={{ ...passingData, selectedDuration, selectedMethod }}
        buttonName="Next"
      />
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
  selectPackageWrapper: {},
  selectPackageTitle: {
    marginTop: 16
  },
  flatListWrapper: {
    marginTop: 8
  }
})

export default BookAppointmentMethodScreen
