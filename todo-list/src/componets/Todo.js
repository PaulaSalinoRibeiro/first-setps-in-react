import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Item from './Item';
import List from "./List";

function Todo() {
  const [items, setItems] = useState([]);

  function onAddItem(text) {
    let item = new Item (text)
    setItems([...items, item]);
  }

  function itemForDelete(item) {
    let itemsFilter = items.filter(it => it.id !==item.id)
    setItems(itemsFilter)
  }

  return (
    <div>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List itemForDelete={itemForDelete} items={items}></List>
    </div>
  );
}

export default Todo;
