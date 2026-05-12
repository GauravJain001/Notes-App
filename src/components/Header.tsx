import { StyleSheet, Switch, Text, View, useWindowDimensions } from 'react-native'

import React, { useState } from 'react'
import { COLORS } from '@/constants/theme';

const Header = ({theme,setTheme,themeToggle}) => {

    const dimensions = useWindowDimensions()
    const dynamicFontSize = 30 * dimensions.fontScale; 
    const width = dimensions.width
    const curTheme = COLORS[theme]


    const styles = StyleSheet.create({
    "container":{
        width:width,
        padding:"3%",
        // backgroundColor:'red',
        marginBottom:width * 0.03,


    },
    "innerContainer":{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    "heading":{
        "fontFamily":"Manrope_700Bold",
        fontSize:dynamicFontSize,
        color:curTheme.text
    }
})
    
    

  return (
    <View style={[styles.container]}>
        <View style={[styles.innerContainer]}>
            <Text style={[styles.heading,]}>My Notes</Text>
            <Switch
            value={theme === "dark"}
            onValueChange={themeToggle}
            trackColor={{
                false: "#D8D2F0",
                true: "#8B6CFF",
            }}
            thumbColor={
                theme === "dark"
                ? "#FFFFFF"
                : "#FFFFFF"
            }
            ios_backgroundColor="#D8D2F0"
            />
            
        </View>

    </View>
  )
}

export default Header



