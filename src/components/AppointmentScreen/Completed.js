import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'

import { ItemSeparatorHeight } from '../Basics/ItemSeparatorHeight'
import ListNotCancelled from './ListNotCancelled'
import { appointmentDetail } from '../../ultilities/appoimentDetail'

const Completed = ({ navigation }) => {
  const [selectedCardAppointment, setSelectedCardAppointment] = useState('')

  const { container, flatListWrapper } = styles

  const renderListCompleted = ({ item }) => (
    <ListNotCancelled
      navigation={navigation}
      item={item}
      selectedCardAppointment={selectedCardAppointment}
      setSelectedCardAppointment={setSelectedCardAppointment}
      statusAppointmentText="Completed"
      statusAppointmentColor="green"
      appointmentNextScreen="CompletedAppointment"
    />
  )

  return (
    <SafeAreaView style={container}>
      <View style={flatListWrapper}>
        <FlatList
          data={appointmentDetail}
          renderItem={renderListCompleted}
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

export default Completed
