import { useNavigate } from "react-router-dom";

const Protected = ({ children, showModal }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("dream-air-token");
  if (!token) {
    setTimeout(() => {
      showModal();
    }, 0);
    navigate(-1);
    return null;
  }
  return children;
};

export default Protected;
