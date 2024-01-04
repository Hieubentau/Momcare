import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'

import SearchBarComponent from '../components/HomeScreen/SearchBarComponent'
import GeneralAndFilter from '../components/Doctors/GeneralAndFilter'
import { ItemSeparatorHeight } from '../components/basics/ItemSeparatorHeight'
import ListCardsInfo from '../components/Doctors/ListCardsInfo'
import { doctorGeneralInfo } from '../ultilities/doctorGeneralInfo'
import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios'
import { DEV_URL_NGROK, useMedicalSpecialty } from '../hooks/useMisc'
import { ActivityIndicator } from 'react-native-paper'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import { useGlobalState } from '../contexts'

const SearchDoctor = ({ navigation, route }) => {
  const [selectedFilterSpeciality, setSelectedFilterSpeciality] = useState('')
  const [applySelectedFilterSpeciality, setApplySelectedFilterSpeciality] =
    useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const { container, flatListWrapper } = styles

  const { medicalSpecialties } = useGlobalState()

  // search
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredResult, setFilteredResult] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { status, data } = await axios.get(
          `${DEV_URL_NGROK}/doctor/name/`,
          {
            params: {
              name: searchQuery
            }
          }
        )

        setLoading(false)
        if (status === 200) {
          setFilteredResult(data)
        } else {
          setFilteredResult([])
        }
      } catch (err) {
        setLoading(false)
        setFilteredResult([])
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error',
          textBody: 'Cannot fetch data!',
          autoClose: 1000
        })
      }
    }

    const debounce = setTimeout(() => {
      if (searchQuery) {
        fetchData()
      } else {
        setFilteredResult([])
      }
    }, 500)

    return () => clearTimeout(debounce)
  }, [searchQuery])

  // create a ref to focus the search bar
  const { focusSearchBar } = route.params || {}
  const refSearchBar = useRef(null)
  useFocusEffect(() => {
    if (focusSearchBar && refSearchBar.current) {
      refSearchBar.current.focus()
    }
  })

  // map medical specialty to filter result
  const modFilterResult = (filterResult) => {
    return filterResult.map((item) => {
      const medicalSpecialty = medicalSpecialties.find(
        (ms) => ms.medicalSpecialtyId === item.medicalSpecialtyId
      ).vietnameseName

      return {
        ...item,
        medicalSpecialty
      }
    })
  }

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
      <SearchBarComponent
        ref={refSearchBar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <GeneralAndFilter
        count={filteredResult.length}
        selectedFilterSpeciality={selectedFilterSpeciality}
        setSelectedFilterSpeciality={setSelectedFilterSpeciality}
        applySelectedFilterSpeciality={applySelectedFilterSpeciality}
        setApplySelectedFilterSpeciality={setApplySelectedFilterSpeciality}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={flatListWrapper}>
          <FlatList
            data={modFilterResult(filteredResult)}
            renderItem={renderListDoctors}
            keyExtractor={(item) => item.doctorId}
            extraData={selectedDoctor}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={<ItemSeparatorHeight height={16} />}
          />
        </View>
      )}
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

export default SearchDoctor
