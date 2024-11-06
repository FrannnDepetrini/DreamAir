import { useState } from "react";
import {
  BiSupport,
  FaHeart,
  IoAirplaneSharp,
  HiOutlineTicket,
} from "../../../utils/icons/icons";
import { useNavigate } from "react-router-dom";

import "./aside.css";

const Aside = ({ toggleMenuOpen, toggleMenuClose, isMenuOpen, userRole }) => {
  const [activeIndex, setActiveIndex] = useState("searchFlights");
  const navigate = useNavigate();
  const focusOption = (currentOpt) => {
    setActiveIndex(currentOpt);
    handleNavigate(currentOpt);
  };

  const handleNavigate = (currentOpt) => {
    navigate(`/${currentOpt}`);
  };

  return (
    <div
      onMouseEnter={toggleMenuOpen}
      onMouseLeave={toggleMenuClose}
      className={`container_aside ${isMenuOpen ? "container_aside_open" : ""}`}
    >
      <div
        onClick={() => {
          userRole == "client" || userRole == ""
            ? focusOption("searchFlights")
            : userRole == "airline"
            ? focusOption("createFlight")
            : focusOption("createAdmin");
        }}
        className={
          activeIndex == "searchFlights"
            ? "container_button_flights_focus"
            : "container_button_flights"
        }
      >
        <IoAirplaneSharp
          className="icon"
          style={{ fontSize: "32px", rotate: "315deg" }}
        />
        <a>
          {userRole == "client" || userRole == ""
            ? "Vuelos"
            : userRole == "airline"
            ? "Crear vuelos"
            : "Crea usuarios"}
        </a>
      </div>
      {(userRole == "" || userRole == "client") && (
        <>
          <div
            onClick={() => focusOption("favs")}
            className={
              activeIndex == "favs"
                ? "container_button_favs_focus"
                : "container_button_favs"
            }
          >
            <FaHeart className="icon" style={{ fontSize: "32px" }} />
            <a>Favoritos</a>
          </div>
        </>
      )}

      <div
        onClick={() => {
          userRole == "client" || userRole == ""
            ? focusOption("myFlights")
            : userRole == "airline"
            ? focusOption("tableAirline")
            : focusOption("tableAdmin");
        }}
        className={
          activeIndex == "myFlights"
            ? "container_button_my_flights_focus"
            : "container_button_my_flights"
        }
      >
        <HiOutlineTicket className="icon" style={{ fontSize: "32px" }} />
        <a>
          {userRole == "client" || userRole == ""
            ? "Mis viajes"
            : userRole == "airline"
            ? "Vuelos creados"
            : "Usuarios"}
        </a>
      </div>

      {(userRole == "" || userRole == "client") && (
        <>
          <div
            onClick={() => focusOption("support")}
            className={
              activeIndex == "support"
                ? "container_button_support_focus"
                : "container_button_support"
            }
          >
            <BiSupport className="icon" style={{ fontSize: "32px" }} />
            <a>Soporte</a>
          </div>
        </>
      )}
    </div>
  );
};
export default Aside;
