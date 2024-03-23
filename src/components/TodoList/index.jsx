import React, { useState } from "react";
import "./styles.css";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [uid, setUid] = useState();
  const [update, setUpdate] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTask = (e) => {
    setList([...list, input]);
    setInput("");
  };
  const handleUpdate = (e) => {
    list.splice(uid, 1, input);
    setInput("");
    setUpdate(false);
  };

  const handleDelete = (i) => {
    const filterList = list.filter((e) => e !== list[i]);
    console.log("hello ka", filterList);
    setList(filterList);
  };

  const handleEdit = (i) => {
    const filterList = list.filter((e) => e === list[i]);
    setInput(filterList[0]);
    setUid(i);
    setUpdate(true);
  };
  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={(e) => handleInput(e)} />

          {update ? (
            <button onClick={handleUpdate}>Update</button>
          ) : (
            <button onClick={handleTask}>Add Task</button>
          )}
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                {item}{" "}
                <MdDelete onClick={() => handleDelete(i)} className="delete" />
                <CiEdit onClick={() => handleEdit(i)} className="edit" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
