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

  const removeTodo = (todo) => {
    console.log("Todo to remove : " + todo);
    axios
      .delete("http://localhost:9000/todo", { data: { todo: todo } })
      .then((res) => {
        console.log(res);
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Todos :</h1>
      {todos && todos.length ? (
        <ul>
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <li>{todo.name}</li>
              <button onClick={() => removeTodo(todo.name)}>REMOVE</button>
            </div>
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
