import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let task = event.target.value;
    setText(task);
  }

  function addItems(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }
  return (
    <form>
      <input type="text" onChange={handleChange} value={text}></input>
      <button onClick={addItems}>Add</button>
    </form>
  );
}

export default TodoForm;
