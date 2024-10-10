import { useState } from "react";
import {
  BiSupport,
  FaHeart,
  IoAirplaneSharp,
  HiOutlineTicket,
} from "../../../utils/icons/icons";
import { useNavigate } from "react-router-dom";

import "./aside.css";

const Aside = ({ toggleMenuOpen, toggleMenuClose, isMenuOpen }) => {
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
        onClick={() => focusOption("searchFlights")}
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
        <a>Vuelos</a>
      </div>
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
      <div
        onClick={() => focusOption("myFlights")}
        className={
          activeIndex == "myFlights"
            ? "container_button_my_flights_focus"
            : "container_button_my_flights"
        }
      >
        <HiOutlineTicket className="icon" style={{ fontSize: "32px" }} />
        <a>Mis viajes</a>
      </div>
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
    </div>
  );
};
export default Aside;
