import React, { useContext, useState } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'

import { useTheme } from 'react-native-paper'
import { doctorSpecialityType } from '../../ultilities/doctorSpecialityType'
import ListItemWithoutIcon from '../Basics/ListItemWithoutIcon'
import { ItemSeparatorWidth } from '../Basics/ItemSeparatorWidth'

const DoctorSpecialityWithoutIcon = (props) => {
  const [selectedIdwithoutIcon, setSelectedIdwithoutIcon] = useState()

  const theme = useTheme()
  const themeColor = theme.colors.primary

  const { topDoctorsText } = props
  const { textHeaderWrapper, seeAllText, flatListWrapper } = styles

  const renderItemWithoutIcon = ({ item }) => (
    <ListItemWithoutIcon
      item={item}
      selectedIdwithoutIcon={selectedIdwithoutIcon}
      setSelectedIdwithoutIcon={setSelectedIdwithoutIcon}
    />
  )

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
          ItemSeparatorComponent={<ItemSeparatorWidth width={8} />}
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
  }
}

export default DoctorSpecialityWithoutIcon
