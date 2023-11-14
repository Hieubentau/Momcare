import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'
import TitleBar from '../components/Temp/TitleBar'

import AbsoluteBottomButton from '../components/Temp/AbsoluteBottomButton'
import DropdownComponent from '../components/Temp/DropdownComponent'
import ListAppointmentMethods from '../components/BookAppointmentMethodScreen/ListAppointmentMethods'

import { ItemSeparatorHeight } from '../components/Temp/ItemSeparatorHeight'
import { doctorGeneralInfo } from '../ultilities/doctorGeneralInfo'

const dataDuration = [
  { label: '20 minutes', value: '1' },
  { label: '30 minutes', value: '2' },
  { label: '45 minutes', value: '3' },
  { label: '1 hour', value: '4' },
  { label: '2 hour', value: '5' }
]

const BookAppointmentMethodScreen = (props) => {
  const { navigation, route } = props
  const { passingData } = route.params
  const [selectedDuration, setSelectedDuration] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('')
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
      <TitleBar
        navigation={navigation}
        previousScreen="BookAppointment"
        titleName="Select Package"
      />
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
            data={doctorGeneralInfo}
            renderItem={renderListMethods}
            keyExtractor={(item) => item.id}
            extraData={selectedMethod}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={<ItemSeparatorHeight height={16} />}
          />
        </View>
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
  selectPackageWrapper: {},
  selectPackageTitle: {
    marginTop: 16
  },
  flatListWrapper: {
    marginTop: 8
  }
})

export default BookAppointmentMethodScreen
