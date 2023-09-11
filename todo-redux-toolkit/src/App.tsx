import AddTodo from "./components/add-todo";
import Todo from "./components/todo";
import { load, useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="container mx-auto ">
      <div className="flex items-center justify-center min-h-screen h-full flex-col">
        <div className="card p-4 w-[600px] shadow-xl bg-white">
          <h1 className="text-2xl font-bold text-primary ">📝 To-Do List </h1>
          <AddTodo />
          <Todo />
        </div>
        <div>
          <button
            className="w-[600px] btn btn-primary my-4"
            onClick={() =>
              dispatch(
                load(
                  "https://raw.githubusercontent.com/NOTMEAN11/react-all-todos/master/data/todos.json"
                )
              )
            }
          >
            Load Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
