import React, { useContext } from 'react'
import {
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native'

import UserGeneral from '../components/HomeScreen/UserGeneral'
import SearchBarComponent from '../components/HomeScreen/SearchBarComponent'
import DoctorSpeciality from '../components/HomeScreen/DoctorSpeciality'
import TopDoctors from '../components/HomeScreen/DoctorSpecialityWithoutIcon'

import { AuthContext } from '../contexts/authContext'
import { useTheme } from 'react-native-paper'

const HomeScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext)
  const theme = useTheme()
  const themeColor = theme.colors.primary

  const { container, center, textHeader } = styles
  return (
    <SafeAreaView style={container}>
      <UserGeneral usernameGreetingText={textHeader} />
      <SearchBarComponent />
      <DoctorSpeciality
        doctorSpecialityText={textHeader}
        navigation={navigation}
      />
      <TopDoctors topDoctorsText={textHeader} />
      <View style={center}>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={signOut} />
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
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeader: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default HomeScreen
