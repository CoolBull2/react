import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white  ">
          <h1 className="text-2xl my-8 font-bold text-center">
            Manage Your ToDos
          </h1>
          <Form />
          <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <List todo={todo} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
