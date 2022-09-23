import { useState, useEffect } from "react";

import "./Todos.css";

const axios = require("axios").default;

export default function Todos() {
  const [todos, setTodos] = useState(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:9000/todo")
      .then((res) => setTodos(res.data.todos))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

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
    </div>
  );
}
