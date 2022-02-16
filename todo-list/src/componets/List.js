import React from "react";

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          {item.text}
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
