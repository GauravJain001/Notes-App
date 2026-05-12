import { Pressable, StyleSheet, Switch, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '@/constants/theme';

const SubHeader = ({theme,themeToggle,curNoteId,setCurNoteId,updateNote,note,setTheme,curTitle,setCurTitle,curContent,setCurContent,addNote,setNewNote,newNote,deleteNote}) => {
    const dimensions = useWindowDimensions()
    const width = dimensions.width;
    const curTheme = COLORS[theme]

    const themeIcon = theme==="light"?"sun":"moon"
    const onPress = ()=>{
        setCurNoteId(null)
        if(newNote){
            addNote(Date.now(),curTitle,curContent,Date.now())
        }
        setNewNote(false)
    }
    
    const styles = StyleSheet.create({
        "container":{
            backgroundColor:curTheme.background,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            width:width,
            padding:width*0.03
        },
        "innerContainer":{
            flexDirection:"row",
            alignItems:"center",
            gap:10,
        },
        "iconContainer":{
            backgroundColor:curTheme.iconBackground,
            padding:width*0.01,
            borderRadius:10,
            alignItems:"center",
            justifyContent:"center",
        },
        
    })
  return (
    <View style={[styles.container]}>
    <Pressable onPress={onPress}>
    <View style={[styles.iconContainer]}>
        <Ionicons
        name='chevron-back-outline'
        size={30}
        color={curTheme.iconPrimary}
        />
    </View>
    </Pressable>

    <View style={[styles.innerContainer]}>
        <Pressable onPress={()=>deleteNote(curNoteId)}>
        <View style={[styles.iconContainer]}>
            <Feather
            name='trash-2'
            size={30}
            color={curTheme.iconPrimary}
            />
        </View>
        </Pressable>
        <Pressable onPress={themeToggle}>
        <View style={[styles.iconContainer]}>
            <Feather
            name={themeIcon}
            size={30}
            color={curTheme.iconPrimary}
            />
        </View>
        </Pressable>
    </View>
    </View>
  )
}

export default SubHeader

