import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  toDos: [],
};
const ADD = "add";
const DEL = "del";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case DEL:
      return {
        toDos: state.toDos.filter((toDo) => {
          //console.log("Current: ", toDo.id, "Target: ", action.payload);
          return toDo.id !== action.payload;
        }),
      };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); // 해당 state를 대체
  const [newToDo, setNewToDo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo }); //switch문에 데이터를 보내줘야 함
    setNewToDo(""); //input 입력 후 비우기
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Add to do</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newToDo}
          type="text"
          placeholder="Write to do"
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text} </span>
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
