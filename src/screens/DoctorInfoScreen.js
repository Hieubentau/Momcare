import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import CardInfo from '../components/Temp/CardInfo'

const DoctorInfoScreen = (props) => {
  const { navigation, route } = props
  const { item } = route.params
  const {
    container,
    titleBarWrapper,
    arrowLeftIcon,
    titleBarName,
    cardWrapper
  } = styles
  return (
    <SafeAreaView style={container}>
      <View style={titleBarWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack('Home')}
          style={arrowLeftIcon}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={titleBarName}>{item.name}</Text>
      </View>
      <TouchableOpacity style={cardWrapper} disabled={true}>
        <CardInfo item={item} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0
  },
  titleBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  arrowLeftIcon: {
    marginRight: 16
  },
  titleBarName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  cardWrapper: {
    backgroundColor: 'white',
    borderRadius: 16,
    height: 100,
    justifyContent: 'center'
  }
})

export default DoctorInfoScreen
