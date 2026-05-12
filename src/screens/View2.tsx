import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { NOTES } from '@/constants/notes'
import SubHeader from '@/components/SubHeader'
import { COLORS } from '@/constants/theme'
import Notes from '@/components/Notes'

const View2 = ({notes,curNoteId,setCurNoteId,theme,themeToggle,setTheme,updateNote,deleteNote,newNote,setNewNote,addNote}) => {
  if (notes.length === 0) {
    return null
  }
  const note =  newNote ? null : notes.find((item)=>item.id==curNoteId)
  const [curTitle, setCurTitle] = useState(note?.title || "")
  const [curContent, setCurContent]= useState(note?.content || "")
  const curTheme = COLORS[theme] // loading dynamic theme
  const styles = StyleSheet.create({
    "container":{
      backgroundColor:curTheme.background,
    },
    headerBg: {
      width: "100%",
      height: 100,
      justifyContent: "center",
    },

    headerImage: {
      resizeMode: "cover",
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
    }
  })
  return (
    <View>
     {/* <Sample
     title={notes[0].title}
     content={notes[0].content}
     /> */}
     
     <ImageBackground
      source={require(
        "@/assets/bg.png"
      )}
      style={styles.headerBg}
      imageStyle={styles.headerImage}
    >
</ImageBackground>

     <SubHeader
     theme={theme}
     setTheme={setTheme}
     themeToggle={themeToggle}
     setCurNoteId = {setCurNoteId}
     updateNote={updateNote}
     note={note}
     curTitle = {curTitle}
      setCurTitle = {setCurTitle}
      curContent = {curContent}
      setCurContent = {setCurContent}
      addNote={addNote}
      setNewNote = {setNewNote}
      newNote = {newNote}
      deleteNote = {deleteNote}
      curNoteId={curNoteId}
     />
     <Notes
      theme={theme}
      note={note}
      updateNote={updateNote}
      newNote = {newNote}
      setNewNote = {setNewNote}
      addNote={addNote}
      curTitle = {curTitle}
      setCurTitle = {setCurTitle}
      curContent = {curContent}
      setCurContent = {setCurContent}
     />
      
    </View>
  )
}

export default View2

