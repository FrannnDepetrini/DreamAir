import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/authContext/authContext";

const Protected = ({ children, showModal, requiredRole }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.token) {
      showModal();
      return navigate(-1);
    }

    console.log(user.role);
    if (user.role !== requiredRole) {
      return navigate("/unauthorized");
    }
  }, []);
  return children;
};

export default Protected;
