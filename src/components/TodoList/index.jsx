import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  removeTodo,
} from "../../store/reducers/todoSlice";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div className={styles.todoList}>
      <form className={styles.inputContainer} onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <button>Add</button>
      </form>

      <ul>
        {todos.todos.length
          ? todos.todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={() => dispatch(toggleTodo(todo.id))}
                removeTodo={() => dispatch(removeTodo(todo.id))}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default TodoList;
