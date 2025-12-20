import React, { useState } from "react";
import { useUserContext } from "../context/userContext";
import { toast } from "react-toastify";

const Interests = ({ setTab }) => {
  const [value, setValue] = useState("");
  const { user, setUser } = useUserContext();

  const addInterest = () => {
    if (value.trim() == "") return;
    setUser({
      ...user,
      interests: [...user.interests, { id: Date.now(), interest: value }],
    });
    setValue("");
  };

  console.log(user);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addInterest();
    }
  };
  const handlePrev = () => {
    setTab("profile");
  };
  const handleNext = () => {
    if (user.interests.length < 3) {
      toast("Add atleast 4 Hobby or Interests");
      return;
    }
    setTab("settings");
  };

  const deleteInterests = (id) => {
    setUser((prev) => ({
      ...prev,
      interests: prev.interests.filter((i) => i.id !== id),
    }));
  };
  return (
    <div className="interests-container">
      <h2>Interests</h2>
      <div>
        <label htmlFor="interests"></label>
        <input
          type="text"
          value={value}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button onClick={(e) => addInterest(e)}>Add</button>
      <ul>
        {user.interests.length > 0 ? (
          user.interests.map((i) => (
            <li key={i.id}>
              {i.interest} <span onClick={() => deleteInterests(i.id)}>❌</span>
            </li>
          ))
        ) : (
          <li>No Interest Found</li>
        )}
      </ul>

      <div className="nav-button">
        <button onClick={() => handlePrev()}>Previous Page</button>
        <button onClick={() => handleNext()}>Next Page</button>
      </div>
    </div>
  );
};

export default Interests;
