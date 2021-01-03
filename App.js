import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Header, TodoList, Footer } from "./src/components";

const storeTodos = async (todos) => {
  try {
    const jsonTodos = JSON.stringify(todos);
    await AsyncStorage.setItem("todos", jsonTodos);
  } catch (e) {
    console.log(e);
  }
};

const App = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [allTodos, setAllTodos] = useState([]);
  const [visibleTodos, setVisibleTodos] = useState(allTodos);

  const deleteTodo = (todoId) => {
    setAllTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  };
  const addTodo = (todoText) => {
    setAllTodos((todos) => {
      const newTodo = { text: todoText, isDone: false, id: uuidv4() };
      return [...todos, newTodo];
    });
  };
  const toggleTodo = (todoId) => {
    setAllTodos((todos) =>
      todos.map((todo) => (todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo))
    );
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const value = await AsyncStorage.getItem("todos");
        if (value !== null) {
          const todos = JSON.parse(value);
          setAllTodos(todos);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getTodos();
  }, []);

  useEffect(() => {
    setVisibleTodos(() => {
      if (currentFilter === "All") return allTodos;
      if (currentFilter === "Done") return allTodos.filter((todo) => todo.isDone);
      if (currentFilter === "In process") return allTodos.filter((todo) => !todo.isDone);
    });
    storeTodos(allTodos);
  }, [allTodos, currentFilter]);

  return (
    <View style={styles.container}>
      <View>
        <StatusBar backgroundColor="#9B70C8" />
        <Header currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
      </View>
      <TodoList todos={visibleTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <Footer addTodo={addTodo} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
});
