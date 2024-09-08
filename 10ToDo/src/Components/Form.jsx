import React, { useState } from "react";
import { useTodo } from "../context";

function Form() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onClick={add} className="flex mb-4">
      <input
        type="text"
        value={todo}
        onChange={(e) =>setTodo(e.target.value)}
        placeholder="Write Todo.."
        className="flex border-black/10 px-3 py-2 bg-white/20 h-10 w-full rounded-l-lg"
      />
      <button
        type="submit"
        className="flex bg-green-500 rounded-r-lg h-10 px-3 py-2 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
