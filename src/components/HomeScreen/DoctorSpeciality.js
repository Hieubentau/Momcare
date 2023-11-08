import React, { useContext, useState } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ThemeColorContext } from '../../contexts/themeColorContext'
import { doctorSpecialityType } from '../../ultilities/doctorSpecialityType'

const ItemSeparator = () => {
  return <View style={{ width: 16 }} />
}

const ItemWithIcon = ({ item, onPress, backgroundColor, styles }) => (
  <View style={styles.avatarWrapper}>
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
    <Text numberOfLines={1}>{item.message}</Text>
  </View>
)

const DoctorSpeciality = (props) => {
  const [selectedIdwithIcon, setSelectedIdwithIcon] = useState()

  const themeColor = useContext(ThemeColorContext)

  const { doctorSpecialityText } = props
  const {
    textHeaderWrapper,
    seeAllText,
    flatListWrapper,
    avatarWrapper,
    avatarTouchable
  } = styles

  const renderItemWithIcon = ({ item }) => {
    const backgroundColor =
      item.id === selectedIdwithIcon ? 'silver' : 'gainsboro'

    return (
      <ItemWithIcon
        item={item}
        onPress={() => setSelectedIdwithIcon(item.id)}
        onPressout={() => setSelectedIdwithIcon(item.id)}
        backgroundColor={backgroundColor}
        styles={{
          avatarWrapper,
          avatarTouchable,
          themeColor
        }}
      />
    )
  }

  return (
    <View>
      <View style={textHeaderWrapper}>
        <Text style={doctorSpecialityText}>Doctor Speciality</Text>
        <TouchableOpacity>
          <Text style={[seeAllText, { color: themeColor }]}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={flatListWrapper}>
        <FlatList
          data={doctorSpecialityType}
          renderItem={renderItemWithIcon}
          keyExtractor={(item) => item.id}
          extraData={selectedIdwithIcon}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </View>
  )
}

const styles = {
  textHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  seeAllText: {
    flex: 1,
    alignItems: 'flex-end',
    fontSize: 16,
    fontWeight: 'bold'
  },
  flatListWrapper: {
    marginVertical: 8
  },
  avatarWrapper: {
    width: 48,
    alignItems: 'center'
  },
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