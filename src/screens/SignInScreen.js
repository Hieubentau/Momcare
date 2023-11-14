import React, { useState, useContext } from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import { AuthContext } from '../contexts/authContext'
import { TextInput } from 'react-native-paper'
import { VerticalView } from '../components/Basics/VerticalView'
import { PasswordTextInput } from '../components/Basics/PasswordTextInput'
import { LoadableButton } from '../components/Basics/LoadableButton'
import { useTheme } from 'react-native-paper'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { signIn } = useContext(AuthContext)
  const theme = useTheme()

  const { leafLogoWrapper, headerText, signInButton, textInput } = styles

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',

        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View style={{ ...leafLogoWrapper }}>
        <Ionicons name="leaf-outline" size={36} color={theme.colors.primary} />
        <EvilIcons name="heart" size={72} color={theme.colors.primary} />
        <Ionicons
          name="leaf-outline"
          size={36}
          color={theme.colors.primary}
          style={{ transform: [{ scaleX: -1 }] }}
        />
      </View>

      <VerticalView
        style={{
          width: '80%'
        }}
      >
        <Text style={headerText}>Welcome to Momcare</Text>
        <TextInput
          autoFocus={true}
          mode="outlined"
          label="Email"
          placeholder="Type email"
          value={email}
          onChangeText={setEmail}
          left={<TextInput.Icon icon={'email'} />}
          style={textInput}
        />
        <PasswordTextInput
          mode="outlined"
          label="Password"
          placeholder="Type password"
          value={password}
          onChangeText={setPassword}
          left={<TextInput.Icon icon="lock" />}
          style={textInput}
        />
        <LoadableButton
          style={signInButton}
          mode="contained"
          isLoading={isLoading}
          onPress={() => {
            console.log('sign in button pressed')
            setIsLoading(true)
            signIn(email, password)
          }}
          contentStyle={{
            height: '100%',
            width: '100%'
          }}
        >
          Sign In
        </LoadableButton>
      </VerticalView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%'
  },
  container: {
    flex: 1,
    height: '100%'
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
    width: '100%',
    height: 50,
    borderRadius: 25,
    marginTop: 10
  }
})

export default SignInScreen
