import { useState } from "react";
import Profile from "./components/Profile";
import Interests from "./components/Interests";
import Settings from "./components/Settings";
import { ToastContainer } from "react-toastify";

function App() {
  const [tab, setTab] = useState("profile");

  return (
    <div className="main">
      <div className="tab-container">
        <button
          className={tab === "profile" ? "active" : ""}
          onClick={() => setTab("profile")}
        >
          Profile
        </button>
        <button
          disabled={tab === "profile"}
          className={tab === "interests" ? "active" : ""}
          onClick={() => setTab("interests")}
        >
          Interests
        </button>
        <button
          disabled={tab === "profile" || tab === "interests"}
          className={tab === "settings" ? "active" : ""}
          onClick={() => setTab("settings")}
        >
          Settings
        </button>
      </div>

      {tab === "profile" && <Profile setTab={setTab} />}
      {tab === "interests" && <Interests setTab={setTab} />}
      {tab === "settings" && <Settings setTab={setTab} />}
      <ToastContainer />
    </div>
  );
}

export default App;
