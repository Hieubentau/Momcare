import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { ThemeColorContext } from '../../../contexts/themeColorContext'

const FilterChosen = (props) => {
  const {
    selectedFilterSpeciality,
    setApplySelectedFilterSpeciality,
    setIsModalVisible
  } = props
  const themeColor = useContext(ThemeColorContext)
  const { filterChosenWrapper, filterChosenButton, filterChosenTitle } = styles
  return (
    <View style={filterChosenWrapper}>
      <TouchableOpacity
        onPress={() => {
          setApplySelectedFilterSpeciality(selectedFilterSpeciality)
          setIsModalVisible(false)
        }}
        style={[filterChosenButton, { backgroundColor: themeColor }]}
      >
        <Text style={filterChosenTitle}>Apply</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  filterChosenWrapper: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filterChosenButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10
  },
  filterChosenTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default FilterChosen
