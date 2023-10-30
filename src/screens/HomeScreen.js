import React from 'react'
import { Text, Button, SafeAreaView, StyleSheet } from 'react-native'

import { AuthContext } from '../contexts/authContext'

const HomeScreen = () => {
  const { signOut } = React.useContext(AuthContext)
  return (
    <SafeAreaView style={styles.container}>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen
