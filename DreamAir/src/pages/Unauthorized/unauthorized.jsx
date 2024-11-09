import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <p>Soñaste muy alto! NO tienes permisos</p>
      <button onClick={handleNavigate}>Ir al menu</button>
    </div>
  );
};

export default Unauthorized;
