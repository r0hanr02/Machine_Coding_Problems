import React from "react";
import { useUserContext } from "../context/userContext";
import "./Modal.css";

const Modal = ({ isModelOpen, setIsModelOpen }) => {
  const { user } = useUserContext();

  if (!isModelOpen) return null;
  const handleReset = () => {
    setIsModelOpen(false);
    window.location.reload();
  };

  return (
    <div className="modal-overlay" onClick={() => setIsModelOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h2>User Preview</h2>
        </header>

        <section className="modal-section">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </section>

        <section className="modal-section">
          <h4>Hobbies</h4>
          <ul className="hobby-list">
            {user.interests.map((item) => (
              <li key={item.id}>{item.interest}</li>
            ))}
          </ul>
        </section>

        <section className="modal-section">
          <h4>Settings</h4>
          <p>Theme: {user.settings.theme}</p>
          <p>
            Notifications:{" "}
            {user.settings.notifications ? "Enabled" : "Disabled"}
          </p>
        </section>

        <footer className="modal-footer">
          <button className="close-btn" onClick={() => handleReset()}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
