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

import SearchBar from '../components/HomeScreen/SearchBar'
import GeneralAndFilter from '../components/Doctors/GeneralAndFilter'
import { ItemSeparator } from '../components/Temp/ItemSeparatorWidth'
import ListItemWithoutIcon from '../components/Temp/ListItemWithoutIcon'
import { filterDoctorsSpeciality } from '../ultilities/filterDoctorsSpeciality'

const Doctors = ({ navigation }) => {
  const [selectedFilterSpeciality, setSelectedFilterSpeciality] = useState('')
  const [applySelectedFilterSpeciality, setApplySelectedFilterSpeciality] =
    useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { container, searchBarWrapper, arrowLeftIcon, flatListWrapper } = styles

  const renderFilterSpeciality = ({ item }) => (
    <ListItemWithoutIcon
      item={item}
      selectedIdwithoutIcon={selectedFilterSpeciality}
      setSelectedIdwithoutIcon={setSelectedFilterSpeciality}
    />
  )

  return (
    <SafeAreaView style={container}>
      <View style={searchBarWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack('Home')}
          style={arrowLeftIcon}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <SearchBar text="" flexNum={1} />
      </View>
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
          data={filterDoctorsSpeciality}
          renderItem={renderFilterSpeciality}
          keyExtractor={(item) => item.id}
          extraData={selectedFilterSpeciality}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<ItemSeparator width={8} />}
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
    marginTop: 8
  }
})

export default Doctors
