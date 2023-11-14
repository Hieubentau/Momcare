import { TextInput } from 'react-native-paper'
import { useState } from 'react'

export const PasswordTextInput = ({ ...others }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <TextInput
      {...others}
      secureTextEntry={!isPasswordVisible}
      right={
        isPasswordVisible ? (
          <TextInput.Icon
            icon="eye"
            onPress={() => setIsPasswordVisible(false)}
          />
        ) : (
          <TextInput.Icon
            icon="eye-off"
            onPress={() => setIsPasswordVisible(true)}
          />
        )
      }
    />
  )
}
