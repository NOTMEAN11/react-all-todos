import React from "react";

function AddTodo() {
  return (
    <div className="mt-4 flex items-center space-x-2">
      <input
        type="text"
        className="input input-primary input-bordered input-sm w-full bg-white"
        placeholder="Add Todo"
      />
      <button className="btn btn-primary btn-sm ">Add</button>
    </div>
  );
}

export default AddTodo;
