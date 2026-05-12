import Card from "@/components/Card";
import Header from "@/components/Header";
import { NOTES } from "@/constants/notes";
import { COLORS } from "@/constants/theme";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, useColorScheme, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import View1 from "@/screens/View1";
import View2 from "@/screens/View2";




export default function Index() {
  const [notes,setNotes] = useState([]) // state for all the notes
  const systemTheme = useColorScheme() // load the system theme
  const [theme,setTheme] = useState(systemTheme) // by default load the app in system theme
  const curTheme = COLORS[theme] // loading dynamic theme
  

  const [curNoteId,setCurNoteId] = useState(null)
  const [newNote,setNewNote] = useState(false)
  const [searchText, setSearchText] = useState("")
  const filteredNotes = !searchText.trim() ? notes
    : notes.filter(note => {
        const query = searchText.toLowerCase()
        return (
          note.title
            .toLowerCase()
            .includes(query)
          ||
          note.content
            .toLowerCase()
            .includes(query)
        )
      })
  // this function toggles the theme from dark to light
  const themeToggle = ()=>{
    if(theme == "light"){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }


  //loading existing notes from sample notes.ts
  useEffect(()=>{
    if(NOTES.length == 0){
      return
    }
    setNotes([...NOTES])
  },[])
  // adding note
  const addNote = (id,title,content,date)=>{
    let alreadyExists = notes.find((item)=>item.id==id)
    if(alreadyExists){
      return
    }
    const obj = {
      id,
      title,
      content,
      date
    }
    setNotes(prev => [obj, ...prev])
  }
  //delete note
  const deleteNote = (id)=>{
    setCurNoteId(null)
    setNotes(prev =>
      prev.filter(item => item.id != id)
    )

  }
  // update note
  const updateNote = ({id,title,content})=>{
    console.log(notes)
    const obj = {
      id,
      title,
      content,
      date:Date.now()
    }
    const filteredNotes = notes.filter( note => note.id != id )
    setNotes([obj,...filteredNotes])
  }
  //search notes
  const searchNote =()=>{}

  
  


  return (
    <SafeAreaView style={[styles.container,{"backgroundColor":curTheme.background}]}>
      <StatusBar style={theme==="dark"?"light":"dark"}/>
      {curNoteId == null?
        <View1
          theme={theme}
          themeToggle={themeToggle}
          setTheme={setTheme}
          notes={notes}
          curNoteId={curNoteId}
          setCurNoteId = {setCurNoteId}
          addNote = {addNote}
          setNotes = {setNotes}
          newNote = {newNote}
          setNewNote = {setNewNote}
          searchText={searchText}
          setSearchText={setSearchText}
          filteredNotes={filteredNotes}
        />
        :
        <View2
        notes={notes}
        theme={theme}
        themeToggle={themeToggle}
        setTheme={setTheme}
        curNoteId={curNoteId}
        setCurNoteId={setCurNoteId}
        updateNote={updateNote}
        deleteNote={deleteNote}
        newNote = {newNote}
        setNewNote = {setNewNote}
        addNote={addNote}
       
        />
    }


     
     


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  
  },
});
