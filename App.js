import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { Header, TodoList, Footer } from "./src/components";

const App = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [allTodos, setAllTodos] = useState([
    { text: "Погулять с собакой", isDone: false, id: uuidv4() },
    { text: "Помыть посуду", isDone: true, id: uuidv4() },
  ]);
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
    setVisibleTodos(() => {
      if (currentFilter === "All") return allTodos;
      if (currentFilter === "Done") return allTodos.filter((todo) => todo.isDone);
      if (currentFilter === "In process") return allTodos.filter((todo) => !todo.isDone);
    });
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
