import React, { useContext, useState } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { doctorSpecialityType } from '../../ultilities/doctorSpecialityType'
import { ItemSeparatorWidth } from '../Temp/ItemSeparatorWidth'
import { useTheme } from 'react-native-paper'

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

  const theme = useTheme()
  const themeColor = theme.colors.primary

  const { doctorSpecialityText, navigation } = props
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
          <Text
            onPress={() => navigation.navigate('Doctors')}
            style={[seeAllText, { color: themeColor }]}
          >
            See All
          </Text>
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
          ItemSeparatorComponent={<ItemSeparatorWidth width={16} />}
        />
      </View>
    </View>
  )
}

const styles = {
  textHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
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
