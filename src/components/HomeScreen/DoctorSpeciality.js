import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ThemeColorContext } from '../../contexts/themeColorContext'

const DoctorSpeciality = (props) => {
  const { doctorSpecialityText } = props
  const { avatarTouchableWrapper, avatarTouchable } = styles

  const themeColor = useContext(ThemeColorContext)
  return (
    <View>
      <Text style={doctorSpecialityText}>Doctor Speciality</Text>
      <View style={avatarTouchableWrapper}>
        <TouchableOpacity style={avatarTouchable}>
          <MaterialCommunityIcons
            name="account-multiple"
            size={24}
            color={themeColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  avatarTouchableWrapper: {},
  avatarTouchable: {
    backgroundColor: 'gainsboro',
    borderRadius: 50,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default DoctorSpeciality
