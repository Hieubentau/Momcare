import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'

const UserGeneral = () => {
  const {
    userGeneralWrapper,
    userGreetingWrapper,
    userFavoriteWrapper,
    usernameGreetingText
  } = styles
  return (
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
  )
}

const styles = StyleSheet.create({
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
  }
})

export default UserGeneral
