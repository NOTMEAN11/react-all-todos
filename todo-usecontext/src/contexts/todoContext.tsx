import { createContext, useState } from "react";
import { Todo } from "../store/store";

type TodoContextType = {
  todos: Todo[];
  newTodo: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
};

const TodoContext = createContext<TodoContextType>({
  todos: [],
  newTodo: "",
  setTodos: () => {},
  setNewTodo: () => {},
});

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  return (
    <TodoContext.Provider value={{ todos, newTodo, setTodos, setNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
