import { Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View,  KeyboardAvoidingView,
  Platform,
  ScrollView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '@/constants/theme'
import {
  KeyboardAwareScrollView
} from "react-native-keyboard-aware-scroll-view"
import { Button } from '@react-navigation/elements'

const Notes = ({note,updateNote,theme,newNote,setNewNote,addNote,curTitle,setCurTitle,curContent,setCurContent}) => {
    const curTheme = COLORS[theme]
    // const [curTitle,setCurTitle] = useState(!note? "":note.title)
    // const [curContent,setCurContent] = useState(!note? "":note.content)
    const [isTitleEditing,setIsTitleEditing] = useState(false)
    const [isContentEditing,setIsContentEditing] = useState(false)

    const dimensions = useWindowDimensions()
    const width = dimensions.width
    const fontScale = dimensions.fontScale

    const styles = StyleSheet.create({
        "container":{
          padding:width*0.03,
          backgroundColor:curTheme.background,
           minHeight: dimensions.height * 0.7,
             textAlignVertical: "top",
        },
        "title":{
          fontFamily:"Manrope_700Bold",
          fontSize:30 * fontScale,
          paddingBottom:6,
          color:curTheme.text
        },
        "content":{
          fontFamily:"Manrope_500Medium",
          fontSize:18 * fontScale,
          color:curTheme.subText,

        },
        "titleInput":{
          fontFamily:"Manrope_700Bold",
          fontSize:30 * fontScale,
          marginBottom:width * 0.03,
          color:curTheme.text,
          borderBottomWidth: 2,
          borderColor: "#8B6CFF",
          paddingBottom:6,
          
        },
        "contentInput":{
          fontFamily:"Manrope_500Medium",
          fontSize:18 * fontScale,
          color:curTheme.subText,
          textAlignVertical: "top",
         
        }
    })
    // StyleSheet flatten
    const containerStyle =
      StyleSheet.flatten([
        styles.container,
        {
          backgroundColor:
            curTheme.background
        }
      ])
    useEffect(()=>{
          if (newNote) {
        return
      }

      updateNote({id:note.id,title:curTitle,content:curContent})
    },[curTitle,curContent])

  return (
    // <KeyboardAvoidingView
    //  behavior={
    //   Platform.OS === "ios"
    //     ? "padding"
    //     : "height"
    // }
    // >
    
      <KeyboardAwareScrollView
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
    extraScrollHeight={120}
    enableOnAndroid
  >
        <View style={[containerStyle]}>
            {
                    isTitleEditing ||newNote ? (
            
                      <TextInput
                        value={curTitle}
                        onChangeText={setCurTitle}
                        onBlur={() => setIsTitleEditing(false)}
                        autoFocus
                        style={[styles.titleInput]}
                        
                      />
            
                    ) : (
            
                      <Pressable
                        onPress={() => setIsTitleEditing(true)}
                      >
                        <Text style={styles.title}>
                          {curTitle}
                        </Text>
                      </Pressable>
            
                    )
              }
              
            {
                    isContentEditing || newNote ? (

                      <TextInput
                        value={curContent}
                        onChangeText={setCurContent}
                        onBlur={() => setIsContentEditing(false)}
                        autoFocus
                        multiline
                        textAlignVertical="top"
                        style={styles.contentInput}
                      />
            
                    ) : (
            
                      <Pressable
                        onPress={() => setIsContentEditing(true)}
                      >
                        <Text style={styles.content}>
                          {curContent}
                        </Text>
                      </Pressable>
            
                    )
              }
              
            
        </View>
    </KeyboardAwareScrollView>
    
    // </KeyboardAvoidingView>
    
  )
}

export default Notes

