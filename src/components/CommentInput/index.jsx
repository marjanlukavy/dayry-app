import React, { useState } from "react";
import styles from "./CommentInput.module.css";
import { AiOutlineBgColors } from "react-icons/ai";
const CommentInput = ({ addComment }) => {
  const [commentText, setCommentText] = useState("");
  const [commentColor, setCommentColor] = useState("#000000");

  const handleAddComment = (e) => {
    e.preventDefault();

    if (commentText.trim() !== "") {
      addComment(commentText, commentColor);
      setCommentText("");
    }
  };

  return (
    <form
      className={styles.commentInput}
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleAddComment}
    >
      <input
        type="color"
        id="color-picker"
        value={commentColor}
        onChange={(e) => setCommentColor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter a comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        required
      />

      <button>Add Comment</button>
    </form>
  );
};

export default CommentInput;
