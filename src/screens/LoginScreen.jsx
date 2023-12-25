import React, { useState, useContext } from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import { Icon, TextInput } from 'react-native-paper'
import {
  InputContainerWithHelper,
  PasswordTextInput,
  LoadableButton,
  VerticalView
} from '../components/basics'
import { useTheme } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../contexts'
import { REQ_RETURN_STATUS } from '../config'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'

export const LoginScreen = () => {
  const [email, setEmail] = useState({
    value: '',
    error: null
  })
  const [password, setPassword] = useState({
    value: '',
    error: null
  })
  const [isFetching, setIsFetching] = useState(false)

  const theme = useTheme()
  const navigation = useNavigation()

  const { leafLogoWrapper, headerText, signInButton, textInput } = styles
  const { login } = useAuth()
  const setValue = (e, setter) => setter({ value: e, error: null })
  const isFieldValid = (field) => field.value.length > 0
  const submit = () => async () => {
    console.log(email, password)
    setIsFetching(true)
    if (!isFieldValid(email)) {
      setEmail({ ...email, error: 'Vui lòng nhập email' })
      setIsFetching(false)
      return
    }

    if (!isFieldValid(password)) {
      setPassword({ ...password, error: 'Vui lòng nhập mật khẩu' })
      setIsFetching(false)
      return
    }

    const result = await login(email.value, password.value)
    setIsFetching(false)
    switch (result.ret) {
      case REQ_RETURN_STATUS.OK:
        Toast.show({
          type: 'success',
          text1: 'Đăng nhập thành công',
          visibilityTime: 1000
        })
        break
      case REQ_RETURN_STATUS.USER_ERROR:
        if (result.res.pos === 'email') {
          setEmail({ ...email, error: result.res.mess })
        } else if (result.res.pos === 'pw') {
          setPassword({ ...password, error: result.res.mess })
        }
        break
      case REQ_RETURN_STATUS.SERVER_ERROR:
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Lỗi kết nối',
          textBody: result.message,
          autoClose: 1000
        })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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

      <VerticalView style={styles.innerContainer}>
        <Text style={headerText}>Chào mừng đến với Momcare</Text>
        <InputContainerWithHelper helperText={email.error}>
          <TextInput
            autoFocus={true}
            mode="outlined"
            label="Email"
            placeholder="Điền email của bạn"
            value={email.value}
            onChangeText={(e) => setValue(e, setEmail)}
            error={!!email.error}
            left={<TextInput.Icon icon={'email'} />}
            style={textInput}
          />
        </InputContainerWithHelper>
        <InputContainerWithHelper helperText={password.error}>
          <PasswordTextInput
            mode="outlined"
            label="Mật khẩu"
            placeholder="Điền mật khẩu của bạn"
            value={password.value}
            error={!!password.error}
            onChangeText={(e) => setValue(e, setPassword)}
            left={<TextInput.Icon icon="lock" />}
            style={textInput}
          />
        </InputContainerWithHelper>
        <LoadableButton
          isPrimary={true}
          style={signInButton}
          mode="elevated"
          isLoading={isFetching}
          onPress={submit()}
        >
          Đăng nhập
        </LoadableButton>
        <LoadableButton
          style={signInButton}
          mode="elevated"
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
          Đăng nhập với Google
        </LoadableButton>
        <View style={styles.registrationBox}>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{ color: 'grey' }}>Bạn chưa có tài khoản? </Text>
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('SignUp')}
          >
            Đăng ký
          </Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
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
  },
  registrationBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  innerContainer: {
    width: '80%'
  },
  signUpText: {
    color: 'dodgerblue',
    fontWeight: 'bold',
    fontSize: 16
  }
})
