import { FlatList, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import Card from '@/components/Card'
import { COLORS } from '@/constants/theme'
import FloatingActionButton from '@/components/FloatingActionButton'
import SearchBar from '@/components/SearchBar'


const View1 = ({themeToggle,theme,setTheme,curNoteId,setCurNoteId,notes,addNote,setNotes,newNote,setNewNote,searchText,setSearchText,filteredNotes}) => {


    const curTheme = COLORS[theme] // loading dynamic theme
    const styles = StyleSheet.create({
        "container":{
            flex:1,
            alignItems: "center",
        }
    })

    const { width, height } = useWindowDimensions()
    const isTablet = width >= 768
  return (
    <View style={[ styles.container]}>
      <Header
      themeToggle={themeToggle}
      theme={theme}
      setTheme={setTheme}
      />

      <SearchBar
      theme = {theme}
      searchText={searchText}
      setSearchText={setSearchText}

      />
       <FlatList
            data={filteredNotes}
            keyExtractor={(item)=>item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={isTablet?2:1} //responsiveness for tablets
            renderItem={({item})=>(
              <Pressable onPress={()=>{
                setCurNoteId(item.id)
                setNewNote(false)
                console.log("pressed")
                }}>
                <Card
                  {...item}
                  curTheme = {curTheme}
                />
              </Pressable>
            )}
        />
        <FloatingActionButton
        theme={theme}
        addNote = {addNote}
        curNoteId ={curNoteId}
        setCurNoteId = {setCurNoteId}
        notes = {notes}
        setNotes = {setNotes}
        newNote = {newNote}
        setNewNote = {setNewNote}
        />

    </View>
  )
}

export default View1

