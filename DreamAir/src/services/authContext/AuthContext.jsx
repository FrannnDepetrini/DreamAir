import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const initialState = {
  email: "",
  token: "",
};
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const handleLogin = (email, token) => {
    setUser({
      email,
      token,
    });
    localStorage.setItem("DreamAir-token", token);
    localStorage.setItem("DreamAir-email", email);
    console.log(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("DreamAir-token");
    localStorage.removeItem("DreamAir-email");
    setUser(initialState);
    navigate("/");
    console.log(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
