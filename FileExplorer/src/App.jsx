import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import json from "../data.json";
import File from "./components/File";

function App() {
  const [data, setData] = useState(json);

  return (
    <>
      <h1> File Explorer</h1>
      <File data={data} />
    </>
  );
}

export default App;
