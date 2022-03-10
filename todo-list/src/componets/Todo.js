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

  function onDone(item) {
    let update = items.map(i => {
      if(i.id === item.id) {
        i.done = !i.done
      }
      return i
    })
    setItems(update)
    
  }

  return (
    <div>
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <List onDone={onDone} itemForDelete={itemForDelete} items={items}></List>
    </div>
  );
}

export default Todo;
