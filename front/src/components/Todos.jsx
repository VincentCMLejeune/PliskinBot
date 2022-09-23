import { useState, useEffect } from "react";

import "./Todos.css";

const axios = require("axios").default;

export default function Todos() {
  const [todos, setTodos] = useState(undefined);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);
  // useEffect(() => {
  //   console.log(newTodo);
  // }, [newTodo]);

  const getTodos = () => {
    axios
      .get("http://localhost:9000/todo")
      .then((res) => setTodos(res.data.todos))
      .catch((err) => console.log(err));
  };

  const addTodo = () => {
    axios
      .post("http://localhost:9000/todo", {
        todo: newTodo,
      })
      .then((res) => {
        console.log(res);
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
    setNewTodo("");
  };

  return (
    <div>
      <h1>Todos :</h1>
      {todos ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.name}</li>
          ))}
        </ul>
      ) : (
        <p>Nothing to do...</p>
      )}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <button onClick={() => addTodo()}>ADD TODO</button>
    </div>
  );
}
