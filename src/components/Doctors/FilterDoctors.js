import React from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function EmojiPicker(props) {
  const { isModalVisible, children, setIsModalVisible } = props
  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <MaterialIcons name="close" color="black" size={22} />
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        {children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: '30%',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    position: 'absolute',
    bottom: 0
  },
  titleContainer: {
    height: '20%',
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: 'black',
    fontSize: 16
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center'
  }
})
