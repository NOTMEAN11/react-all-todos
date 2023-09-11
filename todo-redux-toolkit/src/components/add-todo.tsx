import React from "react";
import {
  addtoo,
  setNewTodo,
  useAppDispatch,
  useAppSelector,
} from "../store/store";

function AddTodo() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const newTodo = useAppSelector((state) => state.newTodo);
  return (
    <div className="mt-4 flex items-center space-x-2">
      <input
        type="text"
        className="input input-primary input-bordered input-sm w-full bg-white"
        placeholder="Add Todo"
        onChange={(e) => {
          dispatch(setNewTodo(e.target.value));
        }}
      />
      <button
        className="btn btn-primary btn-sm"
        onClick={() => dispatch(addtoo())}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
