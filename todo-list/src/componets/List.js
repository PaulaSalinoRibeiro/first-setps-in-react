import React from "react";

function DoneImg(props) {
  if(props.done) {
    return (<img src="./assets/done.png" alt="done" style={{width: 25}} />)
  } else {
    return (<img src="./assets/undone.png" alt="undone" style={{width: 25}} />)
  }
}

function List(props) {


  return (
    <ul>
      {props.items.map((item) => (
        <li 
          key={item.id}
          className={item.done ? 'done' : ''}
        >
          {item.text}
          <button type="button" onClick={() => props.onDone(item)}>
            <DoneImg done={item.done}/>
          </button>
          <button type="button" onClick={() => props.itemForDelete(item)}>
            <img
              src="./assets/trash.png"
              alt="delete"
              style={{width: 25}}
            ></img>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
