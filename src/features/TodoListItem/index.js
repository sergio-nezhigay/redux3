import React from "react";

import "./TodoListItem.css";

const TodoListItem = ({ id, taskText, completed, onClickHandle }) => {
  const handleVote = (id) => {
    onClickHandle(id, completed);
  };

  return (
    <li onClick={() => handleVote(id)} className={completed ? "doneTask" : ""}>
      <p>{taskText}</p>
    </li>
  );
};

export default TodoListItem;
