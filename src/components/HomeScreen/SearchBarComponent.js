import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { Searchbar } from 'react-native-paper'

const SearchBarComponent = (props) => {
  const { navigation } = props
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => setSearchQuery(query)

  const { searchBarWrapper } = styles

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={searchBarWrapper}
    />
  )
}

const styles = {
  searchBarWrapper: {
    backgroundColor: 'gainsboro'
  }
}

export default SearchBarComponent
