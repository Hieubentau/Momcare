/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef } from 'react'

import { FlatList, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Button } from 'react-native-paper'

import { useTheme } from 'react-native-paper'
import { doctorGeneralInfo } from '../../ultilities/doctorGeneralInfo'
import { ItemSeparatorHeight } from '../basics/ItemSeparatorHeight'
import ListCardsInfo from '../Doctors/ListCardsInfo'
import SearchBarComponent from '../HomeScreen/SearchBarComponent'

const HospitalManagementDoctor = ({ navigation }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const refSearchBar = useRef(null)

  const theme = useTheme()
  const themeColor = theme.colors.primary
  const { container, addNewDoctor, flatListWrapper } = styles

  const renderListDoctors = ({ item }) => (
    <ListCardsInfo
      navigation={navigation}
      item={item}
      nextScreen="DoctorInfoManagement"
      selectedDoctor={selectedDoctor}
      setSelectedDoctor={setSelectedDoctor}
    />
  )

  return (
    <View style={container}>
      <SearchBarComponent
        ref={refSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <View style={addNewDoctor}>
        <Button
          icon="account-plus"
          mode="elevated"
          onPress={() => {
            navigation.navigate('DoctorInfoManagement', { item: {} })
          }}
        >
          Thêm bác sĩ mới
        </Button>
      </View>
      <View style={flatListWrapper}>
        <FlatList
          data={doctorGeneralInfo}
          renderItem={renderListDoctors}
          keyExtractor={(item) => item.doctorId}
          extraData={selectedDoctor}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<ItemSeparatorHeight height={16} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: 'grey',
    marginTop: StatusBar.currentHeight || 0
  },
  addNewDoctor: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12
  },
  flatListWrapper: {
    marginTop: 12
  }
})

export default HospitalManagementDoctor
