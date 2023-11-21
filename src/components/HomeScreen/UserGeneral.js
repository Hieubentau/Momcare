import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import MainTabScreenHeader from '../Basics/MainTabScreenHeader'
import { Appbar, Avatar, Badge } from 'react-native-paper'

const UserGeneral = (props) => {
  const { userGeneralWrapper, userGreetingWrapper, userFavoriteWrapper } =
    styles
  return (
    <MainTabScreenHeader>
      <View style={userGreetingWrapper}>
        <Avatar.Text label={'U'} size={30} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10
          }}
        >
          Hi, User
        </Text>
      </View>
      <Appbar.Action icon="heart" onPress={() => {}} />
      <Appbar.Action
        icon={() => <FontAwesome name="bell-o" size={24} color="black" />}
        onPress={() => {}}
      />
      <Badge style={{ position: 'absolute', right: 10, top: 15 }} size={10} />
    </MainTabScreenHeader>
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
    paddingTop: 0
  },
  userFavoriteWrapper: {
    flex: 1,
    alignItems: 'flex-end'
  }
})

export default UserGeneral
