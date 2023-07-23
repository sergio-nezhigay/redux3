import React from "react";

import "./InputBlock.css";

function InputBlock({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputElement = e.target;

    const newTodo = {
      taskText: inputElement.item.value.trim(),
      completed: false,
    };
    addTodo(newTodo);
    inputElement.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="item" placeholder="Add new task..." />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputBlock;
