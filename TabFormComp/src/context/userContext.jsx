import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    email: "",
    interests: [
      {
        id: Date.now(),
        interest: "coding",
      },
    ],
    settings: {
      theme: "Dark",
      notifications: true,
    },
  });

  const updateSetting = (newSetting) => {
    setUser((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...newSetting },
    }));
  };
  return (
    <UserContext.Provider value={{ user, setUser, updateSetting }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserContext);
};
