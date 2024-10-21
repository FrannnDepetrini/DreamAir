import "./header.css";
import { FaUser, IoMenu } from "../../../utils/icons/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ user, toggleMenu, showModal, handleLogOut }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/${path}`);
  };
  const openModal = () => {
    if (user.token) {
      alert("Cerrando Sesion");
      handleLogOut();
    } else {
      showModal();
    }
  };
  return (
    <div className="container_header">
      <div>
        <div onClick={toggleMenu} className="container_menu">
          <IoMenu className="icon" />
        </div>
        <div
          className="container_image"
          onClick={() => handleNavigate("searchFlights")}
        >
          <img
            style={{ width: "200px" }}
            src="https://github.com/FrannnDepetrini/DreamAir/blob/main/DreamAir/src/utils/images/LogoDreamAirPH.png?raw=true"
            alt=""
          />
        </div>
      </div>
      <div onClick={openModal} className="container_login">
        <h3>{!user.token ? "Iniciar sesion" : user.email}</h3>
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Header;
