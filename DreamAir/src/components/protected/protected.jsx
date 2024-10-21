import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/authContext/authContext";
import jwt from "jsonwebtoken";

const Protected = ({ children, showModal, requiredRole }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (!user?.token) {
    showModal();
    navigate(-1);
    return null;
  }

  try {
    const decodedToken = jwt.decode(user.token);
    const userRole = decodedToken.Role;

    if (userRole === requiredRole) {
      return children;
    } else {
      navigate("/unauthorized");
      return null;
    }
  } catch (error) {
    console.error("Error decoding JWT:", error);
    navigate("/unauthorized");
    return null;
  }
};

export default Protected;
