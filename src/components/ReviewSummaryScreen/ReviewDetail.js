import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ReviewDetail = (props) => {
  const { title, info } = props
  const { detailsWrapper, detailsTitle, detailsInfo } = styles
  return (
    <View style={detailsWrapper}>
      <Text style={detailsTitle}>{title}</Text>
      <Text style={detailsInfo}>{info}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlignVertical: 'center',
    marginVertical: 5
  },
  detailsTitle: {
    fontSize: 16,
    color: 'grey'
  },
  detailsInfo: {
    fontSize: 18,
    fontWeight: '400'
  }
})

export default ReviewDetail
