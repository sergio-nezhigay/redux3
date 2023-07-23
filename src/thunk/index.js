import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../features/actions";

const API_URL = "https://64bcee9a2320b36433c74298.mockapi.io/todos";

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const addTodo = (todo) => {
  return (dispatch) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(fetchTodos());
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };
};

export const toggleTodoState = (todoId, completed) => {
  return (dispatch) => {
    const updatedTodo = { completed: !completed };

    fetch(`${API_URL}/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(fetchTodos());
      })
      .catch((error) => {
        console.error("Error toggling todo state:", error);
      });
  };
};
