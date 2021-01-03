import React from "react";
import { ScrollView } from "react-native";
import { Todo } from "./";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  return (
    <ScrollView>
      <Todo text="12312312" isDone={false} id={uuidv4()} />
      <Todo text="12312312" isDone={false} id={uuidv4()} />
      <Todo text="12312312" isDone={false} id={uuidv4()} />
      <Todo text="12312312" isDone={true} id={uuidv4()} />
      <Todo text="12312312" isDone={true} id={uuidv4()} />
    </ScrollView>
  );
};

export default TodoList;
