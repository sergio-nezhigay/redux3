import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchTodos, addTodo, toggleTodoState } from "../../thunk";
import InputBlock from "../InputBlock";
import TodoList from "../TodoList";

import "./App.css";

const App = ({
  todos,
  isLoading,
  error,
  fetchTodos,
  addTodo,
  toggleTodoState,
}) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleToggleTodoState = (todoId, completed) => {
    toggleTodoState(todoId, completed);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>ДЗ 29. Redux-thunk</h1>
      <h2>To do List...</h2>
      <TodoList todos={todos} onClickHandle={handleToggleTodoState} />
      <hr />
      <InputBlock addTodo={addTodo} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.data,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, {
  fetchTodos,
  addTodo,
  toggleTodoState,
})(App);
