import React, { useContext, useState } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'

import { ThemeColorContext } from '../../contexts/themeColorContext'
import { doctorSpecialityType } from '../../ultilities/doctorSpecialityType'

const ItemSeparator = () => {
  return <View style={{ width: 16 }} />
}

const ItemWithoutIcon = ({
  item,
  onPress,
  backgroundColor,
  borderColor,
  textColor,
  styles
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.textTouchable, { backgroundColor }, { borderColor }]}
  >
    <Text style={{ padding: 8, color: textColor }}>{item.message}</Text>
  </TouchableOpacity>
)

const DoctorSpecialityWithoutIcon = (props) => {
  const [selectedIdwithoutIcon, setSelectedIdwithoutIcon] = useState()

  const themeColor = useContext(ThemeColorContext)

  const { topDoctorsText } = props
  const { textHeaderWrapper, seeAllText, flatListWrapper, textTouchable } =
    styles

  const renderItemWithoutIcon = ({ item }) => {
    const backgroundColor =
      item.id === selectedIdwithoutIcon ? themeColor : 'white'

    const borderColor = themeColor

    const textColor = item.id === selectedIdwithoutIcon ? 'white' : themeColor

    return (
      <ItemWithoutIcon
        item={item}
        onPress={() => setSelectedIdwithoutIcon(item.id)}
        onPressout={() => setSelectedIdwithoutIcon(item.id)}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        textColor={textColor}
        styles={{
          textTouchable,
          themeColor
        }}
      />
    )
  }

  return (
    <View>
      <View style={textHeaderWrapper}>
        <Text style={topDoctorsText}>Top Doctors</Text>
        <TouchableOpacity>
          <Text style={[seeAllText, { color: themeColor }]}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={flatListWrapper}>
        <FlatList
          data={doctorSpecialityType}
          renderItem={renderItemWithoutIcon}
          keyExtractor={(item) => item.id}
          extraData={selectedIdwithoutIcon}
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
  textTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 2
  }
}

export default DoctorSpecialityWithoutIcon
