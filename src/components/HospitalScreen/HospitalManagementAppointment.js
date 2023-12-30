/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef } from 'react'

import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native'
import { useTheme } from 'react-native-paper'
import SearchBarComponent from '../HomeScreen/SearchBarComponent'
import { appointmentDetail } from '../../ultilities/appoimentDetail'
import { ItemSeparatorHeight } from '../basics/ItemSeparatorHeight'
import ListAppointment from './ListAppointment'

const HospitalManagementSchedule = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const refSearchBar = useRef(null)

  const theme = useTheme()
  const themeColor = theme.colors.primary

  const [totalAppointments, setTotalAppointments] = useState(0)
  const [upcomingAppointments, setUpcomingAppointments] = useState(0)
  const [completedAppointments, setCompletedAppointments] = useState(0)
  const [cancelledAppointments, setCancelledAppointments] = useState(0)

  const [selectedCardAppointment, setSelectedCardAppointment] = useState('')

  const { container, statsContainer, statsText, flatListWrapper } = styles

  const renderListAppointment = ({ item }) => (
    <ListAppointment
      navigation={navigation}
      item={item}
      selectedCardAppointment={selectedCardAppointment}
      setSelectedCardAppointment={setSelectedCardAppointment}
      appointmentNextScreen="Appointment Detail"
    />
  )

  return (
    <View style={container}>
      <SearchBarComponent
        ref={refSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <View style={statsContainer}>
        <Text style={statsText}>Total Appointments: {totalAppointments}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[statsText, { color: themeColor }]}>
            Upcoming: {upcomingAppointments}
          </Text>
          <Text style={[statsText, { color: 'green' }]}>
            Completed: {completedAppointments}
          </Text>
          <Text style={[statsText, { color: 'red' }]}>
            Cancelled: {cancelledAppointments}
          </Text>
        </View>
      </View>
      <View style={flatListWrapper}>
        <FlatList
          data={appointmentDetail}
          renderItem={renderListAppointment}
          keyExtractor={(item) => item.id}
          extraData={selectedCardAppointment}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<ItemSeparatorHeight height={16} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'grey'
  },
  statsContainer: {
    paddingVertical: 16
  },
  statsText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  flatListWrapper: {
    flex: 1
  }
})

export default HospitalManagementSchedule
