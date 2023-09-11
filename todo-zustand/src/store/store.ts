import { create } from "zustand";

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

type Store = {
  todos: Todo[];
  newTodo: string;
  load: () => void;
  setNewTodo: (newTodo: string) => void;
  addTodo: (newTodo: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
};

const useStore = create<Store>((set) => ({
  todos: [],
  newTodo: "",
  load: async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/NOTMEAN11/react-all-todos/master/data/todos.json"
    );
    const todos = await response.json();
    set({ todos });
  },
  setNewTodo: (newTodo) => set({ newTodo }),
  addTodo: (newTodo) =>
    set((state) => ({
      todos: addTodo(state.todos, {
        id: state.todos.length + 1,
        text: newTodo,
        completed: false,
      }),
    })),
  removeTodo: (id) => set((state) => ({ todos: removeTodo(state.todos, id) })),
  toggleTodo: (id) => set((state) => ({ todos: toggleTodo(state.todos, id) })),
  updateTodo: (id, text) =>
    set((state) => ({ todos: updateTodo(state.todos, id, text) })),
}));

export default useStore;
