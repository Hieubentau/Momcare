import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import SearchBar from '../components/HomeScreen/SearchBar'
import FilterDoctorsModal from '../components/Doctors/FilterDoctorsModal'
import FilterDoctorsSpeciality from '../components/Doctors/FilterDoctorsSpeciality'

const Doctors = ({ navigation }) => {
  const [selectedFilterSpeciality, setSelectedFilterSpeciality] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    container,
    searchBarWrapper,
    arrowLeftIcon,
    generalWrapper,
    foundDoctor,
    filterWrapper,
    filterTitle
  } = styles

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
      <View style={generalWrapper}>
        <Text style={foundDoctor}>56 founds</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
          <View style={filterWrapper}>
            <Text style={filterTitle}>Filter</Text>
            <AntDesign name="filter" size={20} color="black" />
          </View>
        </TouchableOpacity>
        <FilterDoctorsModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        >
          <FilterDoctorsSpeciality
            selectedFilterSpeciality={selectedFilterSpeciality}
            setSelectedFilterSpeciality={setSelectedFilterSpeciality}
          />
        </FilterDoctorsModal>
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
  generalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8
  },
  foundDoctor: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  filterWrapper: {
    flexDirection: 'row'
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Doctors
