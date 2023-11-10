import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import { filterDoctorsSpeciality } from '../../ultilities/filterDoctorsSpeciality'
import ListItemWithoutIcon from '../Temp/ListItemWithoutIcon'
import { ItemSeparator } from '../Temp/ItemSeparator'

const FilterDoctorsSpeciality = (props) => {
  const { selectedFilterSpeciality, setSelectedFilterSpeciality } = props
  const {
    filterDoctorsSpecialityWrapper,
    titleFilterSpeciality,
    flatListWrapper
  } = styles
  const renderFilterSpeciality = ({ item }) => (
    <ListItemWithoutIcon
      item={item}
      selectedIdwithoutIcon={selectedFilterSpeciality}
      setSelectedIdwithoutIcon={setSelectedFilterSpeciality}
    />
  )
  return (
    <View style={filterDoctorsSpecialityWrapper}>
      <Text style={titleFilterSpeciality}>Speciality</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  filterDoctorsSpecialityWrapper: {
    marginTop: 10
  },
  titleFilterSpeciality: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  flatListWrapper: {
    marginTop: 8
  }
})

export default FilterDoctorsSpeciality
