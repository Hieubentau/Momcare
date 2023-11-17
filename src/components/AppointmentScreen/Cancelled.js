import React, { useState } from 'react'
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native'
import ListCancelled from './CancelledTab/ListCancelled'

import { appointmentDetail } from '../../ultilities/appoimentDetail'
import { ItemSeparatorHeight } from '../Temp/ItemSeparatorHeight'

const Cancelled = ({ navigation }) => {
  const { container, flatListWrapper } = styles

  const renderListCancelled = ({ item }) => (
    <ListCancelled navigation={navigation} item={item} />
  )

  return (
    <SafeAreaView style={container}>
      <View style={flatListWrapper}>
        <FlatList
          data={appointmentDetail}
          renderItem={renderListCancelled}
          keyExtractor={(item) => item.id}
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
    flex: 1
  }
})

export default Cancelled
