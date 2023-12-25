import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'
import { useTheme } from 'react-native-paper'

import { ItemSeparatorHeight } from '../basics/ItemSeparatorHeight'
import ListNotCancelled from './ListNotCancelled'
import { appointmentDetail } from '../../ultilities/appoimentDetail'

const Upcoming = ({ navigation }) => {
  const [selectedCardAppointment, setSelectedCardAppointment] = useState('')

  const theme = useTheme()
  const themeColor = theme.colors.primary
  const { container, flatListWrapper } = styles

  const renderListUpcoming = ({ item }) => (
    <ListNotCancelled
      navigation={navigation}
      item={item}
      selectedCardAppointment={selectedCardAppointment}
      setSelectedCardAppointment={setSelectedCardAppointment}
      statusAppointmentText="Upcoming"
      statusAppointmentColor={themeColor}
      appointmentNextScreen="UpcomingAppointment"
    />
  )

  return (
    <SafeAreaView style={container}>
      <View style={flatListWrapper}>
        <FlatList
          data={appointmentDetail}
          renderItem={renderListUpcoming}
          keyExtractor={(item) => item.id}
          extraData={selectedCardAppointment}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<ItemSeparatorHeight height={16} />}
        />
      </View>
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
  flatListWrapper: {
    flex: 1,
    marginTop: 8
  }
})

export default Upcoming
