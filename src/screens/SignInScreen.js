import React, { useState, useContext } from 'react'
import { TextInput, Button, SafeAreaView, StyleSheet, View } from 'react-native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import { AuthContext } from '../contexts/authContext'
import { ThemeColorContext } from '../contexts/themeColorContext'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)
  const themeColor = useContext(ThemeColorContext)
  const { container, leafLogoWrapper, center } = styles

  return (
    <SafeAreaView style={(container, center)}>
      <View style={[leafLogoWrapper, center]}>
        <Ionicons name="leaf-outline" size={36} color={themeColor} />
        <EvilIcons name="heart" size={72} color={themeColor} />
        <Ionicons
          name="leaf-outline"
          size={36}
          color={themeColor}
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={() => signIn({ username, password })} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  leafLogoWrapper: {
    flexDirection: 'row',
    marginVertical: 72
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SignInScreen
