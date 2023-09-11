import React from "react";
import useStore from "../store/store";

function AddTodo() {
  const { newTodo, setNewTodo, addTodo } = useStore();
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
        onClick={() => addTodo(newTodo)}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
