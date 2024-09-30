import { useState } from "react";
import {
  BiSupport,
  FaHeart,
  IoAirplaneSharp,
  HiOutlineTicket,
} from "../../utils/icons/icons";

import "../aside/aside.css";

const Aside = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  console.log(activeIndex);
  return (
    <div className="container_aside">
      <div
        onClick={() => setActiveIndex("flights")}
        className={
          activeIndex == "flights"
            ? "container_button_flights_focus"
            : "container_button_flights"
        }
      >
        <IoAirplaneSharp
          className="icon"
          style={{ fontSize: "32px", rotate: "315deg" }}
        />
        <a href="#">Vuelos</a>
      </div>
      <div
        onClick={() => setActiveIndex("favs")}
        className={
          activeIndex == "favs"
            ? "container_button_favs_focus"
            : "container_button_favs"
        }
      >
        <FaHeart className="icon" style={{ fontSize: "32px" }} />
        <a href="#">Favoritos</a>
      </div>
      <div
        onClick={() => setActiveIndex("myFlights")}
        className={
          activeIndex == "myFlights"
            ? "container_button_my_flights_focus"
            : "container_button_my_flights"
        }
      >
        <HiOutlineTicket className="icon" style={{ fontSize: "32px" }} />
        <a href="#">Mis viajes</a>
      </div>
      <div
        onClick={() => setActiveIndex("support")}
        className={
          activeIndex == "support"
            ? "container_button_support_focus"
            : "container_button_support"
        }
      >
        <BiSupport className="icon" style={{ fontSize: "32px" }} />
        <a href="#">Soporte</a>
      </div>
    </div>
  );
};
export default Aside;
