import React from "react";
import { Todo } from "../store/store";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
};

function AddTodo({ todos, setTodos, newTodo, setNewTodo }: Props) {
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
        className="btn btn-primary btn-sm "
        onClick={() => {
          setTodos([
            ...todos,
            { id: todos.length + 1, text: newTodo, completed: false },
          ]);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
