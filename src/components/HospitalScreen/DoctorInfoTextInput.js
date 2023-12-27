/* eslint-disable react/jsx-filename-extension */
import React, { forwardRef } from 'react'
import { TextInput } from 'react-native-paper'

const DoctorInfoTextInput = forwardRef((props, ref) => {
  const { label, value, mode, style, onChangeText, onFocus } = props
  return (
    <TextInput
      ref={ref}
      label={label}
      value={value}
      mode={mode}
      style={style}
      onChangeText={onChangeText}
      onFocus={onFocus}
    />
  )
})

export default DoctorInfoTextInput
