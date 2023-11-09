import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = (props) => {
  const { text, flexNum } = props
  const [search, setSearch] = useState(text)

  const updateSearch = (search) => {
    setSearch(search)
  }

  const { searchBarWrapper, searchBarIcon } = styles

  return (
    <View style={[searchBarWrapper, { flex: flexNum }]}>
      <Feather name="search" size={20} color="gray" style={searchBarIcon} />
      <TextInput
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  )
}

const styles = {
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gainsboro',
    borderRadius: 16,
    height: 52,
    paddingHorizontal: 8,
    marginBottom: 16
  },
  searchBarIcon: {
    marginRight: 8
  }
}

export default SearchBar
