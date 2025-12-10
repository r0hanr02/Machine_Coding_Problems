import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [todo, setTodo] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      todo: "This is The First Todo",
      completed: true,
    },
  ]);

  const addTodo = (todo) => {
    if (todo.trim() === "") return;
    setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev]);
    setTodo("");
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((p) => p.id != id));
  };
  const updateTodo = (id, newTodo) => {
    setSelectedId(id);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, todo: newTodo } : t))
    );
    console.log(id, newTodo);
    setSelectedId(null);
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, completed: !p.completed } : p))
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        toggleCompleted,
        setTodo,
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        setNewTodo,
        newTodo,
        selectedId,
        setSelectedId,
        theme,
        setTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};

export default TodoProvider;
