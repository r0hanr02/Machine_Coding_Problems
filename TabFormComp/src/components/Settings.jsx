import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import Modal from "./Modal";
import "./Settings.css";
const Settings = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { user, setUser, updateSetting } = useUserContext();

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <p>Theme: {user.settings.theme}</p>

      <select
        name="theme"
        onChange={(e) => updateSetting({ theme: e.target.value })}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={user.settings.notifications}
          onChange={(e) => updateSetting({ notifications: e.target.checked })}
        />
        Enable Notifications
      </label>

      <button onClick={(e) => setIsModelOpen(!isModelOpen)}>Submit</button>

      {isModelOpen && (
        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} />
      )}
    </div>
  );
};

export default Settings;
