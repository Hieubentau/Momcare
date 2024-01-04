/* eslint-disable react/jsx-filename-extension */
import React, { forwardRef } from 'react'
import { TextInput } from 'react-native-paper'

const DoctorInfoTextInput = forwardRef((props, ref) => {
  const {
    label,
    value,
    mode,
    inputMode,
    style,
    onChangeText,
    onFocus,
    isDisabled
  } = props
  return (
    <TextInput
      ref={ref}
      label={label}
      value={value}
      mode={mode}
      inputMode={inputMode}
      style={style}
      onChangeText={onChangeText}
      onFocus={onFocus}
      disabled={isDisabled}
    />
  )
})

export default DoctorInfoTextInput
