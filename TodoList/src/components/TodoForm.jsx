import React from "react";
import { useTodo } from "../context/todoContext";

const TodoForm = () => {
  const { todo, setTodo, addTodo } = useTodo();

  return (
    <div className="todo-container">
      <h2 className="todo-header">Add a New Task</h2>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo-btn" onClick={() => addTodo(todo)}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
