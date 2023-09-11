import React, { useContext } from "react";

import { addTodo } from "../store/store";
import { useTodoContext } from "../hooks/useTodo";

function AddTodo() {
  const { setNewTodo, addTodo } = useTodoContext();
  return (
    <div className="mt-4 flex items-center space-x-2">
      <input
        type="text"
        className="input input-primary input-bordered input-sm w-full bg-white"
        placeholder="Add Todo"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button className="btn btn-primary btn-sm" onClick={() => addTodo()}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
