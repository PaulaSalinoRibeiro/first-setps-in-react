import React, { useState } from "react";
import TodoForm from "./TodoForm";
import List from "./List";

function Todo() {
  const [items, setItems] = useState([]);

  function onAddItem(item) {
    setItems([...items, item]);
  }

  return (
    <div>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List items={items}></List>
    </div>
  );
}

export default Todo;
