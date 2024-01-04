import React from 'react'
import { Chip, useTheme } from 'react-native-paper'

export const SpecialtyChip = (props) => {
  const theme = useTheme()
  return (
    <Chip theme={theme} {...props}>
      {props.specialty}
    </Chip>
  )
}
