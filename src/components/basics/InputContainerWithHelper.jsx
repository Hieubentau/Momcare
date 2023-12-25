import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'

export const InputContainerWithHelper = (props) => {
  const { style, children, helperText, helperStyle, helperType } = props
  return (
    <View
      style={{
        ...styles.container,
        ...style
      }}
    >
      {children}
      {helperText && (
        <View style={styles.helperWrapper}>
          <HelperText
            type={helperType ? helperType : 'error'}
            visible={!!helperText}
            style={{ ...styles.helperText, ...helperStyle }}
          >
            {helperText}
          </HelperText>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  helperWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  helperText: {
    flexShrink: 1
  }
})
