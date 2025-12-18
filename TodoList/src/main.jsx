import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodoProvider from "./context/todoContext.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TodoProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </TodoProvider> */}
  </StrictMode>
);
