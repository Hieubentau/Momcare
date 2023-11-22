import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Modal, Portal, Text, Button, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ConfirmedModal = (props) => {
  const {
    navigation,
    isConfirmedModalVisible,
    setIsConfirmedModalVisible,
    iconMaterialCommunityIcons,
    confirmModalTitleText,
    confirmModalMessageText,
    goBackText,
    goBackScreen
  } = props

  const showModal = () => setIsConfirmedModalVisible(true)
  const hideModal = () => setIsConfirmedModalVisible(false)
  const theme = useTheme()
  const themeColor = theme.colors.primary

  const { confirmModalWrapper, confirmModalTitle, confirmModalMessage } = styles

  const containerStyle = confirmModalWrapper

  return (
    <Portal>
      <Modal
        visible={isConfirmedModalVisible}
        contentContainerStyle={containerStyle}
      >
        <MaterialCommunityIcons
          name={iconMaterialCommunityIcons}
          size={36}
          color={themeColor}
        />
        <Text style={[confirmModalTitle, { color: themeColor }]}>
          {confirmModalTitleText}
        </Text>
        <Text style={confirmModalMessage}>{confirmModalMessageText}</Text>
        <Button
          mode="contained"
          onPress={() => {
            hideModal, navigation.navigate(goBackScreen)
          }}
        >
          {goBackText}
        </Button>
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  confirmModalWrapper: {
    width: '70%',
    height: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 16
  },
  confirmModalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16
  },
  confirmModalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 16
  }
})

export default ConfirmedModal
