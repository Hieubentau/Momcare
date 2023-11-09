import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Modal,
  Pressable
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import SearchBar from '../components/HomeScreen/SearchBar'
import ListItemWithoutIcon from '../components/Temp/ListItemWithoutIcon'
import FilterDoctors from '../components/Doctors/FilterDoctors'
import { doctorSpecialityType } from '../ultilities/doctorSpecialityType'
import { ItemSeparator } from '../components/Temp/ItemSeparator'

const Doctors = ({ navigation }) => {
  const [selectedIdwithoutIcon, setSelectedIdwithoutIcon] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const renderItemWithoutIcon = ({ item }) => (
    <ListItemWithoutIcon
      item={item}
      selectedIdwithoutIcon={selectedIdwithoutIcon}
      setSelectedIdwithoutIcon={setSelectedIdwithoutIcon}
    />
  )

  const {
    container,
    searchBarWrapper,
    arrowLeftIcon,
    flatListWrapper,
    generalWrapper,
    foundDoctor,
    filterWrapper
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
      <View style={flatListWrapper}>
        <FlatList
          data={doctorSpecialityType}
          renderItem={renderItemWithoutIcon}
          keyExtractor={(item) => item.id}
          extraData={selectedIdwithoutIcon}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<ItemSeparator width={8} />}
        />
      </View>
      <View style={generalWrapper}>
        <Text style={foundDoctor}>56 founds</Text>
        <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
          <View style={filterWrapper}>
            <Text>Filter</Text>
            <AntDesign name="filter" size={20} color="black" />
          </View>
        </TouchableOpacity>
        <FilterDoctors
          isModalVisible={isModalVisible}
          children={<Text>Filter</Text>}
          setIsModalVisible={setIsModalVisible}
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
    marginVertical: 2
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
  }
})

export default Doctors
