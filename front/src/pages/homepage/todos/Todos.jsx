import axios from "axios";

import { useState, useEffect } from "react";

import EditTodo from "./edit todo/EditTodo";

import "./Todos.css";

export default function Todos() {
  const [todos, setTodos] = useState(undefined);
  const [newTodo, setNewTodo] = useState("");
  const [todoToEdit, setTodoToEdit] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios
      .get("http://localhost:9000/todo")
      .then((res) => setTodos(res.data.todos))
      .catch((err) => console.log(err));
  };

  const addTodo = () => {
    const cleanTodo = newTodo.replace(/["-']/g, "").trim();
    axios
      .post("http://localhost:9000/todo", {
        todo: cleanTodo,
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

  const editTodo = (todo, newTodo) => {
    console.log("Todo to edit : " + todo);
    axios
      .put("http://localhost:9000/todo", { todo: todo, newTodo: newTodo })
      .then((res) => {
        console.log(res);
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {todoToEdit !== null && (
        <EditTodo
          editTodo={editTodo}
          todoToEdit={todoToEdit}
          setTodoToEdit={setTodoToEdit}
        />
      )}
      <div>
        <h1>Todos :</h1>
        {todos && todos.length ? (
          <ul>
            {todos.map((todo, index) => (
              <div key={index} className="todo-item">
                <div>{todo.name}</div>
                <button onClick={() => removeTodo(todo.name)}>REMOVE</button>
                <button onClick={() => setTodoToEdit(todo.name)}>EDIT</button>
              </div>
            ))}
          </ul>
        ) : (
          <p>Nothing to do...</p>
        )}
        <input
          type="text"
          value={newTodo}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button onClick={() => addTodo()}>ADD TODO</button>
      </div>
    </>
  );
}
