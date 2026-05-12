import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

const Card = ({id,title,content,date,curTheme}) => {
  const dimensions = useWindowDimensions()
  const width = dimensions.width // update it for tablet devices later



  const styles = StyleSheet.create({
    container:{
      
      marginBottom:width * 0.03,
      padding:20,
      width: width * 0.87,
      borderRadius:30,
      shadowColor: curTheme.shadow,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.12,
      shadowRadius: 14,
      elevation: 8,
     
      borderWidth:2,

      
    },
    title:{
      color:curTheme.text,
      fontWeight:700,
      marginBottom:10,
      fontFamily:"Manrope_600SemiBold"

    },
    content:{
      color:curTheme.subText,
      fontFamily:"Manrope_500Medium"

    },
    innerContainer:{
      flexDirection:"row",
      justifyContent:"space-between"
    }
    
  })
  //stylesheet compose
  const cardStyle = StyleSheet.compose(
  styles.container,
    {
      backgroundColor: curTheme.card,
      borderColor: curTheme.border,
    }
  )

  return (
   
    <View style={[styles.container,cardStyle]}>
      <View style={[styles.innerContainer]}>
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.content]}>{new Date(date).toLocaleDateString()}</Text>
       </View>
          <Text 
          numberOfLines={2}
          style={[styles.content]}>
            {content}
          </Text>
       
    </View>
    
  )
}

export default Card

