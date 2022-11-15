import { useState } from "react";

import "./EditTodo.css";

export default function EditTodo({ editTodo, todoToEdit, setTodoToEdit }) {
  const [updatedTodo, setUpdatedTodo] = useState(todoToEdit);

  const updateTodo = (e) => {
    e.preventDefault();
    editTodo(todoToEdit, updatedTodo);
    setTodoToEdit(null);
  };

  return (
    <>
      <div
        className="edittodo-shadowbackground"
        onClick={() => setTodoToEdit(null)}
      ></div>
      <div className="edittodo">
        <div>
          <h1>EDIT TODO</h1>
          <input
            type="text"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
        </div>
        <div>
          <button onClick={(e) => updateTodo(e)}>UPDATE</button>
          <button onClick={() => setTodoToEdit(null)}>CANCEL</button>
        </div>
      </div>
    </>
  );
}
