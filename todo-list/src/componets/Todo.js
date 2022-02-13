import React, { useState } from "react";

function Todo(){

  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    let task = event.target.value;
    setText(task);
  }

  function addItems(event) {
    event.preventDefault();
    if(text){
      setItems([...items, text]);
      setText('');
    }

  }

  return (
    <div>
      <form>
        <input type='text' onChange={handleChange} value={text}></input>
        <button onClick={addItems}>Add</button>
      </form>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Todo;
