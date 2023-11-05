import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

const SearchBar = () => {
  const [search, setSearch] = React.useState('')

  const updateSearch = (search) => {
    setSearch(search)
  }

  return (
    <View style={styles.searchBarWrapper}>
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
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 8,
    marginBottom: 16
  },
  searchBarIcon: {
    marginRight: 8
  },
  searchBarInput: {
    flex: 1
  }
}

export default SearchBar
