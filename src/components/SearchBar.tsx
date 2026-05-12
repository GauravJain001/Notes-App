import { StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/theme'

const SearchBar = ({theme,searchText,setSearchText}) => {
    const curTheme = COLORS[theme]
    const dimensions = useWindowDimensions()
    const width = dimensions.width
    
const styles = StyleSheet.create({
searchInput: {
  width: width * 0.9,
  backgroundColor: curTheme.card,
  color: curTheme.text,
  paddingVertical: 14,
  paddingHorizontal: 18,
  borderRadius: 18,
  marginBottom: 20,
  fontFamily: "Manrope_500Medium",
  borderWidth: 1,
  borderColor: curTheme.border,
}
})
  return (
    <View>
        <TextInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search notes..."
        placeholderTextColor={curTheme.placeholder}

        style={styles.searchInput}
        />
    </View>
  )
}

export default SearchBar
