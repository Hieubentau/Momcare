import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'
import CalendarComponent from '../components/Temp/CalendarComponent'
import TitleBar from '../components/Temp/TitleBar'
import ListItemWithoutIcon from '../components/Temp/ListItemWithoutIcon'
import { ItemSeparatorWidth } from '../components/Temp/ItemSeparatorWidth'
import { ItemSeparatorHeight } from '../components/Temp/ItemSeparatorHeight'

import { bookingHour } from '../ultilities/bookingHour'
import AbsoluteBottomButton from '../components/Temp/AbsoluteBottomButton'

const BookAppointmentScreen = (props) => {
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedBookingHour, setSelectedBookingHour] = useState()
  const { navigation, route } = props
  const { item } = route.params
  const {
    container,
    selectDateWrapper,
    selectTitle,
    selectTimeWrapper,
    selectTimeTitle,
    flatListWrapper
  } = styles

  const renderItemWithoutIcon = ({ item }) => (
    <ListItemWithoutIcon
      item={item}
      selectedIdwithoutIcon={selectedBookingHour}
      setSelectedIdwithoutIcon={setSelectedBookingHour}
    />
  )

  return (
    <View style={container}>
      <TitleBar
        navigation={navigation}
        previousScreen="DoctorInfo"
        titleName="Book Appointment"
      />
      <View style={selectDateWrapper}>
        <Text style={selectTitle}>Selected Date</Text>
        <CalendarComponent
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </View>
      <View style={selectTimeWrapper}>
        <Text style={[selectTitle, selectTimeTitle]}>Selected Time</Text>
        <View style={flatListWrapper}>
          <FlatList
            data={bookingHour}
            renderItem={renderItemWithoutIcon}
            keyExtractor={(item) => item.id}
            extraData={selectedBookingHour}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={<ItemSeparatorWidth width={8} />}
          />
        </View>
      </View>
      <AbsoluteBottomButton
        navigation={navigation}
        nextScreen="BookAppointmentMethod"
        passingData={{ item, selectedBookingHour, selectedDay }}
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
  selectDateWrapper: {},
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

export default BookAppointmentScreen
