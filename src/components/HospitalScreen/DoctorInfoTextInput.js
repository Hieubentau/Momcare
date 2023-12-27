/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { TextInput } from 'react-native-paper'

const DoctorInfoTextInput = (props) => {
  const { label, value, mode, style, onChangeText } = props
  return (
    <TextInput
      label={label}
      value={value}
      mode={mode}
      style={style}
      onChangeText={onChangeText}
    />
  )
}

export default DoctorInfoTextInput
