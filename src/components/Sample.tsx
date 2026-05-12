import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import React, { useState } from "react";

const Sample = ({ title, content }) => {

  const [isTitleEditing, setIsTitleEditing] =
    useState(false);

  const [isContentEditing, setIsContentEditing] =
    useState(false);

  const [curTitle, setTitle] =
    useState(title);

  const [curContent, setContent] =
    useState(content);

  return (
    <View style={styles.container}>

      {/* TITLE */}

      {
        isTitleEditing ? (

          <TextInput
            value={curTitle}
            onChangeText={setTitle}
            onBlur={() => setIsTitleEditing(false)}
            autoFocus
            style={styles.titleInput}
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

      {/* CONTENT */}

      {
        isContentEditing ? (

          <TextInput
            value={curContent}
            onChangeText={setContent}
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
  );
};

export default Sample;

const styles = StyleSheet.create({

  container: {
    padding: 20,
    gap: 16,
  },

  title: {
    fontSize: 28,
    fontFamily: "Manrope_700Bold",
    color: "#111111",
  },

  titleInput: {
    fontSize: 28,
    fontFamily: "Manrope_700Bold",
    color: "#111111",

    borderBottomWidth: 2,
    borderColor: "#8B6CFF",

    paddingBottom: 6,
  },

  content: {
    fontSize: 16,
    lineHeight: 26,

    color: "#555555",

    fontFamily: "Manrope_400Regular",
  },

  contentInput: {
    fontSize: 16,
    lineHeight: 26,

    color: "#555555",

    fontFamily: "Manrope_400Regular",

    minHeight: 150,

    textAlignVertical: "top",

    borderWidth: 1,
    borderColor: "#D8D2F0",

    borderRadius: 18,

    padding: 16,
  },

});