import "./createFlight.css";
import {
  IoLocationSharp,
  FaCalendarAlt,
  HiOutlineSwitchHorizontal,
  MdAirlineSeatReclineExtra,
  IoLogoUsd,
  FaClock,
} from "../../../utils/icons/icons.js";
import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../../services/authContext/authContext.jsx";
import { jwtDecode } from "jwt-decode";

const CreateFlight = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [economic, setEconomic] = useState("");
  const [firstClass, setFirstClass] = useState("");
  const [price, setPrice] = useState("");
  const [dateDeparture, setDateDeparture] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [airline, setAirline] = useState("0");

  const { user } = useContext(AuthContext);
  const inputDateGoRef = useRef(null);
  const openCalendarGo = () => {
    inputDateGoRef.current.showPicker();
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

  const handleDateDeparture = (e) => {
    setDateDeparture(e.target.value);
  };

  const handleDepartureTime = (e) => {
    setDepartureTime(e.target.value);
  };

  const handleArrivalTime = (e) => {
    setArrivalTime(e.target.value);
  };

  const handleAirline = (e) => {
    setAirline(e.target.value);
  };

  const handleSend = async () => {
    const formData = {
      travel: "Ida",
      departure: departure,
      arrival: arrival,
      dateGo: new Date(dateDeparture),
      totalAmountEconomic: economic,
      totalAmountFirstClass: firstClass,
      priceDefault: parseFloat(price),
      timeDepartureGo: departureTime,
      timeArrivalGo: arrivalTime,
      // airline: airline,
    };

    fetch("https://localhost:7001/api/Flight/Create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) return response.json(), alert("Vuelo creado con exito");
      else {
        throw new Error("The response has some errors");
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7001/api/Flight/Get");
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const AirlineMapped = () => {
    const airlineMappedDp = [...new Set(data.map((flight) => flight.airline))];
    const optionMapped = airlineMappedDp.map((dep) => (
      <option key={dep} value={dep}>
        {dep}
      </option>
    ));
    return optionMapped;
  };
  const decodeName = (user) => {
    const decodedToken = jwtDecode(user.token);
    console.log(decodedToken);
    const name = decodedToken.name;
    return name;
  };

  return (
    <div className="div_container_create_flight">
      <div className="selected_div_create_flight">
        {/* <select
          value={airline}
          className="select_createFlight"
          onChange={handleAirline}
        >
          <option value="0" disabled>
            Aerolineas
          </option>
          {!loading ? AirlineMapped() : null}
        </select> */}
        <h3 className="nameAirline">{decodeName(user)}</h3>
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
              />
              <HiOutlineSwitchHorizontal className="switch_airline" />
              <IoLocationSharp className="location1_airline" />
              <input
                type="text"
                placeholder="Destino*"
                onChange={handleArrival}
              />
            </div>

            <div className="div_capacidad">
              <MdAirlineSeatReclineExtra className="location1_airline" />
              <input
                type="number"
                placeholder="Cap. Economicos*"
                onChange={handleEconomic}
              />
              <MdAirlineSeatReclineExtra className="seat1_airline" />
              <input
                type="number"
                placeholder="Cap. Primera Clase*"
                onChange={handleFirstClass}
              />
              <IoLogoUsd className="usd_airline" />
              <input
                type="text"
                placeholder="Precio base*"
                onChange={handlePrice}
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
              onChange={(e) => setDateDeparture(e.target.value)}
            />
            <input
              readOnly
              onClick={openCalendarGo}
              type="text"
              value={dateDeparture}
              placeholder="Salida*"
            />
            {/* <FaCalendarAlt className="calendar1_airline" />
            <input type="date" placeholder="Fecha de salida*" onChange={handleDateDeparture} /> */}
            <FaClock className="clock2_airline" />
            <input
              type="text"
              placeholder="Hora salida*"
              onChange={handleDepartureTime}
            />
            <FaClock className="clock3_airline" />
            <input
              type="text"
              placeholder="Hora llegada*"
              onChange={handleArrivalTime}
            />
          </div>
        </div>
        <button onClick={handleSend}>Crear</button>
      </div>
    </div>
  );
};

export default CreateFlight;
