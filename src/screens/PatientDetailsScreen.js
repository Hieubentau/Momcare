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
import { Checkbox } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import TitleBar from '../components/basics/TitleBar'
import AbsoluteBottomButton from '../components/basics/AbsoluteBottomButton'

const PatientDetailsScreen = (props) => {
  const [patientFullName, setPatientFullName] = useState('')
  const [patientGender, setPatientGender] = useState('Male')
  const [patientAge, setPatientAge] = useState('')
  const [patientProblem, setPatientProblem] = useState('')

  const [maleChecked, setMaleChecked] = useState(true)
  const [femaleChecked, setFemaleChecked] = useState(false)

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
    patientDetailsTitle,
    textInputWrapper,
    patientGenderWrapper,
    genderInfoWrapper,
    genderInfoText
  } = styles
  return (
    <View style={container}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View>
          <Text style={patientDetailsTitle}>Full Name</Text>
          <TextInput
            style={textInputWrapper}
            placeholder="ex: John Doe"
            onChangeText={setPatientFullName}
            onFocus={() => setShowNextButton(false)}
            value={patientFullName}
          />
        </View>
        <View>
          <Text style={patientDetailsTitle}>Gender</Text>
          <View style={patientGenderWrapper}>
            <View style={genderInfoWrapper}>
              <Text style={genderInfoText}>Male</Text>
              <Checkbox
                status={maleChecked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setMaleChecked(!maleChecked)
                  setFemaleChecked(!femaleChecked)
                  setPatientGender('Male')
                }}
              />
            </View>
            <View style={genderInfoWrapper}>
              <Text style={genderInfoText}>Female</Text>
              <Checkbox
                status={femaleChecked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setMaleChecked(!maleChecked)
                  setFemaleChecked(!femaleChecked)
                  setPatientGender('Female')
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={patientDetailsTitle}>Your Age</Text>
          <TextInput
            style={textInputWrapper}
            placeholder="ex: 20"
            onChangeText={setPatientAge}
            onFocus={() => setShowNextButton(false)}
            value={patientAge}
            inputMode="numeric"
          />
        </View>
        <View>
          <Text style={patientDetailsTitle}>Write Your Problem</Text>
          <TextInput
            style={textInputWrapper}
            placeholder="Write your problem here"
            onChangeText={setPatientProblem}
            onFocus={() => setShowNextButton(false)}
            value={patientProblem}
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </KeyboardAwareScrollView>
      {showNextButton ? (
        <AbsoluteBottomButton
          navigation={navigation}
          nextScreen="AddPaymentMethod"
          passingData={{
            ...passingData,
            patientFullName,
            patientGender,
            patientAge,
            patientProblem
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
  patientDetailsTitle: {
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
  patientGenderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  genderInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  genderInfoText: {
    fontSize: 16
  }
})

export default PatientDetailsScreen
