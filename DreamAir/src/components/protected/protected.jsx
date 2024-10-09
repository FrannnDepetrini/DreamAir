import { Navigate } from "react-router-dom";

const Protected = ({ children, showModal }) => {
  const token = localStorage.getItem("dream-air-token");
  if (!token) {
    setTimeout(() => {
      showModal();
    }, 0);
    return <Navigate to="/flights" />;
  }
  return children;
};

export default Protected;
