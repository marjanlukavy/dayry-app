import React from "react";
import { AiFillDelete } from "react-icons/ai";
import styles from "./CommentInput.module.css";

const CommentsList = ({ comments, handleRemoveComment }) => {
  return (
    <div className={styles.comments}>
      {comments.length ? <p>All comments:</p> : null}
      <ul>
        {comments.map((comment, index) => (
          <li
            key={index}
            onClick={(e) => e.stopPropagation()}
            style={{ border: "2px solid" + comment.color }}
          >
            <div>{comment.text}</div>
            <AiFillDelete
              color="red"
              size={22}
              onClick={() => handleRemoveComment(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
