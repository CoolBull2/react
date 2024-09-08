import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
