// import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
// import { IoAirplaneSharp } from "@react-icons/all-files/io5/IoAirplaneSharp";

import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  IoAirplaneSharp,
} from "../../../utils/icons/icons";
import "./cardFlight.css";
let savedFlights = JSON.parse(localStorage.getItem("FlightSaved")) || [];
const CardFlight = ({
  user,
  showModal,
  handlerNavigateBuy,
  flight,
  validationDate = true,
}) => {
  const savedValidation = () => {
    return savedFlights.some((f) => f.id === flight.id);
  };
  const [isSaved, SetIsSaved] = useState(savedValidation());
  const handlerSave = () => {
    if (!isSaved) {
      const newFlight = {
        id: flight.id,
        airline: flight.airline,
        departure: flight.departure,
        arrival: flight.arrival,
        date: flight.dateGo,
        timeDepartureGo: flight.timeDepartureGo,
        timeArrivalGo: flight.timeArrivalGo,
        timeDepartureBack: flight.timeDepartureBack && null,
        timeArrivalBack: flight.timeArrivalBack && null,
        priceDefault: flight.priceDefault,
        duration: flight.duration,
      };
      savedFlights.push(newFlight);
      localStorage.setItem("FlightSaved", JSON.stringify(savedFlights));
      SetIsSaved(true);
    } else {
      if (savedFlights.length > 0) {
        savedFlights = savedFlights.filter((flight) => flight.id !== flight.id);

        localStorage.setItem("FlightSaved", JSON.stringify(savedFlights));
        SetIsSaved(false);
      }
    }
  };

  const handlerBuy = () => {
    if (!user.token) {
      showModal();
    } else {
      handlerNavigateBuy(flight);
    }
  };
  return flight.travel == "Ida" ? (
    <div className="container_main">
      <div className="container_flight">
        <div className="nav_flight">
          <h5> {flight.airline} </h5>
          <div onClick={handlerSave} className="button_save">
            {!isSaved ? (
              <>
                <FaRegHeart /> <h5>Guardar</h5>
              </>
            ) : (
              <>
                <FaHeart className="iconSaved" /> <h5>Guardado</h5>
              </>
            )}
          </div>
        </div>
        <div className="body_flight">
          <div className="body_flight_info">
            <IoAirplaneSharp
              style={{ fontSize: "25px", rotate: "315deg" }}
            ></IoAirplaneSharp>
            <div className="info_flight">
              <h5>
                {flight.timeDepartureGo} /{flight.timeArrivalGo}
              </h5>
              <h5>
                {flight.departure} - {flight.arrival}
              </h5>
            </div>
          </div>
          <h4>{flight.duration}</h4>
        </div>
      </div>
      <div className="container_price">
        <h2>${flight.priceDefault}</h2>
        <button
          onClick={handlerBuy}
          disabled={!validationDate}
          className={validationDate ? "button-buy" : "button-disabled"}
        >
          {validationDate ? "Comprar" : "Expirado"}
        </button>
      </div>
    </div>
  ) : (
    <div className="container_main">
      <div className="container_flight">
        <div className="nav_flight">
          <h5> {flight.airline} </h5>
          <div onClick={handlerSave} className="button_save">
            {!isSaved ? (
              <>
                <FaRegHeart /> <h5>Guardar</h5>
              </>
            ) : (
              <>
                <FaHeart className="iconSaved" /> <h5>Guardado</h5>
              </>
            )}
          </div>
        </div>
        <div className="body_flight">
          <div className="body_flight_info">
            <IoAirplaneSharp
              style={{ fontSize: "25px", rotate: "315deg" }}
            ></IoAirplaneSharp>
            <div className="info_flight">
              <h5>
                {flight.timeDepartureGo} /{flight.timeArrivalGo}
              </h5>
              <h5>
                {flight.departure} - {flight.arrival}
              </h5>
            </div>
          </div>
          <h4>{flight.duration}</h4>
        </div>
        <div className="body_flight">
          <div className="body_flight_info">
            <IoAirplaneSharp
              style={{ fontSize: "25px", rotate: "135deg" }}
            ></IoAirplaneSharp>
            <div className="info_flight">
              <h5>
                {flight.timeDepartureBack} / {flight.timeArrivalBack}
              </h5>
              <h5>
                {flight.arrival} - {flight.departure}
              </h5>
            </div>
          </div>
          <h4>{flight.duration}</h4>
        </div>
      </div>
      <div className="container_price">
        <h2>${parseInt(flight.priceDefault)}</h2>

        <button
          onClick={handlerBuy}
          disabled={!validationDate}
          className={validationDate ? "button-buy" : "button-disabled"}
        >
          {validationDate ? "Comprar" : "Expirado"}
        </button>
      </div>
    </div>
  );
};

export default CardFlight;
