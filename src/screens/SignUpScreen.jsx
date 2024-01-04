import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import {
  Avatar,
  TextInput,
  RadioButton,
  Text,
  useTheme
} from 'react-native-paper'
import {
  DefaultSafeAreaView,
  DelayedTextInput,
  HorizontalView,
  InputContainerWithHelper,
  LoadableButton,
  PasswordTextInput,
  VerticalView
} from '../components'
import { GG_MAP_API_KEY, VALIDATION_STATUS } from '../config'
import {
  isAgeValid,
  isEmailValid,
  isNameValid,
  isPasswordValid,
  isPhoneNumberValid
} from '../ultilities'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import * as Location from 'expo-location'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { getShortName } from '../ultilities'

const FirstForm = ({ userDetail, setUserDetail, moveTo }) => {
  const isAllValid = useMemo(
    () =>
      userDetail.name.value !== '' &&
      userDetail.name.error === null &&
      userDetail.age.error === null &&
      userDetail.phone.value !== '' &&
      userDetail.phone.error === null,
    [userDetail]
  )
  return (
    <VerticalView>
      {userDetail.name.value !== '' && (
        <Avatar.Text
          label={getShortName(userDetail.name.value)}
          size={100}
          style={{ marginBottom: 20 }}
        />
      )}
      <InputContainerWithHelper helperText={userDetail.name.error}>
        <TextInput
          autoFocus={true}
          mode="outlined"
          label="Họ và tên"
          placeholder="Điền tên"
          value={userDetail.name.value}
          error={!!userDetail.name.error}
          onChangeText={(text) => setUserDetail('name', text, isNameValid)}
          left={<TextInput.Icon icon={'account'} />}
        />
      </InputContainerWithHelper>
      <HorizontalView>
        <InputContainerWithHelper
          helperText={userDetail.age.error}
          style={{ flex: 1 }}
        >
          <TextInput
            autoFocus={true}
            mode="outlined"
            label="Tuổi"
            keyboardType="numeric"
            placeholder="Điền tuổi"
            value={'' + userDetail.age.value}
            error={!!userDetail.age.error}
            onChangeText={(value) => setUserDetail('age', value, isAgeValid)}
            left={<TextInput.Icon icon={'calendar-account'} />}
          />
        </InputContainerWithHelper>
        <HorizontalView style={{ flex: 1 }}>
          <Text style={{ fontSize: 16 }}>Nam</Text>
          <RadioButton
            value="Nam"
            status={userDetail.gender === 0 ? 'checked' : 'unchecked'}
            onPress={() => setUserDetail('gender', 0, null)}
          />
          <Text style={{ fontSize: 16 }}>Nữ</Text>
          <RadioButton
            value="Nữ"
            status={userDetail.gender === 1 ? 'checked' : 'unchecked'}
            onPress={() => setUserDetail('gender', 1, null)}
          />
        </HorizontalView>
      </HorizontalView>
      <InputContainerWithHelper helperText={userDetail.phone.error}>
        <TextInput
          mode="outlined"
          label="Số điện thoại"
          keyboardType="phone-pad"
          placeholder="Điền số điện thoại"
          value={userDetail.phone.value}
          error={!!userDetail.phone.error}
          onChangeText={(phone) =>
            setUserDetail('phone', phone, isPhoneNumberValid)
          }
          left={<TextInput.Icon icon={'phone'} />}
        />
      </InputContainerWithHelper>
      <LoadableButton
        disabled={!isAllValid}
        isPrimary={true}
        mode="elevated"
        icon="arrow-right"
        contentStyle={{ flexDirection: 'row-reverse' }}
        onPress={() => moveTo((prev) => prev + 1)}
      >
        Tiếp theo
      </LoadableButton>
    </VerticalView>
  )
}

const SecondForm = ({ userDetail, setUserDetail, moveTo }) => {
  const [location, setLocation] = useState('')

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Dialog.show({
          type: ALERT_TYPE.WARNING
        })
        return
      }

      const lo = await Location.getCurrentPositionAsync({})
      setLocation(lo)
    })()
  }, [])

  console.log(location)

  return (
    <VerticalView>
      <InputContainerWithHelper>
        <TextInput
          mode="outlined"
          label="Địa chỉ"
          placeholder="Điền địa chỉ"
          maxLength={1000}
          value={userDetail.address}
          onChangeText={(address) => setUserDetail({ ...userDetail, address })}
          left={<TextInput.Icon icon={'home'} />}
        />
      </InputContainerWithHelper>
      <InputContainerWithHelper>
        <GooglePlacesAutocomplete
          placeholder="Nhập địa chỉ ..."
          query={{
            key: GG_MAP_API_KEY,
            language: 'vi'
          }}
        />
      </InputContainerWithHelper>
      <MapView
        style={{ width: '100%', height: 400 }}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
      />
      <HorizontalView>
        <LoadableButton
          mode="outlined"
          icon="arrow-left"
          onPress={() => moveTo((prev) => prev - 1)}
          style={{ flex: 1 }}
        >
          Quay lại
        </LoadableButton>
        <LoadableButton
          isPrimary={true}
          mode="elevated"
          icon="arrow-right"
          onPress={() => moveTo((prev) => prev + 1)}
          style={{ flex: 2 }}
          contentStyle={{ flexDirection: 'row-reverse' }}
        >
          Tiếp theo
        </LoadableButton>
      </HorizontalView>
    </VerticalView>
  )
}

