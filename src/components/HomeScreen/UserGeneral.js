import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import TitleBar from '../Basics/TitleBar'
import { Appbar, Avatar, Badge } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const UserGeneral = (props) => {
  const { usernameGreetingText } = props
  const { userGeneralWrapper, userGreetingWrapper, userFavoriteWrapper } =
    styles
  return (
    <TitleBar back={false}>
      <View style={userGreetingWrapper}>
        <Avatar.Text label={'U'} size={30} />
        <Text style={usernameGreetingText}>Hi, User</Text>
      </View>
      <Appbar.Action icon="heart" onPress={() => {}} />
      <Appbar.Action
        icon={() => <FontAwesome name="bell-o" size={24} color="black" />}
        onPress={() => {}}
      />
      <Badge style={{ position: 'absolute', right: 10, top: 15 }} size={10} />
    </TitleBar>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10
  },
  userFavoriteWrapper: {
    flex: 1,
    alignItems: 'flex-end'
  }
})

export default UserGeneral
