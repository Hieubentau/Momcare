import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Divider } from 'react-native-paper'

import FilterDoctorsModal from './FilterModal/FilterDoctorsModal'
import FilterDoctorsSpeciality from './FilterModal/FilterDoctorsSpeciality'
import FilterChosen from './FilterModal/FilterChosen'

const GeneralAndFilter = (props) => {
  const {
    selectedFilterSpeciality,
    setSelectedFilterSpeciality,
    applySelectedFilterSpeciality,
    setApplySelectedFilterSpeciality,
    isModalVisible,
    setIsModalVisible
  } = props

  const { generalWrapper, foundDoctor, filterWrapper, filterTitle } = styles

  return (
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
        <Divider />
        <FilterDoctorsSpeciality
          selectedFilterSpeciality={selectedFilterSpeciality}
          setSelectedFilterSpeciality={setSelectedFilterSpeciality}
        />
        <Divider />
        <FilterChosen
          selectedFilterSpeciality={selectedFilterSpeciality}
          setApplySelectedFilterSpeciality={setApplySelectedFilterSpeciality}
          setIsModalVisible={setIsModalVisible}
        />
      </FilterDoctorsModal>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default GeneralAndFilter
