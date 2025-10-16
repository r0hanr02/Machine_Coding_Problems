import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import json from "../data.json";
import File from "./components/File";

function App() {
  const [data, setData] = useState(json);

  const addNoteToList = (parentId) => {
    const name = prompt("Enter Name Here");
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: Date.now(), name: name, isFolder: true, children: [] },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };

  return (
    <>
      <h1> File Explorer</h1>
      <File data={data} addNoteToList={addNoteToList} />
    </>
  );
}

export default App;
