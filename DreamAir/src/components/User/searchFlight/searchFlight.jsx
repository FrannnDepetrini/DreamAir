import "./searchFlight.css";
import {
  IoLocationSharp,
  FaCalendarAlt,
  HiOutlineSwitchHorizontal,
} from "../../../utils/icons/icons";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchFlight = () => {
  const inputDateGoRef = useRef(null);
  const inputDateBackRef = useRef(null);
  const [travel, settravel] = useState("Idavuelta");
  const [dateGo, setDateGo] = useState("");
  const [dateBack, setDateBack] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  // const [date, setdate] = useState('');
  const [passengers, setPassengers] = useState(1);
  // const [typeFlight, setTypeFlight] = useState('');
  const navigate = useNavigate();
  const openCalendarGo = () => {
    inputDateGoRef.current.showPicker();
  };
  const openCalendarBack = () => {
    inputDateBackRef.current.showPicker();
  };
  const handleSelect = (e) => {
    settravel(e.target.value);
  };
  const handleNavigateFlights = () => {
    if (travel === "Idavuelta") {
      navigate(
        `/flights/${departure}/${arrival}/${dateGo}/${dateBack}/${travel}/${passengers}`
      );
    } else {
      navigate(
        `/flights/${departure}/${arrival}/${dateGo}/${travel}/${passengers}`
      );
    }
  };

  return (
    <div
      className={
        travel == "Idavuelta"
          ? "div_container_adjusted"
          : "div_container_search_flight"
      }
    >
      <div className="div_select">
        <select onChange={handleSelect}>
          <option value="Idavuelta" defaultValue>
            Ida y vuelta
          </option>
          <option value="Ida">Ida</option>
        </select>
        <select onChange={(e) => setPassengers(e.target.value)}>
          <option disabled>Cant Pasajeros</option>
          <option defaultValue value="1">
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="div_search_flight">
        <div className="div_destino">
          {travel == "Idavuelta" ? (
            <>
              <IoLocationSharp className="location2" />
              <input
                onChange={(e) => setDeparture(e.target.value)}
                type="text"
                placeholder="Origen*"
              />
              <HiOutlineSwitchHorizontal className="switch" />
              <IoLocationSharp className="location1" />
              <input
                onChange={(e) => setArrival(e.target.value)}
                type="text"
                placeholder="Destino*"
              />

              <FaCalendarAlt onClick={openCalendarGo} className="calendar1" />
              <input
                className="calendarHiddenGo"
                ref={inputDateGoRef}
                type="date"
                onChange={(e) => setDateGo(e.target.value)}
              />
              <input
                readOnly
                onClick={openCalendarGo}
                type="text"
                value={dateGo}
                placeholder="Salida*"
              />

              <FaCalendarAlt onClick={openCalendarBack} className="calendar2" />
              <input
                className="calendarHiddenBack"
                ref={inputDateBackRef}
                type="date"
                onChange={(e) => setDateBack(e.target.value)}
              />
              <input
                readOnly
                onClick={openCalendarBack}
                type="text"
                value={dateBack}
                placeholder="Regreso*"
              />
            </>
          ) : (
            <>
              <IoLocationSharp className="locationIda2" />
              <input
                onChange={(e) => setDeparture(e.target.value)}
                type="text"
                placeholder="Origen*"
              />
              <HiOutlineSwitchHorizontal className="switchIda" />
              <IoLocationSharp className="locationIda1" />
              <input
                type="text"
                onChange={(e) => setArrival(e.target.value)}
                placeholder="Destino*"
              />

              <FaCalendarAlt className="calendarIda1" />
              <input
                className="calendarHiddenGo"
                ref={inputDateGoRef}
                type="date"
                onChange={(e) => setDateGo(e.target.value)}
              />
              <input
                readOnly
                onClick={openCalendarGo}
                type="text"
                value={dateGo}
                placeholder="Salida*"
              />
            </>
          )}
        </div>

        <button
          onClick={handleNavigateFlights}
          className="buttom_search_flight"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchFlight;
