import "./searchFlight.css";
import {
  IoLocationSharp,
  FaCalendarAlt,
  HiOutlineSwitchHorizontal,
} from "../../../utils/icons/icons";
import { useState, useRef } from "react";

const SearchFlight = () => {
  const inputDateGoRef = useRef(null);
  const inputDateBackRef = useRef(null);
  const [travel, settravel] = useState("Idavuelta");
  const [dateGo, setDateGo] = useState("");
  const [dateBack, setDateBack] = useState("");
  const openCalendarGo = () => {
    inputDateGoRef.current.showPicker();
  };
  const openCalendarBack = () => {
    inputDateBackRef.current.showPicker();
  };
  const handleSelect = (e) => {
    settravel(e.target.value);
  };

  return (
    <div
      className={
        travel == "Idavuelta" ? "div_container_adjusted" : "div_container"
      }
    >
      <div className="div_select">
        <select onChange={handleSelect}>
          <option value="Idavuelta">Ida y vuelta</option>
          <option value="Ida">Ida</option>
        </select>
        <select>
          <option defaultValue disabled>
            Cant Pasajeros
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </div>

      <div className="div_search">
        <div className="div_destino">
          {travel == "Idavuelta" ? (
            <>
              <IoLocationSharp className="location1" />
              <input type="text" placeholder="Destino*" />
              <HiOutlineSwitchHorizontal className="switch" />
              <IoLocationSharp className="location2" />
              <input type="text" placeholder="Origen*" />

              <FaCalendarAlt onClick={openCalendarGo} className="calendar1" />
              <input
                className="calendarHiddenGo"
                ref={inputDateGoRef}
                type="date"
                onChange={(e) => setDateGo(e.target.value)}
              />
              <input
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
                onClick={openCalendarBack}
                type="text"
                value={dateBack}
                placeholder="Regreso*"
              />
            </>
          ) : (
            <>
              <IoLocationSharp className="locationIda1" />
              <input type="text" placeholder="Destino*" />
              <HiOutlineSwitchHorizontal className="switchIda" />
              <IoLocationSharp className="locationIda2" />
              <input type="text" placeholder="Origen*" />

              <FaCalendarAlt className="calendarIda1" />
              <input
                className="calendarHiddenGo"
                ref={inputDateGoRef}
                type="date"
                onChange={(e) => setDateGo(e.target.value)}
              />
              <input
                onClick={openCalendarGo}
                type="text"
                value={dateGo}
                placeholder="Salida*"
              />
            </>
          )}
        </div>

        <button>Buscar</button>
      </div>
    </div>
  );
};

export default SearchFlight;
