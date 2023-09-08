import React, { useState } from "react";

function Todo() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      {[{ id: 1, text: "test", completed: true }].map(
        (todo: { id: number; text: string; completed: boolean }) => (
          <div key={todo.id} className="flex items-center justify-between my-4">
            <div className="flex items-center space-x-2 w-full">
              <input
                type="checkbox"
                checked={todo.completed}
                className="checkbox checkbox-primary"
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
              />
            </div>
            <div className="flex space-x-2">
              <button
                className="btn btn-sm btn-primary ml-4"
                onClick={() => setIsEditing((prev) => !prev)}
              >
                {isEditing ? "Save" : "Edit"}
              </button>
              <button className="btn btn-sm btn-secondary">Delete</button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Todo;
