import React from 'react'
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-paper'

const CancelModal = (props) => {
  const { isCancelModalVisible, children, setIsCancelModalVisible } = props
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isCancelModalVisible}
    >
      <View style={styles.overlay} />
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Cancel Appointment</Text>
        </View>
        <Divider />
        <View style={styles.modalMessageWrapper}>
          <Text style={styles.modalMessageText}>
            Are you sure you want to cancel your appointment
          </Text>
          <Text style={styles.modalMessageText}>
            Only 50% of the funds will be returned to your account
          </Text>
        </View>
        <Divider style={{ marginTop: 12 }} />
        {children}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    height: '37%',
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
    justifyContent: 'center',
    marginVertical: 8
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  modalMessageWrapper: {},
  modalMessageText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 12
  }
})

export default CancelModal
