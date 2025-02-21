import "./header.css";
import { FaUser, IoMenu } from "../../../utils/icons/icons";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../services/themeContext/ThemeContext";
import { useContext } from "react";

const Header = ({ user, toggleMenu, showModal, handleLogOut, theme }) => {
  const navigate = useNavigate();
  const lightLogo =
    "https://github.com/FrannnDepetrini/DreamAir/blob/main/DreamAir/src/utils/images/LogoDreamAirPH.png?raw=true";
  const darkLogo =
    "https://github.com/FrannnDepetrini/DreamAir/blob/main/DreamAir/src/utils/images/LogoDreamAirPH5png.png?raw=true";
  const handleChangeTheme = () => {
    toggleTheme();
  };
  const handleNavigate = (path) => {
    navigate(`${path}`);
  };
  const openModal = () => {
    if (user.token) {
      alert("Cerrando Sesion");
      handleLogOut();
    } else {
      showModal();
    }
  };

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div
      id={`${theme == "dark" ? "ch_dark" : ""}`}
      className="container_header"
    >
      <div>
        <div onClick={toggleMenu} className="container_menu">
          <IoMenu className="icon" />
        </div>
        <div className="container_image" onClick={() => handleNavigate("/")}>
          <img
            style={{ width: "200px" }}
            src={theme == "dark" ? darkLogo : lightLogo}
            alt=""
          />
        </div>
      </div>
      <div>
        <button onClick={handleChangeTheme}>Cambiar tema</button>
      </div>
      <div
        onClick={openModal}
        id={`${theme == "dark" ? "cl_dark" : ""}`}
        className="container_login"
      >
        <h3>{!user.token ? "Iniciar sesion" : user.email}</h3>
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Header;
