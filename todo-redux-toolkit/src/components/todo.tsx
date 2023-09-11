import React, { useState } from "react";
import {
  removetoo,
  setNewTodo,
  toggletodo,
  updatetodo,
  useAppDispatch,
  useAppSelector,
} from "../store/store";

function Todo() {
  const [isEditing, setIsEditing] = useState(false);
  const todos = useAppSelector((state) => state.todos);
  const newTodo = useAppSelector((state) => state.newTodo);
  const dispatch = useAppDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between my-4">
          <div className="flex items-center space-x-2 w-full">
            <input
              type="checkbox"
              checked={todo.completed}
              className="checkbox checkbox-primary"
              onClick={() => dispatch(toggletodo(todo.id))}
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
              onChange={(e) => {
                dispatch(setNewTodo(e.target.value));
              }}
            />
          </div>
          <div className="flex space-x-2">
            <button
              className="btn btn-sm btn-primary ml-4"
              onClick={() => {
                setIsEditing((prev) => !prev);
                if (isEditing) {
                  dispatch(updatetodo({ id: todo.id, text: newTodo }));
                }
              }}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => dispatch(removetoo(todo.id))}
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
