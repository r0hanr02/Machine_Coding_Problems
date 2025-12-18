import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([
    {
      id: 1,
      value: "Hello",
    },
  ]);

  const submit = (e) => {
    if (e.key === "Enter") {
      if (input.trim() === "") return;
      const newItem = { id: Date.now(), value: input };
      setInputList((prev) => [...prev, newItem]);
      setInput("");
    }
  };
  const deleteItem = (id) => {
    const updatedList = inputList.filter((i) => i.id !== id);
    setInputList(updatedList);
  };

  return (
    <div>
      <h3>Chip Input</h3>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={submit}
        value={input}
      />

      <div>
        {inputList.map((i, index) => (
          <li key={i.id}>
            <span>{i.value}</span>
            <button onClick={() => deleteItem(i.id)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
