import React, { useState, useContext } from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import { AuthContext } from '../contexts/authContext'
import { Icon, TextInput } from 'react-native-paper'
import { VerticalView } from '../components/Basics/VerticalView'
import { PasswordTextInput } from '../components/Basics/PasswordTextInput'
import { LoadableButton } from '../components/Basics/LoadableButton'
import { useTheme } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import { AppStateContext } from '../contexts/appStateContext'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)
  const { isLoading, setIsLoading } = useContext(AppStateContext)
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
          buttonColor={theme.colors.primary}
          textColor={theme.colors.background}
          style={signInButton}
          mode="elevated"
          isLoading={isLoading}
          onPress={() => {
            console.log('sign in button pressed')
            setIsLoading(true)
            signIn(email, password).then((res) => {
              setIsLoading(false)
              if (!res) {
                Toast.show({
                  type: 'error',
                  text1: 'Sign in failed',
                  text2: 'Please check your email and password'
                })
              } else {
                Toast.show({
                  type: 'success',
                  text1: 'Sign in success',
                  text2: 'Welcome to Momcare',
                  autoHide: true
                })
              }
            })
          }}
          contentStyle={{
            height: '100%',
            width: '100%'
          }}
        >
          Sign In
        </LoadableButton>
        <LoadableButton
          style={signInButton}
          mode="elevated"
          isLoading={isLoading}
          icon={() => (
            <Icon
              source={{
                uri: 'https://img.icons8.com/color/48/000000/google-logo.png'
              }}
              size={24}
            />
          )}
          onPress={() => {
            console.log('sign in with google button pressed')
          }}
        >
          Sign In with Google
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
