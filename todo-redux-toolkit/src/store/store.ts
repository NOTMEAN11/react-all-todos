import {
  PayloadAction,
  configureStore,
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

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

type State = {
  todos: Todo[];
  newTodo: string;
};

const initialState: State = {
  todos: [],
  newTodo: "",
};

const addtoo = createAction("addTodo");
const setNewTodo = createAction<string>("setNewTodo");
const removetoo = createAction<number>("removeTodo");
const toggletodo = createAction<number>("toggleTodo");
const updatetodo = createAction<{ id: number; text: string }>("updateTodo");

const load = createAsyncThunk("load", async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(load.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    })
    .addCase(setNewTodo, (state, action) => {
      state.newTodo = action.payload;
    })
    .addCase(addtoo, (state) => {
      state.todos = addTodo(state.todos, {
        id: state.todos.length + 1,
        text: state.newTodo,
        completed: false,
      });
      state.newTodo = "";
    })
    .addCase(removetoo, (state, action) => {
      state.todos = removeTodo(state.todos, action.payload);
    })
    .addCase(toggletodo, (state, action) => {
      state.todos = toggleTodo(state.todos, action.payload);
    })
    .addCase(updatetodo, (state, action) => {
      state.todos = updateTodo(state.todos, action.payload.id, state.newTodo);
    });
});

const store = configureStore({ reducer, devTools: true });

const useAppDispatch = () => useDispatch<typeof store.dispatch>();
const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default store;
export {
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
  useAppDispatch,
  useAppSelector,
  load,
  addtoo,
  setNewTodo,
  removetoo,
  toggletodo,
  updatetodo,
};
