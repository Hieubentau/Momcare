import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useTheme } from 'react-native-paper'
import { AntDesign, Ionicons } from '@expo/vector-icons'

const DropdownComponent = (props) => {
  const { dataDuration, selectedDuration, setSelectedDuration } = props
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  const theme = useTheme()
  const themeColor = theme.colors.primary

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: themeColor }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataDuration}
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
          setSelectedDuration(item.label)
          console.log(selectedDuration)
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
