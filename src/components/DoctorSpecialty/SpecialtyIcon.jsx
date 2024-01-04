import React from 'react'
import { IconButton, useTheme } from 'react-native-paper'
import { getSpecialtyIcon } from '../../ultilities'

export const SpecialtyIcon = (props) => {
  const { icon, size, ...other } = props
  const _icon = getSpecialtyIcon(icon)
  const theme = useTheme()

  return (
    <IconButton
      icon={_icon}
      mode="contained"
      size={size}
      theme={theme}
      {...other}
    />
  )
}
