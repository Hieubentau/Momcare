import React, { useContext, useEffect, useState } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'

import { useTheme } from 'react-native-paper'
import { doctorSpecialityType } from '../../ultilities/doctorSpecialityType'
import ListItemWithoutIcon from '../basics/ListItemWithoutIcon'
import { ItemSeparatorWidth } from '../basics/ItemSeparatorWidth'
import { useMedicalSpecialty } from '../../hooks/useMisc'
import { AppStateContext } from '../../contexts/appStateContext'

const DoctorSpecialityWithoutIcon = (props) => {
  const [selectedIdwithoutIcon, setSelectedIdwithoutIcon] = useState()

  const theme = useTheme()
  const themeColor = theme.colors.primary

  const { topDoctorsText } = props
  const { textHeaderWrapper, seeAllText, flatListWrapper } = styles

  const { MedicalSpecialty: medicalSpecialty } = useContext(AppStateContext)
  const modifiedMedicalSpeciality = medicalSpecialty.map((item) => ({
    id: item.medicalSpecialtyId,
    message: item.vietnameseName
  }))

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
          data={modifiedMedicalSpeciality}
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
