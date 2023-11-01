import React, { useState, useContext } from 'react'
import {
  Text,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'
import {
  Ionicons,
  EvilIcons,
  MaterialIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { AuthContext } from '../contexts/authContext'
import { ThemeColorContext } from '../contexts/themeColorContext'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { signIn } = useContext(AuthContext)
  const themeColor = useContext(ThemeColorContext)

  const {
    container,
    leafLogoWrapper,
    headerText,
    center,
    logoTextIcon,
    inputWrapper,
    inputTextWrapper,
    usernameTextInput,
    passwordTextInput,
    showPasswordButton,
    signInButton
  } = styles
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

      <Text style={headerText}>Login to Your Account</Text>

      <View style={inputWrapper}>
        <View style={[inputTextWrapper]}>
          <MaterialIcons
            name="email"
            size={16}
            color="black"
            style={logoTextIcon}
          />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={usernameTextInput}
          />
        </View>
        <View style={[inputTextWrapper]}>
          <MaterialIcons
            name="lock"
            size={16}
            color="black"
            style={logoTextIcon}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            style={passwordTextInput}
          />
          <TouchableOpacity
            style={showPasswordButton}
            onPress={() => setShowPassword(!showPassword)}
          >
            {/* <Text>{showPassword ? 'Hide' : 'Show'}</Text> */}

            {showPassword ? (
              <MaterialCommunityIcons name="eye" size={16} color="black" />
            ) : (
              <MaterialCommunityIcons name="eye-off" size={16} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => signIn({ username, password })}
        style={[inputWrapper, signInButton]}
      >
        <Text style={{ color: 'white' }}>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  leafLogoWrapper: {
    flexDirection: 'row',
    marginVertical: 48
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 24
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoTextIcon: {
    alignSelf: 'center',
    paddingRight: 10
  },
  inputWrapper: {
    width: '80%'
  },
  inputTextWrapper: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'aliceblue',
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  usernameTextInput: {},
  passwordTextInput: {
    flex: 1
  },
  showPasswordButton: {
    justifyContent: 'center'
  },
  signInButton: {
    backgroundColor: 'dodgerblue',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  }
})

export default SignInScreen
