import "../header/header.css";
import { FaUser, IoMenu } from "../../utils/icons/icons";

const Header = ({ toggleMenu }) => {
  const handlerLogin = async () => {};
  return (
    <div className="container_header">
      <div onClick={toggleMenu}>
        <div className="container_menu">
          <IoMenu className="icon" />
        </div>
        <div className="container_image">
          <img
            style={{ width: "200px" }}
            src="https://github.com/FrannnDepetrini/DreamAir/blob/main/DreamAir/src/utils/images/LogoDreamAirPH.png?raw=true"
            alt=""
          />
        </div>
      </div>
      <div onClick={handlerLogin} className="container_login">
        <h3>Iniciar sesion</h3>
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Header;
