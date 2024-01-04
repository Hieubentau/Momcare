import React from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Appbar, Avatar } from 'react-native-paper'
import { useDayTime } from '../hooks'
import { useAuth } from '../contexts'
import { API_URL } from '../config'
import { getShortName } from '../ultilities'

export const UserGeneralBar = () => {
  const dayState = useDayTime()
  const { user, userDetails } = useAuth()
  const renderUserAvatar = () => {
    if (user?.img && user?.email) {
      return (
        <Avatar.Image
          source={{
            uri: `${API_URL}/user/get_img/?email=${user.email}`
          }}
          size={48}
          style={styles.avatar}
        />
      )
    } else {
      return (
        <Avatar.Text
          label={getShortName(userDetails.name)}
          size={48}
          style={styles.avatar}
        />
      )
    }
  }
  return (
    <Appbar.Header statusBarHeight={0}>
      {renderUserAvatar()}
      <Appbar.Content title={`Chào ${dayState.label}`} />
      <Appbar.Action icon="heart" onPress={() => {}} />
      <Appbar.Action
        icon={() => <FontAwesome name="bell-o" size={24} color="black" />}
        onPress={() => {}}
      />
      {/*<Badge style={{ position: 'absolute', right: 10, top: 15 }} size={10} />*/}
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 12,
    marginRight: 8
  }
})
