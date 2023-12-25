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
import Toast from 'react-native-toast-message'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import CustomSafeAreaView from '../components/basics/CustomSafeAreaView'

const HomeScreen = ({ navigation }) => {
  const { logout } = React.useContext(AuthContext)
  const theme = useTheme()
  const themeColor = theme.colors.primary

  const { container, center, textHeader } = styles

  return (
    <CustomSafeAreaView style={container}>
      <UserGeneral />
      <SearchBarComponent
        onPress={() =>
          navigation.navigate('SearchDoctor', { focusSearchBar: true })
        }
      />
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
    </CustomSafeAreaView>
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
