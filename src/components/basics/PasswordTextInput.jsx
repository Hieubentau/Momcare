import { TextInput } from 'react-native-paper'
import React, { useState } from 'react'

export const PasswordTextInput = ({ ...others }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <TextInput
      {...others}
      secureTextEntry={!isPasswordVisible}
      right={
        <TextInput.Icon
          icon={isPasswordVisible ? 'eye' : 'eye-off'}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      }
    />
  )
}
