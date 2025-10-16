import React from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const bars = [1, 5, 10, 20, 29, 50, 70, 100];
  return (
    <div>
      <h2>Progress Bar</h2>
      {bars.map((each, id) => (
        <ProgressBar key={each.id} progress={each} />
      ))}
    </div>
  );
};

export default App;
