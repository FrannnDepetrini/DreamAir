import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const initialState = {
  email: localStorage.getItem("DreamAir-email") || "",
  token: localStorage.getItem("DreamAir-token") || "",
  role: localStorage.getItem("DreamAir-role") || "",
};
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const handleLogin = (email, token) => {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    const role = decodedToken.role;
    setUser({
      email,
      token,
      role,
    });
    localStorage.setItem("DreamAir-token", token);
    localStorage.setItem("DreamAir-email", email);
    localStorage.setItem("DreamAir-role", role);
    console.log(user);
    switch (role) {
      case "airline":
        navigate("/createFlight");
        break;
      case "admin":
        navigate("/createAdmin");
        break;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("DreamAir-token");
    localStorage.removeItem("DreamAir-email");
    localStorage.removeItem("DreamAir-role");
    setUser({ email: "", toke: "", role: "" });
    console.log(user);
  };
  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