const ThirdForm = ({ userDetail, setUserDetail, moveTo }) => {
  const [repeatPassword, setRepeatPassword] = useState({
    value: '',
    error: null
  })
  const isAllValid = useMemo(
    () =>
      userDetail.email.value !== '' &&
      userDetail.email.error === null &&
      userDetail.repeat.value !== '' &&
      userDetail.repeat.error === null &&
      userDetail.password.value !== '' &&
      userDetail.password.error === null,
    [userDetail]
  )
  return (
    <VerticalView>
      <InputContainerWithHelper helperText={userDetail.email.error}>
        <TextInput
          autoFocus={true}
          mode="outlined"
          label="Email"
          placeholder="Điền email của bạn"
          value={userDetail.email.value}
          error={!!userDetail.email.error}
          onChangeText={(email) => setUserDetail('email', email, isEmailValid)}
          left={<TextInput.Icon icon={'email'} />}
        />
      </InputContainerWithHelper>
      <InputContainerWithHelper helperText={userDetail.password.error}>
        <PasswordTextInput
          mode="outlined"
          label="Mật khẩu"
          placeholder="Điền mật khẩu của bạn"
          value={userDetail.password.value}
          error={!!userDetail.password.error}
          onChangeText={(password) =>
            setUserDetail('password', password, isPasswordValid)
          }
          left={<TextInput.Icon icon="lock" />}
        />
      </InputContainerWithHelper>
      <InputContainerWithHelper helperText={repeatPassword.error}>
        <PasswordTextInput
          mode="outlined"
          label="Nhập lại mật khẩu"
          value={repeatPassword.value}
          error={!!repeatPassword.error}
          onChangeText={(password) =>
            setRepeatPassword({
              value: password,
              error:
                password !== userDetail.password.value
                  ? 'Mật khẩu không khớp'
                  : null
            })
          }
          left={<TextInput.Icon icon="lock" />}
        />
      </InputContainerWithHelper>
      <HorizontalView>
        <LoadableButton
          mode="outlined"
          icon="arrow-left"
          onPress={() => moveTo((prev) => prev - 1)}
          style={{ flex: 1 }}
        >
          Quay lại
        </LoadableButton>
        <LoadableButton
          isPrimary={true}
          mode="elevated"
          onPress={() => moveTo((prev) => prev - 1)}
          style={{ flex: 2 }}
        >
          Đăng ký
        </LoadableButton>
      </HorizontalView>
    </VerticalView>
  )
}

export const SignUpScreen = () => {
  const [formIndex, setFormIndex] = useState(0)
  const [userDetail, setUserDetail] = useState({
    email: {
      value: '',
      error: null
    },
    password: {
      value: '',
      error: null
    },
    name: {
      value: '',
      error: null
    },
    age: {
      value: 16,
      error: null
    },
    gender: 0,
    address: '',
    phone: {
      value: '',
      error: null
    }
  })

  const theme = useTheme()
  const navigation = useNavigation()
  const statements = [
    'Trước hết, hãy điền một số thông tin cơ bản nào',
    'Tiếp theo, chúng tôi cần vị trí của bạn',
    'Cuối cùng, hãy thiết lập email và mật khẩu nào'
  ]

  const updateAndValidate = (field, value, validator) => {
    if (typeof validator !== 'function') {
      setUserDetail({
        ...userDetail,
        [field]: value
      })
      return
    }
    const ret = validator(value)
    if (ret.status === VALIDATION_STATUS.VALID) {
      // if (field === 'name') {
      //   setUserDetail({
      //     ...userDetail,
      //     [field]: { value: ret.refactor, error: null }
      //   })
      // } else {
      setUserDetail({
        ...userDetail,
        [field]: { value, error: null }
      })
      // }
    } else {
      setUserDetail({
        ...userDetail,
        [field]: { value, error: ret.message }
      })
    }
  }

  return (
    <DefaultSafeAreaView style={styles.container}>
      <VerticalView style={{ marginTop: 40 }}>
        <Text variant={'headlineLarge'}>Đăng ký</Text>
        <Text variant={'bodyMedium'}>{statements[formIndex]}</Text>
      </VerticalView>
      <VerticalView style={{ width: '80%' }} withScroll={true}>
        {formIndex === 0 && (
          <FirstForm
            userDetail={userDetail}
            setUserDetail={updateAndValidate}
            moveTo={setFormIndex}
          />
        )}
        {formIndex === 1 && (
          <SecondForm
            userDetail={userDetail}
            setUserDetail={updateAndValidate}
            moveTo={setFormIndex}
          />
        )}
        {formIndex === 2 && (
          <ThirdForm
            userDetail={userDetail}
            setUserDetail={updateAndValidate}
            moveTo={setFormIndex}
          />
        )}

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Text style={{ color: 'grey' }}>Đã có tài khoản? </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: theme.colors.primary
            }}
            onPress={() => navigation.navigate('Login')}
          >
            Đăng nhập
          </Text>
        </View>
      </VerticalView>
    </DefaultSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 40
  }
})
