import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import SearchBarComponent from '../components/HomeScreen/SearchBarComponent'
import GeneralAndFilter from '../components/Doctors/GeneralAndFilter'
import { ItemSeparatorHeight } from '../components/Temp/ItemSeparatorHeight'
import ListCardsInfo from '../components/Doctors/ListCardsInfo'
import { doctorGeneralInfo } from '../ultilities/doctorGeneralInfo'
import TitleBar from '../components/Temp/TitleBar'

const Doctors = ({ navigation }) => {
  const [selectedFilterSpeciality, setSelectedFilterSpeciality] = useState('')
  const [applySelectedFilterSpeciality, setApplySelectedFilterSpeciality] =
    useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState('')

  const { container, searchBarWrapper, arrowLeftIcon, flatListWrapper } = styles

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
      <TitleBar
        navigation={navigation}
        previousScreen="Home"
        titleName="Doctors"
      />
      <SearchBarComponent />
      <GeneralAndFilter
        selectedFilterSpeciality={selectedFilterSpeciality}
        setSelectedFilterSpeciality={setSelectedFilterSpeciality}
        applySelectedFilterSpeciality={applySelectedFilterSpeciality}
        setApplySelectedFilterSpeciality={setApplySelectedFilterSpeciality}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
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
  searchBarWrapper: {
    flexDirection: 'row'
  },
  arrowLeftIcon: {
    marginRight: 8
  },
  flatListWrapper: {
    flex: 1,
    marginTop: 8
  }
})

export default Doctors
