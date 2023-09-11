import { useAtom } from "jotai";
import {
  removeTodoAtom,
  todoAtom,
  toggleTodoAtom,
  updateTodoAtom,
} from "../store/store";
import React, { useState } from "react";

function Todo() {
  const [isEditing, setIsEditing] = useState(false);
  const [todos] = useAtom(todoAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between my-4">
          <div className="flex items-center space-x-2 w-full">
            <input
              type="checkbox"
              checked={todo.completed}
              className="checkbox checkbox-primary"
              onChange={() => toggleTodo(todo.id)}
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
              value={todo.text}
              className={
                isEditing
                  ? "input input-sm input-bordered input-primary w-full  bg-white"
                  : "hidden"
              }
              onChange={(e) => updateTodo({ ...todo, text: e.target.value })}
            />
          </div>
          <div className="flex space-x-2">
            <button
              className="btn btn-sm btn-primary ml-4"
              onClick={() => {
                if (isEditing) {
                  updateTodo({
                    ...todo,
                    text: todo.text.trim() ? todo.text : "Untitled",
                  });
                }
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => removeTodo(todo.id)}
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
