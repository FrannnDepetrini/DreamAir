import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/authContext/authContext";

const Protected = ({ children, showModal }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  if (!user.token) {
    showModal();
    navigate(-1);
    return null;
  }
  return children;
};

export default Protected;
