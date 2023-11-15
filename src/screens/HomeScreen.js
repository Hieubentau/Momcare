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
import SearchBar from '../components/HomeScreen/SearchBar'
import DoctorSpeciality from '../components/HomeScreen/DoctorSpeciality'
import TopDoctors from '../components/HomeScreen/DoctorSpecialityWithoutIcon'

import { AuthContext } from '../contexts/authContext'
import { ThemeColorContext } from '../contexts/themeColorContext'
import Toast from 'react-native-toast-message'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'

const HomeScreen = ({ navigation }) => {
  const { logout } = React.useContext(AuthContext)
  const themeColor = useContext(ThemeColorContext)

  const { container, center, textHeader } = styles
  return (
    <SafeAreaView style={container}>
      <UserGeneral usernameGreetingText={textHeader} />
      <SearchBar text="" flexNum={0} />
      <DoctorSpeciality
        doctorSpecialityText={textHeader}
        navigation={navigation}
      />
      <TopDoctors topDoctorsText={textHeader} />
      <View style={center}>
        <Text>Signed in!</Text>
        <Button
          title="Sign out"
          onPress={() => {
            logout().then((res) => {
              if (res) {
                Dialog.show({
                  type: ALERT_TYPE.SUCCESS,
                  title: 'Logout',
                  textBody: 'Logout successfully!',
                  autoClose: 1000
                })
              } else {
                Dialog.show({
                  type: ALERT_TYPE.WARNING,
                  title: 'Logout',
                  textBody: 'Some error occurred. Force logout!',
                  autoClose: 1000
                })
              }
            })
          }}
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
