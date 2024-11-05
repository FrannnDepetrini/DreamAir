import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/authContext/authContext";
import { jwtDecode } from "jwt-decode";

const Protected = ({ children, showModal, requiredRole }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.token) {
      showModal();
      return navigate(-1);
    }

    const decodedToken = jwtDecode(user.token);
    console.log(decodedToken);
    const userRole = decodedToken.role;
    console.log(userRole);
    if (userRole !== requiredRole) {
      return navigate("/unauthorized");
    }
  }, []);
  return children;
};

export default Protected;
