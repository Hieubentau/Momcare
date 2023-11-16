import React, { useState, useEffect } from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Keyboard
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import moment from 'moment'

import TitleBar from '../components/Temp/TitleBar'
import AbsoluteBottomButton from '../components/Temp/AbsoluteBottomButton'

const AddPaymentMethodScreen = (props) => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('01/01/2999')
  const [cvvNumber, setCvvNumber] = useState('')

  const [showNextButton, setShowNextButton] = useState(true)

  useEffect(() => {
    // Add a listener for keyboard hide events
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setShowNextButton(true)
      }
    )

    // Clean up the listener on component unmount
    return () => {
      keyboardDidHideListener.remove()
    }
  }, [])

  const { navigation, route } = props
  const { passingData } = route.params
  const {
    container,
    cardDetailsTitle,
    textInputWrapper,
    dateAndCvvWrapper,
    dateWrapper,
    cvvWrapper
  } = styles

  return (
    <View style={container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <TitleBar
          navigation={navigation}
          previousScreen="PatientDetails"
          titleName="Add New Card"
        />
        <View>
          <Text style={cardDetailsTitle}>Card Name</Text>
          <TextInput
            style={textInputWrapper}
            placeholder="ex: John Doe"
            onChangeText={setCardName}
            onFocus={() => setShowNextButton(false)}
            value={cardName}
          />
        </View>
        <View>
          <Text style={cardDetailsTitle}>Card Number</Text>
          <TextInput
            style={textInputWrapper}
            placeholder="ex: 2002000100020003"
            onChangeText={setCardNumber}
            onFocus={() => setShowNextButton(false)}
            value={cardNumber}
            inputMode="numeric"
            maxLength={16}
          />
        </View>
        <View style={dateAndCvvWrapper}>
          <View style={dateWrapper}>
            <Text style={cardDetailsTitle}>Expiry Date</Text>
            <TextInput
              style={textInputWrapper}
              placeholder="ex: 25/12/2023"
              onFocus={() => setShowNextButton(false)}
              onChangeText={setExpiryDate}
              value={expiryDate}
            />
          </View>
          <View style={cvvWrapper}>
            <Text style={cardDetailsTitle}>CVV</Text>
            <TextInput
              style={textInputWrapper}
              placeholder="ex: 699"
              onChangeText={setCvvNumber}
              onFocus={() => setShowNextButton(false)}
              value={cvvNumber}
              inputMode="numeric"
              maxLength={3}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {showNextButton ? (
        <AbsoluteBottomButton
          navigation={navigation}
          nextScreen="ReviewSummary"
          passingData={{
            ...passingData,
            cardName,
            cardNumber,
            expiryDate,
            cvvNumber
          }}
          buttonName="Next"
        />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0
  },
  cardDetailsTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInputWrapper: {
    alignItems: 'center',
    backgroundColor: 'gainsboro',
    borderRadius: 16,
    height: 52,
    paddingHorizontal: 8,
    marginTop: 8
  },
  dateAndCvvWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dateWrapper: {
    flex: 1,
    marginRight: 8
  },
  cvvWrapper: {
    flex: 0.5,
    marginLeft: 8
  }
})

export default AddPaymentMethodScreen
