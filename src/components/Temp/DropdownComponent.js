import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { ThemeColorContext } from '../../contexts/themeColorContext'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const data = [
  { label: '20 minutes', value: '1' },
  { label: '30 minutes', value: '2' },
  { label: '45 minutes', value: '3' },
  { label: '1 hour', value: '4' },
  { label: '2 hour', value: '5' }
]

const DropdownComponent = () => {
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  const themeColor = useContext(ThemeColorContext)

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: themeColor }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Duration' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value)
          setIsFocus(false)
        }}
        renderLeftIcon={() => (
          <Ionicons
            name="time-sharp"
            size={20}
            color={isFocus ? themeColor : 'black'}
            style={styles.icon}
          />
        )}
      />
    </View>
  )
}

export default DropdownComponent

const styles = StyleSheet.create({
  container: {},
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8
  },
  icon: {
    marginRight: 5
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
})
