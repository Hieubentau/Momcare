import React, { useState } from 'react'
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { useTheme } from 'react-native-paper'
import CalendarComponent from '../components/Basics/CalendarComponent'
import ListItemWithoutIcon from '../components/Basics/ListItemWithoutIcon'
import { ItemSeparatorWidth } from '../components/Basics/ItemSeparatorWidth'

import { bookingHour } from '../ultilities/bookingHour'
import ConfirmedModal from '../components/Basics/ConfirmedModal'

const RescheduleAppointmentScreen = (props) => {
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedBookingHour, setSelectedBookingHour] = useState()
  const [
    isConfirmedRescheduleModalVisible,
    setIsConfirmedRescheduleModalVisible
  ] = useState(false)

  const { navigation, route } = props
  const { passingData } = route.params
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const {
    container,
    selectDateWrapper,
    selectTitle,
    selectTimeWrapper,
    selectTimeTitle,
    flatListWrapper,
    confirmButton,
    confirmText
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

      <ConfirmedModal
        navigation={navigation}
        isConfirmedModalVisible={isConfirmedRescheduleModalVisible}
        setIsConfirmedModalVisible={setIsConfirmedRescheduleModalVisible}
        iconMaterialCommunityIcons="calendar-check"
        confirmModalTitleText="Rescheduling Success!"
        confirmModalMessageText="Appointment successfully changed. You will receive a notification and the doctor you selected will contact you."
        goBackText="Go back"
      />

      <TouchableOpacity
        onPress={() => {
          if (selectedDay !== undefined) {
            passingData.date = selectedDay
          }

          if (selectedBookingHour !== undefined) {
            passingData.time = bookingHour[selectedBookingHour].message
          }

          setIsConfirmedRescheduleModalVisible(
            !isConfirmedRescheduleModalVisible
          )
        }}
        style={[confirmButton, { backgroundColor: themeColor }]}
      >
        <Text style={confirmText}>Confirm</Text>
      </TouchableOpacity>
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
  flatListWrapper: {},
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

export default RescheduleAppointmentScreen
