import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const Todo = ({ text, isDone, id, deleteTodo, toggleTodo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {isDone ? (
          <Fontisto
            style={styles.icon}
            name="checkbox-active"
            size={30}
            color="purple"
            onPress={() => toggleTodo(id)}
          />
        ) : (
          <Fontisto
            style={styles.icon}
            name="checkbox-passive"
            size={30}
            color="black"
            onPress={() => toggleTodo(id)}
          />
        )}
        <Text style={isDone ? styles.doneText : styles.text} textBreakStrategy="balanced">
          {text}
        </Text>
      </View>
      <Pressable
        style={styles.deleteButton}
        style={({ pressed }) => [
          styles.deleteButton,
          {
            backgroundColor: pressed ? "#ff6f6f" : "white",
          },
        ]}
        onPress={() => deleteTodo(id)}
      >
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 12,
    marginHorizontal: 20,
    marginVertical: 7,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  main: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 10,
    flex: 1,
  },
  icon: {
    marginRight: 7,
  },
  text: {
    color: "black",
  },
  doneText: {
    color: "grey",
    textDecorationLine: "line-through",
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
  },
});
