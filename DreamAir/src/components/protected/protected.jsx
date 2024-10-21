import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/authContext/authContext";
import { jwtDecode } from "jwt-decode";

const Protected = ({ children, showModal, requiredRole }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const checkAuthorization = () => {
      if (!user?.token) {
        showModal();
        navigate(-1);
        return;
      }

      try {
        const decodedToken = jwtDecode(user.token);
        const userRole = decodedToken.Role;

        if (userRole === requiredRole) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          console.log("No estás autorizado");
          navigate("/unauthorized");
        }
      } catch (error) {
        console.error("Error decoding JWT:", error);
        setIsAuthorized(false);
        navigate("/unauthorized");
      }
    };

    checkAuthorization();
  }, [user, navigate, requiredRole, showModal]);

  if (isAuthorized === null) {
    return null;
  }

  return children;
};

export default Protected;
