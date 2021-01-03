import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Footer = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Pressable
        style={({ pressed }) => [styles.addButton, pressed && styles.addButtonPressed]}
      >
        {({ pressed }) => (
          <Text style={pressed ? styles.addButtonTextPressed : styles.addButtonText}>
            ADD
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  textInput: {
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "purple",
    paddingLeft: 5,
    paddingRight: 10,
    flexGrow: 1,
  },
  addButton: {
    padding: 7,
    height: 50,
    width: 50,
    borderColor: "purple",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    borderRadius: 25,
    marginBottom: 2,
  },
  addButtonText: {
    color: "purple",
  },
  addButtonPressed: {
    backgroundColor: "purple",
  },
  addButtonTextPressed: {
    color: "#fff",
  },
});
