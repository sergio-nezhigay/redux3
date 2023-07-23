import TodoListItem from "../TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onClickHandle }) => {
  const renderedListItems = todos.map(({ id, taskText, completed }) => (
    <TodoListItem
      key={id}
      id={id}
      taskText={taskText}
      completed={completed}
      onClickHandle={onClickHandle}
    />
  ));

  return (
    <>
      {todos.length > 0 && <ul className="todo-list">{renderedListItems}</ul>}
    </>
  );
};

export default TodoList;
