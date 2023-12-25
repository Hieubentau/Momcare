import { TextInput } from 'react-native-paper'
import React, { useEffect } from 'react'

/**
 * A text input that only updates its value after 1000ms
 *
 * @param value value state
 * @param setValue value setter
 * @param others other props
 * @returns {JSX.Element} a React Native Paper TextInput
 */
export const DelayedTextInput = ({
  value,
  onChangeText = undefined,
  ...others
}) => {
  const [valueToSet, setValueToSet] = React.useState(value)

  console.log(value)
  return (
    <TextInput
      value={valueToSet}
      onChangeText={(val) => {
        const timeout = setTimeout(() => {
          console.log('set ', val)
          setValueToSet(val)
        }, 500)

        return () => clearTimeout(timeout)
      }}
      {...others}
    />
  )
}
