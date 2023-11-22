import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { useTheme } from 'react-native-paper'

const CancelModalButton = (props) => {
  const theme = useTheme()
  const themeColor = theme.colors.primary
  const {
    isCancelModalVisible,
    setIsCancelModalVisible,
    isConfirmedCancelModalVisible,
    setIsConfirmedCancelModalVisible
  } = props
  const {
    optionAppointmentWrapper,
    optionAppointmentButton,
    optionAppointmentText
  } = styles
  return (
    <View style={optionAppointmentWrapper}>
      <TouchableOpacity
        onPress={() => {
          setIsCancelModalVisible(false),
            setIsConfirmedCancelModalVisible(false)
        }}
        style={[
          optionAppointmentButton,
          { backgroundColor: 'white', borderColor: themeColor }
        ]}
      >
        <Text style={[optionAppointmentText, { color: themeColor }]}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          optionAppointmentButton,
          { backgroundColor: themeColor, borderColor: themeColor }
        ]}
      >
        <Text
          onPress={() => {
            setIsCancelModalVisible(false),
              setIsConfirmedCancelModalVisible(true)
          }}
          style={[optionAppointmentText, { color: 'white' }]}
        >
          Yes, Cancel
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0
  },
  optionAppointmentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  optionAppointmentButton: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 8,
    margin: 8,
    flex: 1
  },
  optionAppointmentText: {
    fontSize: 18,
    textAlign: 'center'
  }
})

export default CancelModalButton
