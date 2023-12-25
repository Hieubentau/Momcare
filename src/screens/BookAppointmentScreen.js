import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'
import CalendarComponent from '../components/basics/CalendarComponent'
import TitleBar from '../components/basics/TitleBar'
import ListItemWithoutIcon from '../components/basics/ListItemWithoutIcon'
import { ItemSeparatorWidth } from '../components/basics/ItemSeparatorWidth'

import { bookingHour } from '../ultilities/bookingHour'
import AbsoluteBottomButton from '../components/basics/AbsoluteBottomButton'

const BookAppointmentScreen = (props) => {
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedBookingHour, setSelectedBookingHour] = useState()
  const { navigation, route } = props
  const { passingData } = route.params
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
        passingData={{ ...passingData, selectedBookingHour, selectedDay }}
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
