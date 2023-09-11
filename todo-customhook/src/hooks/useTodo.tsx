import { createContext, useCallback, useContext, useState } from "react";
import { Todo, removeTodo, toggleTodo, updateTodo } from "../store/store";

const useTodo = (initial: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(initial);
  const [newTodo, setNewTodo] = useState<string>("");

  return {
    todos,
    setTodos,
    newTodo,
    setNewTodo,
    addTodo: useCallback(() => {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: newTodo, completed: false },
      ]);
      setNewTodo("");
    }, [newTodo]),
    updateTodo: (id: number, text: string) =>
      setTodos((todos) => updateTodo(todos, id, text)),
    deleteTodo: (id: number) => setTodos((todos) => removeTodo(todos, id)),
    toggleTodo: (id: number) => setTodos((todos) => toggleTodo(todos, id)),
    load: async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/NOTMEAN11/react-all-todos/master/data/todos.json"
      );
      const data = await res.json();
      setTodos(data);
    },
  };
};

const TodoContext = createContext<ReturnType<typeof useTodo> | null>(null);

const useTodoContext = () => useContext(TodoContext)!;

function TodoProvider({ children }: { children: React.ReactNode }) {
  const value = useTodo([]);
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export { useTodoContext, TodoProvider };
