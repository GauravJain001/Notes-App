import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '@/constants/theme';

const FloatingActionButton = ({theme,addNote,curNoteId,setCurNoteId,notes,setNotes,newNote,setNewNote}) => {
    const dimensions = useWindowDimensions()
    const width = dimensions.width
    const height = dimensions.height
    const fabSize = width * 0.18
    const curTheme = COLORS[theme]

    const styles = StyleSheet.create({
        fab: {
                position: "absolute",
                bottom: width * 0.06,
                right: width * 0.06,
                width: fabSize,
                height: fabSize,
                borderRadius: fabSize / 2,
                backgroundColor: curTheme.primary,
                alignItems: "center",
                justifyContent: "center",
                elevation: 10,
                shadowColor: curTheme.primary,
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.25,
                shadowRadius: 12,
            }
    })
    const onPress = ()=>{
        console.log("pressed2")
        setNewNote(true)
        setCurNoteId(notes.length+1)
        
        
        
    }
  return (
      <Pressable 
      style={styles.fab}
      onPress={onPress}
      >
            <Ionicons
                name="add"
                size={30}
                color="#FFFFFF"
            />
        </Pressable>
  )
}

export default FloatingActionButton

