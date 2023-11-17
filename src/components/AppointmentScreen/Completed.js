import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { ItemSeparatorHeight } from '../Temp/ItemSeparatorHeight'
import ListCardsInfo from '../Doctors/ListCardsInfo'
import { doctorGeneralInfo } from '../../ultilities/doctorGeneralInfo'

const Completed = ({ navigation }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('')

  const { container, flatListWrapper } = styles

  const renderListDoctors = ({ item }) => (
    <ListCardsInfo
      navigation={navigation}
      item={item}
      selectedDoctor={selectedDoctor}
      setSelectedDoctor={setSelectedDoctor}
    />
  )

  return (
    <SafeAreaView style={container}>
      <View style={flatListWrapper}>
        <FlatList
          data={doctorGeneralInfo}
          renderItem={renderListDoctors}
          keyExtractor={(item) => item.id}
          extraData={selectedDoctor}
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
