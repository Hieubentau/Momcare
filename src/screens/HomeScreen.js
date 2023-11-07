import React, { useContext } from 'react'
import { Text, Button, SafeAreaView, StyleSheet, View } from 'react-native'

import UserGeneral from '../components/HomeScreen/UserGeneral'
import SearchBar from '../components/HomeScreen/SearchBar'
import DoctorSpeciality from '../components/HomeScreen/DoctorSpeciality'

import { AuthContext } from '../contexts/authContext'
import { ThemeColorContext } from '../contexts/themeColorContext'

const HomeScreen = () => {
  const { signOut } = React.useContext(AuthContext)
  const themeColor = useContext(ThemeColorContext)

  const { container, center } = styles
  return (
    <SafeAreaView style={container}>
      <UserGeneral />
      <SearchBar />
      <DoctorSpeciality />
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
    paddingHorizontal: 16
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen
