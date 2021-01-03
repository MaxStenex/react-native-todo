import React from "react";
import { ScrollView } from "react-native";
import { Todo } from "./";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ScrollView>
      {todos.map((todo) => (
        <Todo
          deleteTodo={deleteTodo}
          text={todo.text}
          isDone={todo.isDone}
          id={todo.id}
          key={todo.id}
          toggleTodo={toggleTodo}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;
