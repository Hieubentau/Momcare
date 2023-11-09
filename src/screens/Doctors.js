import React from 'react'
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
import DoctorSpecialityWithoutIcon from '../components/HomeScreen/DoctorSpecialityWithoutIcon'

const Doctors = ({ navigation }) => {
  const {
    container,
    searchBarWrapper,
    arrowLeftIcon,
    filterWrapper,
    foundDoctor
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
      <View style={filterWrapper}>
        <Text style={foundDoctor}>56 founds</Text>
        <TouchableOpacity>
          <View>
            <Text>Filter</Text>
            <AntDesign name="filter" size={24} color="black" />
          </View>
        </TouchableOpacity>
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
  filterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  foundDoctor: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default Doctors
