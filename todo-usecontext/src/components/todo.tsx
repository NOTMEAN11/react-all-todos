import React, { useContext, useState } from "react";
import TodoContext from "../contexts/todoContext";
import { removeTodo, toggleTodo, updateTodo } from "../store/store";

function Todo() {
  const [isEditing, setIsEditing] = useState(false);
  const { todos, newTodo, setNewTodo, setTodos } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between my-4">
          <div className="flex items-center space-x-2 w-full">
            <input
              type="checkbox"
              checked={todo.completed}
              className="checkbox checkbox-primary"
              onChange={() => {
                setTodos(toggleTodo(todos, todo.id));
              }}
            />
            <div
              className={
                isEditing
                  ? "hidden"
                  : todo.completed
                  ? "block line-through"
                  : "block"
              }
            >
              {todo.text}
            </div>
            <input
              type="text"
              placeholder={todo.text}
              className={
                isEditing
                  ? "input input-sm input-bordered input-primary w-full  bg-white"
                  : "hidden"
              }
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <button
              className="btn btn-sm btn-primary ml-4"
              onClick={() => {
                setIsEditing((prev) => !prev);
                if (isEditing) setTodos(updateTodo(todos, todo.id, newTodo));
              }}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => setTodos(removeTodo(todos, todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
