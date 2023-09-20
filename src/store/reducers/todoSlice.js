import { createSlice } from "@reduxjs/toolkit";
import { updateLocalStorage } from "../../utils/updateLocalStorage";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        comments: [],
      };

      state.todos = [...state.todos, newTodo];
      updateLocalStorage(state.todos);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        updateLocalStorage(state.todos);
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      updateLocalStorage(state.todos);
    },
    addComment: (state, action) => {
      const { todoId, text, color } = action.payload;

      const todo = state.todos.find((t) => t.id === todoId);
      if (todo) {
        todo.comments.push({ text, color });
        updateLocalStorage(state.todos);
      }
    },
    removeComment: (state, action) => {
      const { todoId, commentIndex } = action.payload;

      const todo = state.todos.find((t) => t.id === todoId);
      if (todo) {
        todo.comments.splice(commentIndex, 1);
        updateLocalStorage(state.todos);
      }
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, addComment, removeComment } =
  todoSlice.actions;

export default todoSlice.reducer;
