import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import { toast } from "react-toastify";

const Profile = ({ setTab }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const { user, setUser } = useUserContext();

  function validate() {
    if (user.name === "" || user.age === "" || user.email === "") {
      toast("Please fill all the fields");
      return false;
    }
    return true;
  }

  function handleNext() {
    if (validate()) {
      setTab("interests");
    }
  }
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>

      <button onClick={() => handleNext()}>Next</button>
    </div>
  );
};

export default Profile;
