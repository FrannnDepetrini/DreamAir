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
  flightDeparture,
  flightArrival = null,
  validationDate = null,
}) => {
  const savedValidation = () => {
    return savedFlights.some((flight) => flight.id === flightDeparture.id);
  };
  const [isSaved, SetIsSaved] = useState(savedValidation());
  const handlerSave = () => {
    if (!isSaved) {
      const newFlight = {
        id: flightDeparture.id,
        airline: flightDeparture.airline,
        departure: flightDeparture.departure,
        arrival: flightDeparture.arrival,
        date: flightDeparture.date,
        timeDeparture: flightDeparture.timeDeparture,
        timeArrival: flightDeparture.timeArrival,
        priceDefault: flightDeparture.priceDefault,
        duration: flightDeparture.duration,
      };
      savedFlights.push(newFlight);
      localStorage.setItem("FlightSaved", JSON.stringify(savedFlights));
      SetIsSaved(true);
    } else {
      if (savedFlights.length > 0) {
        savedFlights = savedFlights.filter(
          (flight) => flight.id !== flightDeparture.id
        );

        localStorage.setItem("FlightSaved", JSON.stringify(savedFlights));
        SetIsSaved(false);
      }
    }
  };

  const handlerBuy = () => {
    if (!user.token) {
      showModal();
    } else {
      handlerNavigateBuy(flightDeparture);
    }
  };
  return flightArrival == null ? (
    <div className="container_main">
      <div className="container_flight">
        <div className="nav_flight">
          <h5> {flightDeparture.airline} </h5>
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
                {flightDeparture.timeDeparture} / {flightDeparture.timeArrival}
              </h5>
              <h5>
                {flightDeparture.departure} - {flightDeparture.arrival}
              </h5>
            </div>
          </div>
          <h4>{flightDeparture.duration}</h4>
        </div>
      </div>
      <div className="container_price">
        <h2>${flightDeparture.priceDefault}</h2>
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
          <h5> {flightDeparture.airline} </h5>
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
                {flightDeparture.timeDeparture} / {flightDeparture.timeArrival}
              </h5>
              <h5>
                {flightDeparture.departure} - {flightDeparture.arrival}
              </h5>
            </div>
          </div>
          <h4>{flightDeparture.duration}</h4>
        </div>
        <div className="body_flight">
          <div className="body_flight_info">
            <IoAirplaneSharp
              style={{ fontSize: "25px", rotate: "135deg" }}
            ></IoAirplaneSharp>
            <div className="info_flight">
              <h5>
                {flightArrival.timeDeparture} / {flightArrival.timeArrival}
              </h5>
              <h5>
                {flightArrival.departure} - {flightArrival.arrival}
              </h5>
            </div>
          </div>
          <h4>{flightArrival.duration}</h4>
        </div>
      </div>
      <div className="container_price">
        <h2>
          $
          {parseInt(flightDeparture.priceDefault) +
            parseInt(flightArrival.priceDefault)}
        </h2>

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
