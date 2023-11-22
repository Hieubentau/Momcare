import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { View, TextInput } from 'react-native'
import { Searchbar } from 'react-native-paper'

const SearchBarComponent = forwardRef((props, ref) => {
  const { onPress, searchQuery, setSearchQuery } = props
  const { searchBarWrapper } = styles
  const [isFocused, setIsFocused] = useState(false)

  const searchbarRef = useRef(null)
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (!isFocused) {
        searchbarRef.current.blur()

        setTimeout(() => {
          searchbarRef.current.focus()
        }, 25)

        setIsFocused(true)
      }
    }
  }))

  return (
    <Searchbar
      ref={searchbarRef}
      placeholder="Search"
      onChangeText={(query) => setSearchQuery && setSearchQuery(query)}
      value={searchQuery}
      style={searchBarWrapper}
      onPressIn={() => {
        if (onPress) {
          onPress()
        }
      }}
    />
  )
})

const styles = {
  searchBarWrapper: {
    backgroundColor: 'gainsboro'
  }
}

export default SearchBarComponent
