import React from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

import {
  removeTodo,
  addComment,
  removeComment,
} from "../../store/reducers/todoSlice";
import CommentsList from "../CommentInput/CommentsList";
import CommentInput from "../CommentInput";
import useSelectedState from "../../utils/hooks/useSelectedState";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { selected, toggleSelected } = useSelectedState();

  const handleRemoveComment = (commentIndex) => {
    dispatch(removeComment({ todoId: todo.id, commentIndex }));
  };

  return (
    <li
      className={`${styles.todoItem} ${selected ? styles.selected : ""}`}
      onClick={toggleSelected}
    >
      <div>
        <AiFillDelete
          color="red"
          size={22}
          onClick={() => dispatch(removeTodo(todo.id))}
        />
        <span className={styles.item}>{todo.text}</span>
      </div>
      {!selected ? <p>Comments: {todo.comments.length}</p> : null}
      {selected ? (
        <div>
          <CommentInput
            addComment={(text, color) =>
              dispatch(addComment({ todoId: todo.id, text, color }))
            }
          />
          <CommentsList
            comments={todo.comments}
            handleRemoveComment={handleRemoveComment}
          />
        </div>
      ) : null}
    </li>
  );
};

export default TodoItem;
