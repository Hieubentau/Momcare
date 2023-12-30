/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DropdownDoctorInfo = (props) => {
  const {
    listDataValue,
    dataValue,
    setDataValue,
    title,
    titleIconMaterialCommunityIcons
  } = props
  console.log(dataValue)
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  const {
    container,
    dropdown,
    placeholderStyle,
    selectedTextStyle,
    iconStyle,
    inputSearchStyle
  } = styles
  const theme = useTheme()
  const themeColor = theme.colors.primary

  return (
    <View style={container}>
      <Dropdown
        style={[dropdown, isFocus && { borderColor: themeColor }]}
        placeholderStyle={placeholderStyle}
        selectedTextStyle={selectedTextStyle}
        inputSearchStyle={inputSearchStyle}
        iconStyle={iconStyle}
        data={listDataValue}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? title : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value)
          setDataValue({ value: item.label, error: null })
          setIsFocus(false)
        }}
        renderLeftIcon={() => (
          <MaterialCommunityIcons
            name={titleIconMaterialCommunityIcons}
            size={20}
            color={isFocus ? themeColor : 'black'}
            style={styles.icon}
          />
        )}
      />
    </View>
  )
}

export default DropdownDoctorInfo

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
