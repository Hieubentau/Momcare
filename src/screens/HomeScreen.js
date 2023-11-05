import React, { useContext } from 'react'
import { Text, Button, SafeAreaView, StyleSheet, View } from 'react-native'
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import SearchBar from '../components/SearchBar'

import { AuthContext } from '../contexts/authContext'
import { ThemeColorContext } from '../contexts/themeColorContext'

const HomeScreen = () => {
  const { signOut } = React.useContext(AuthContext)
  const themeColor = useContext(ThemeColorContext)

  const {
    container,
    center,
    userGeneralWrapper,
    userGreetingWrapper,
    userFavoriteWrapper,
    usernameGreetingText
  } = styles
  return (
    <SafeAreaView style={container}>
      <View style={userGeneralWrapper}>
        <View style={userGreetingWrapper}>
          <EvilIcons name="user" size={48} color="black" />
          <View>
            <Text>Hi,</Text>
            <Text style={usernameGreetingText}>John Doe</Text>
          </View>
        </View>
        <View style={userFavoriteWrapper}>
          <MaterialCommunityIcons
            name="heart-multiple-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
      <SearchBar />
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
    padding: 8
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  userGeneralWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  userGreetingWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userFavoriteWrapper: {
    flex: 1,
    alignItems: 'flex-end'
  },
  usernameGreetingText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  searchbar: {
    marginBottom: 16
  }
})

export default HomeScreen
