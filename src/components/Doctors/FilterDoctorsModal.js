import React from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Divider from '../Temp/Divider'

const FilterDoctorsModal = (props) => {
  const { isModalVisible, children, setIsModalVisible } = props
  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Filter</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <MaterialIcons name="close" color="black" size={22} />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: '50%',
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    position: 'absolute',
    bottom: 0
  },
  titleContainer: {
    height: '10%',
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
})

export default FilterDoctorsModal
