import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Keyboard
} from 'react-native'
import { Divider, TextInput, useTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { Rating, AirbnbRating } from 'react-native-ratings'
import ConfirmedModal from '../components/Basics/ConfirmedModal'

const WriteReviewScreen = (props) => {
  const [reviewText, setReviewText] = useState('')
  const [isSubmitReviewModalVisible, setIsSubmitReviewModalVisible] =
    useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(true)

  useEffect(() => {
    // Add a listener for keyboard hide events
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setShowSubmitButton(true)
      }
    )

    // Clean up the listener on component unmount
    return () => {
      keyboardDidHideListener.remove()
    }
  }, [])

  const { navigation, route } = props
  const { item } = route.params

  const theme = useTheme()
  const themeColor = theme.colors.primary

  const {
    container,
    contentCenterWrapper,
    contentText,
    submitButton,
    submitText
  } = styles

  const handleFinishRating = (rating) => {
    console.log(rating) // This will log the rating value to the console.
  }

  return (
    <SafeAreaView style={container}>
      <View style={contentCenterWrapper}>
        <Ionicons name="md-person-outline" size={48} color="black" />
        <Text style={[contentText, { textAlign: 'center' }]}>
          How was your experience with {item.name}?
        </Text>
        <AirbnbRating
          defaultRating={0}
          selectedColor={themeColor}
          tintColor="white"
          size={30}
          reviewSize={0}
          onFinishRating={handleFinishRating}
        />
      </View>
      <Divider style={{ marginTop: 16 }} />
      <Text style={contentText}>Write Your Review</Text>
      <TextInput
        mode="outlined"
        placeholder="Your review here..."
        value={reviewText}
        onChangeText={(reviewText) => setReviewText(reviewText)}
        onFocus={() => setShowSubmitButton(false)}
        multiline={true}
        numberOfLines={5}
        style={{
          backgroundColor: 'gainsboro',
          marginTop: 16,
          paddingVertical: 8
        }}
      />
      <ConfirmedModal
        navigation={navigation}
        isConfirmedModalVisible={isSubmitReviewModalVisible}
        setIsConfirmedModalVisible={setIsSubmitReviewModalVisible}
        iconMaterialCommunityIcons="star-shooting-outline"
        confirmModalTitleText="Review Successful!"
        confirmModalMessageText="Your review has been submitted successfully. Thank you for your feedback!"
        goBackText="Ok"
        goBackScreen="Tabs"
      />
      {showSubmitButton ? (
        <TouchableOpacity
          onPress={() => {
            setIsSubmitReviewModalVisible(!isSubmitReviewModalVisible)
          }}
          style={[submitButton, { backgroundColor: themeColor }]}
        >
          <Text style={submitText}>Submit</Text>
        </TouchableOpacity>
      ) : null}
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
  contentCenterWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16
  },
  submitButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default WriteReviewScreen
