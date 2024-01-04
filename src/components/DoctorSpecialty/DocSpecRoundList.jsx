import React from 'react'
import { useGlobalState } from '../../contexts'
import { Section } from '../basics'
import { SpecialtyChip } from './SpecialtyChip'
import { Button, useTheme } from 'react-native-paper'
import { FontAwesome5 } from '@expo/vector-icons'

export const DocSpecRoundList = () => {
  const theme = useTheme()
  const { medicalSpecialties } = useGlobalState()
  const buttons = [
    <Button
      key="1"
      mode="text"
      compact={true}
      onPress={() => {
        console.log('press')
      }}
    >
      Xem tất cả
    </Button>
  ]
  return <Section title="Chuyên khoa" buttons={buttons} />
}
