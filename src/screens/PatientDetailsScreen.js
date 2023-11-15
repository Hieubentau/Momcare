import React from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import { AntDesign } from '@expo/vector-icons'

import CardInfo from '../components/Temp/CardInfo'
import TitleBar from '../components/Temp/TitleBar'
import AbsoluteBottomButton from '../components/Temp/AbsoluteBottomButton'

const PatientDetailsScreen = (props) => {
  const [patientFullName, setPatientFullName] = React.useState('')
  const [patientGender, setPatientGender] = React.useState('')
  const [patientAge, setPatientAge] = React.useState('')
  const [patientProblem, setPatientProblem] = React.useState('')

  const { navigation, route } = props
  const { passingData } = route.params
  const {
    container,
    patientFullNameWrapper,
    patientDetailsTitle,
    textInputWrapper
  } = styles
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      style={container}
      scrollEnabled={true}
    >
      <TitleBar
        navigation={navigation}
        previousScreen="BookAppointmentMethod"
        titleName="Patient Details"
      />
      <View style={patientFullNameWrapper}>
        <Text style={patientDetailsTitle}>Full Name</Text>
        <TextInput
          style={textInputWrapper}
          placeholder="ex: John Doe"
          onChangeText={setPatientFullName}
          value={patientFullName}
        />
      </View>
      <View>
        <Text style={patientDetailsTitle}>Gender</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, quod, doloremque, quas voluptatibus voluptas dolore
          voluptatem ipsam quae natus voluptatum. Quisquam voluptate, quod,
          doloremque, quas voluptatibus voluptas dolore voluptatem ipsam quae
          natus voluptatum.
        </Text>
      </View>
      <View>
        <Text style={patientDetailsTitle}>Your Age</Text>
        <TextInput
          style={textInputWrapper}
          placeholder="ex: 20"
          onChangeText={setPatientAge}
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
          value={patientProblem}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    marginTop: StatusBar.currentHeight || 0
  },
  patientFullNameWrapper: {},
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
  }
})

export default PatientDetailsScreen
