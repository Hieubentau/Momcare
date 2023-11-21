import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { View, TextInput } from 'react-native'
import { Searchbar } from 'react-native-paper'

const SearchBarComponent = forwardRef((props, ref) => {
  const { onPress } = props
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = (query) => setSearchQuery(query)

  const { searchBarWrapper } = styles

  const searchbarRef = useRef(null)
  useImperativeHandle(ref, () => ({
    focus: () => {
      searchbarRef.current.blur()

      setTimeout(() => {
        searchbarRef.current.focus()
      }, 25)
    }
  }))

  return (
    <Searchbar
      ref={searchbarRef}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={searchBarWrapper}
      onPressIn={() => {
        if (onPress) onPress()
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
