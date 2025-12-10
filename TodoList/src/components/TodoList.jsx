import React from "react";
import { useTodo } from "../context/todoContext";

const TodoList = () => {
  const {
    todos,
    toggleCompleted,
    deleteTodo,
    updateTodo,
    newTodo,
    setNewTodo,
    selectedId,
    setSelectedId,
  } = useTodo();

  return (
    <div className="todo-container">
      <h2 className="todo-header">Todos</h2>
      <ul className="todo-list">
        {todos.map((t) => (
          <li
            key={t.id}
            className={`todo-item ${t.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />

            {selectedId === t.id ? (
              <input
                className="todo-input"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
            ) : (
              <span className="todo-text">{t.todo}</span>
            )}

            <div className="todo-actions">
              <button
                className="todo-btn"
                onClick={() =>
                  selectedId === t.id
                    ? updateTodo(t.id, newTodo)
                    : (setSelectedId(t.id), setNewTodo(t.todo))
                }
              >
                {selectedId === t.id ? "Save" : "Update"}
              </button>
              <button
                className="todo-btn"
                onClick={() => deleteTodo(t.id)}
                style={{ background: "#ef4444" }} // red delete button
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
