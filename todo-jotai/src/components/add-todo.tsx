import React from "react";
import { addTodoAtom, newTodoAtom } from "../store/store";
import { useAtom } from "jotai";

function AddTodo() {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  return (
    <div className="mt-4 flex items-center space-x-2">
      <input
        type="text"
        className="input input-primary input-bordered input-sm w-full bg-white"
        placeholder="Add Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn btn-primary btn-sm" onClick={() => addTodo()}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
