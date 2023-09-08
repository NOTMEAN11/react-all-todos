import React, { useContext } from "react";
import TodoContext from "../contexts/todoContext";
import { addTodo } from "../store/store";

function AddTodo() {
  const { todos, newTodo, setTodos, setNewTodo } = useContext(TodoContext);
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
      <button
        className="btn btn-primary btn-sm"
        onClick={() =>
          setTodos(
            addTodo(todos, {
              id: todos.length + 1,
              text: newTodo,
              completed: false,
            })
          )
        }
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
