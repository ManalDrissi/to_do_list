import React from "react";
import List from "./components/List.js";
import Todo from "./components/Todo.js";

export default function App() {
  return (
    <div>
      <h1>Add Todo </h1>
      <Todo />
      <List />
    </div>
  );
}
