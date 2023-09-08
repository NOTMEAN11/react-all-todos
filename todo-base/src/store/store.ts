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
