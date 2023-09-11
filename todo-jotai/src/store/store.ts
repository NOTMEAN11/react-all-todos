import { atom } from "jotai";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function addTodo(todos: Todo[], newTodo: Todo) {
  return [...todos, newTodo];
}

function removeTodo(todos: Todo[], id: number) {
  return todos.filter((todo) => todo.id !== id);
}

function toggleTodo(todos: Todo[], id: number) {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

function updateTodo(todos: Todo[], id: number, text: string) {
  return todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
}

const todoAtom = atom<Todo[]>([]);
const newTodoAtom = atom<string>("");

const toggleTodoAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(todoAtom, toggleTodo(get(todoAtom), id));
  }
);

const addTodoAtom = atom(
  () => "",
  (get, set) => {
    const newTodo = get(newTodoAtom);
    set(
      todoAtom,
      addTodo(get(todoAtom), {
        id: Date.now(),
        text: newTodo,
        completed: false,
      })
    );
    set(newTodoAtom, "");
  }
);

const removeTodoAtom = atom(
  () => "",
  (get, set, id: number) => {
    set(todoAtom, removeTodo(get(todoAtom), id));
  }
);

const updateTodoAtom = atom(
  () => "",
  (get, set, { id, text }: { id: number; text: string }) => {
    set(todoAtom, updateTodo(get(todoAtom), id, text));
  }
);

const load = atom(null, async (_get, set) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/NOTMEAN11/react-all-todos/master/data/todos.json"
  );
  const todos = await res.json();
  set(todoAtom, todos);
});

export {
  todoAtom,
  newTodoAtom,
  toggleTodoAtom,
  addTodoAtom,
  removeTodoAtom,
  updateTodoAtom,
  load,
};
