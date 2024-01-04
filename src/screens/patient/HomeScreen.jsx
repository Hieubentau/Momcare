import React, { useContext } from 'react'
import { Text } from 'react-native'
import SearchBarComponent from '../../components/HomeScreen/SearchBarComponent'
import {
  DocSpecRoundList,
  ScreenWrapper,
  UserGeneralBar
} from '../../components'
import DoctorSpeciality from '../../components/HomeScreen/DoctorSpeciality'

export const HomeScreen = ({ navigation }) => {
  return (
    <ScreenWrapper withScroll={true}>
      <UserGeneralBar />
      <Text>Trang chủ</Text>
      <SearchBarComponent
        onPress={() =>
          navigation.navigate('SearchDoctor', { focusSearchBar: true })
        }
      />
      <DocSpecRoundList />
      <DoctorSpeciality />
      <DoctorSpeciality />
      <DoctorSpeciality />
      <DoctorSpeciality />
      <DoctorSpeciality />
      <DoctorSpeciality />
      <DoctorSpeciality />
      <DoctorSpeciality />
    </ScreenWrapper>
  )
}
