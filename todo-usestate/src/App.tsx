import { useState } from "react";
import AddTodo from "./components/add-todo";
import Todo from "./components/todo";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  async function loadTodo() {
    const res = await fetch(
      "https://raw.githubusercontent.com/NOTMEAN11/react-all-todos/master/data/todos.json"
    );
    const data = await res.json();
    setTodos(data);
  }

  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-center min-h-screen h-full flex-col">
        <div className="card p-4 w-[600px] shadow-xl bg-white">
          <h1 className="text-2xl font-bold text-primary ">📝 To-Do List </h1>
          <AddTodo
            todos={todos}
            setTodos={setTodos}
            newTodo={todoText}
            setNewTodo={setTodoText}
          />
          <Todo
            todos={todos}
            setTodos={setTodos}
            newTodo={todoText}
            setNewTodo={setTodoText}
          />
        </div>
        <div>
          <button className="w-[600px] btn btn-primary my-4" onClick={loadTodo}>
            Load Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
