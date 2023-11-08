import React, { useContext, useState } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ThemeColorContext } from '../../contexts/themeColorContext'
import { doctorSpecialityType } from '../../ultilities/doctorSpecialityType'

const Item = ({ item, onPress, backgroundColor, styles }) => (
  <View style={styles.avatarWrapper}>
    <View style={styles.avatarTouchableWrapper}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.avatarTouchable, { backgroundColor }]}
      >
        <MaterialCommunityIcons
          name={item.icon}
          size={24}
          color={styles.themeColor}
        />
      </TouchableOpacity>
    </View>
    <Text>{item.message}</Text>
  </View>
)

const DoctorSpeciality = (props) => {
  const [selectedId, setSelectedId] = useState()

  const themeColor = useContext(ThemeColorContext)

  const { doctorSpecialityText } = props
  const { avatarWrapper, avatarTouchableWrapper, avatarTouchable } = styles

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'silver' : 'gainsboro'

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        styles={{
          avatarWrapper,
          avatarTouchableWrapper,
          avatarTouchable,
          themeColor
        }}
      />
    )
  }

  return (
    <View>
      <Text style={doctorSpecialityText}>Doctor Speciality</Text>
      <View>
        <FlatList
          data={doctorSpecialityType}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </View>
  )
}

const styles = {
  avatarWrapper: {
    width: 48,
    alignItems: 'center'
  },
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
