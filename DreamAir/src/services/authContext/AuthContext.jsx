import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialState = {
  email: localStorage.getItem("DreamAir-email") ?? "",
  token: localStorage.getItem("DreamAir-token") ?? "",
};
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const handleLogin = (email, token) => {
    setUser({
      email,
      token,
    });
    localStorage.setItem("DreamAir-token", token);
    localStorage.setItem("DreamAir-email", email);
  };

  const handleLogout = () => {
    localStorage.removeItem("DreamAir-token");
    localStorage.removeItem("DreamAir-email");
    setUser(initialState);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
