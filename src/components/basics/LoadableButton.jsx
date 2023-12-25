import React from 'react'
import { Button, useTheme } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export const LoadableButton = ({
  isPrimary,
  children,
  isLoading,
  style,
  contentStyle,
  labelStyle,
  ...others
}) => {
  const theme = useTheme()
  return (
    <Button
      buttonColor={isPrimary && theme.colors.primary}
      textColor={isPrimary && theme.colors.background}
      loading={isLoading}
      disabled={isLoading}
      style={[styles.container, style]}
      contentStyle={[styles.content, contentStyle]}
      labelStyle={[styles.label, labelStyle]}
      {...others}
    >
      {children}
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    marginTop: 10
  },
  content: {
    height: '100%',
    width: '100%'
  },
  label: {
    fontSize: 16
  }
})
