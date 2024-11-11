import "./createFlight.css";
import {
  IoLocationSharp,
  FaCalendarAlt,
  HiOutlineSwitchHorizontal,
  MdAirlineSeatReclineExtra,
  IoLogoUsd,
  FaClock,
} from "../../../utils/icons/icons.js";
import { useState, useRef, useContext } from "react";
import { AuthContext } from "../../../services/authContext/authContext.jsx";
import { jwtDecode } from "jwt-decode";

const CreateFlight = () => {
  const [travel, setTravel] = useState("Idavuelta");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [economic, setEconomic] = useState("");
  const [firstClass, setFirstClass] = useState("");
  const [price, setPrice] = useState("");
  const [dateDepartureGo, setDateDepartureGo] = useState("");
  const [departureTimeGo, setDepartureTimeGo] = useState("");
  const [arrivalTimeGo, setArrivalTimeGo] = useState("");
  const [dateDepartureBack, setDateDepartureBack] = useState("");
  const [departureTimeBack, setDepartureTimeBack] = useState("");
  const [arrivalTimeBack, setArrivalTimeBack] = useState("");

  const { user } = useContext(AuthContext);
  const inputDateGoRef = useRef(null);
  const inputDateBackRef = useRef(null);

  const handleCleaninput = () => {
    setDeparture("");
    setEconomic("");
    setArrival("");
    setFirstClass("");
    setPrice("");
    setDateDepartureGo("");
    setDepartureTimeGo("");
    setArrivalTimeGo("");
    setDateDepartureBack("");
    setDepartureTimeBack("");
    setArrivalTimeBack("");
  };
  const openCalendarGo = () => {
    inputDateGoRef.current.showPicker();
  };

  const openCalendarBack = () => {
    inputDateBackRef.current.showPicker();
  };

  const handleDeparture = (e) => {
    setDeparture(e.target.value);
  };

  const handleArrival = (e) => {
    setArrival(e.target.value);
  };

  const handleEconomic = (e) => {
    setEconomic(e.target.value);
  };

  const handleFirstClass = (e) => {
    setFirstClass(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDepartureTimeGo = (e) => {
    setDepartureTimeGo(e.target.value);
  };

  const handleArrivalTimeGo = (e) => {
    setArrivalTimeGo(e.target.value);
  };
  const handleDepartureTimeBack = (e) => {
    setDepartureTimeBack(e.target.value);
  };

  const handleArrivalTimeBack = (e) => {
    setArrivalTimeBack(e.target.value);
  };

  const handleSelect = (e) => {
    setTravel(e.target.value);
  };

  const handleSend = async () => {
    const formData = {
      travel: travel,
      departure: departure,
      arrival: arrival,
      dateGo: new Date(dateDepartureGo),
      timeDepartureGo: departureTimeGo,
      timeArrivalGo: arrivalTimeGo,
      dateBack: travel == "Ida" ? null : new Date(dateDepartureBack),
      timeDepartureBack: travel == "Ida" ? null : departureTimeBack,
      timeArrivalBack: travel == "Ida" ? null : arrivalTimeBack,
      totalAmountEconomic: economic,
      totalAmountFirstClass: firstClass,
      priceDefault: parseFloat(price),
    };

    fetch("https://localhost:7001/api/Flight/Create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok)
        return (
          response.json(), alert("Vuelo creado con exito"), handleCleaninput()
        );
      else {
        throw new Error("The response has some errors");
      }
    });
  };

  const decodeName = (user) => {
    if (user.token == "" && user.email == "" && user.role == "") {
      return null;
    } else {
      const decodedToken = jwtDecode(user.token);
      const name = decodedToken.name;
      return name;
    }
  };

  return (
    <div className="div_container_create_flight">
      <div className="selected_div_create_flight">
        <h3 className="nameAirline">{decodeName(user)}</h3>
        <select onChange={handleSelect}>
          <option value="Idavuelta">Ida y vuelta</option>
          <option value="Ida">Ida</option>
        </select>
      </div>

      <div className="contenedor">
        <div className="div_search">
          <div className="div_destinoCapacidad">
            <div className="div_destino">
              <IoLocationSharp className="location2_airline" />
              <input
                type="text"
                placeholder="Origen*"
                onChange={handleDeparture}
                value={departure}
              />
              <HiOutlineSwitchHorizontal className="switch_airline" />
              <IoLocationSharp className="location1_airline" />
              <input
                type="text"
                placeholder="Destino*"
                onChange={handleArrival}
                value={arrival}
              />
            </div>

            <div className="div_capacidad">
              <MdAirlineSeatReclineExtra className="location1_airline" />
              <input
                type="number"
                placeholder="Cap. Economicos*"
                onChange={handleEconomic}
                value={economic}
              />
              <MdAirlineSeatReclineExtra className="seat1_airline" />
              <input
                type="number"
                placeholder="Cap. Primera Clase*"
                onChange={handleFirstClass}
                value={firstClass}
              />
              <IoLogoUsd className="usd_airline" />
              <input
                type="text"
                placeholder="Precio base*"
                onChange={handlePrice}
                value={price}
              />
            </div>
          </div>

          <div className="div_dates">
            <FaCalendarAlt
              onClick={openCalendarGo}
              className="calendar1_airline"
            />
            <input
              className="calendarHiddenGoCreateFlight"
              ref={inputDateGoRef}
              type="date"
              onChange={(e) => setDateDepartureGo(e.target.value)}
            />
            <input
              readOnly
              onClick={openCalendarGo}
              type="text"
              value={dateDepartureGo}
              placeholder="Salida*"
            />
            <FaClock className="clock2_airline" />
            <input
              type="time"
              placeholder="Hora salida*"
              onChange={handleDepartureTimeGo}
              value={departureTimeGo}
            />
            <FaClock className="clock3_airline" />
            <input
              type="time"
              placeholder="Hora llegada*"
              onChange={handleArrivalTimeGo}
              value={arrivalTimeGo}
            />
          </div>

          <div
            className="div_container_back"
            style={{ display: travel == "Ida" ? "none" : "flex" }}
          >
            <FaCalendarAlt
              onClick={openCalendarBack}
              className="calendar_airline_back"
            />
            <input
              className="calendarHiddenBackCreateFlight"
              ref={inputDateBackRef}
              type="date"
              onChange={(e) => setDateDepartureBack(e.target.value)}
            />
            <input
              readOnly
              onClick={openCalendarBack}
              type="text"
              value={dateDepartureBack}
              placeholder="Vuelta*"
            />
            <FaClock className="clock2_airline" />
            <input
              type="time"
              placeholder="Hora salida vuelta*"
              onChange={handleDepartureTimeBack}
              value={departureTimeBack}
            />
            <FaClock className="clock3_airline" />
            <input
              type="time"
              placeholder="Hora llegada vuelta*"
              onChange={handleArrivalTimeBack}
              value={arrivalTimeBack}
            />
          </div>
        </div>
        <button onClick={handleSend}>Crear</button>
      </div>
    </div>
  );
};

export default CreateFlight;
