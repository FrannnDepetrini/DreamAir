import "../flights/flights.css";
import CardFlight from "../../components/User/cardFlight/cardFlight";
import { IoMdArrowDropdown } from "../../utils/icons/icons.js";

import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../services/authContext/authContext.jsx";
const Favs = ({ showModal }) => {
  const [loading, setLoading] = useState(true);
  const [sorted, setSorted] = useState("");
  const [filterAirline, setFilterAirline] = useState("Todos");
  const [icon, setIcon] = useState(false);
  const [iconClass, setIconClass] = useState(false);
  const [airlines, setAirlines] = useState([]);
  const [loadingAirline, setLoadingAirline] = useState(true);

  const { user } = useContext(AuthContext);

  const [savedFlights, setSavedFlights] = useState([]);

  const handleSelectSorted = (e) => {
    setSorted(e.target.value);
  };

  useEffect(() => {
    const saved = localStorage.getItem("FlightSaved");
    if (saved) {
      setSavedFlights(JSON.parse(saved)); // Guardamos el array completo de vuelos guardados
    }
    setLoading(false);
  }, []);

  // PETICION DE AEROLINEAS

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAirline = await fetch(
          "https://localhost:7001/api/UserAirline/GetAirlines"
        );
        const airlines = await responseAirline.json();
        setAirlines(airlines);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingAirline(false);
      }
    };
    fetchData();
  }, []);

  const handleRadio = (e) => {
    setFilterAirline(e.target.value);
  };
  const handleIcon = () => {
    setIcon(!icon);
  };

  const handleIconClass = () => {
    setIconClass(!iconClass);
  };

  const today = new Date();

  const renderFlights = () => {
    const filteredFlights = savedFlights
      .filter((flight) =>
        filterAirline == "Todos" ? true : flight.airline === filterAirline
      )
      .sort((a, b) =>
        sorted === ""
          ? new Date(a.duration.replace("Hs", "").replace(":", "")) -
            new Date(b.duration.replace("Hs", "").replace(":", ""))
          : sorted === "mayor"
          ? b.priceDefault - a.priceDefault
          : a.priceDefault - b.priceDefault
      );

    return filteredFlights.length > 0 ? (
      filteredFlights.map((flight) => (
        <CardFlight
          user={user}
          key={flight.id}
          showModal={showModal}
          // handlerNavigateBuy={navigateBuy}
          flight={flight}
          validationDate={new Date(flight.date) >= today}
        />
      ))
    ) : (
      <h1>No hay vuelos con esas caracterÃ­sticas</h1>
    );
  };
  return (
    <div className="flights_container">
      <div className="title_and_order">
        <h2>Vuelos</h2>

        <div className="selected_div">
          <label>Ordenar por </label>
          <select onChange={handleSelectSorted}>
            <option value="" defaultValue>
              Recomendado
            </option>
            <option value="mayor">Mayor precio</option>
            <option value="menor">Menor precio</option>
          </select>
        </div>
      </div>

      <div className="filter_and_flights">
        <div className="filter_container">
          {/* AEROLINEAS */}
          <div className="titles_filters" onClick={handleIcon}>
            <h3>Aerolinea</h3>
            {/* <IoMdArrowDropdown className="icon" id={icon ? "rotateUp" : "torateDown"} onClick={handleIcon}/> */}
            <IoMdArrowDropdown className={`icon ${icon ? "iconOpen" : ""}`} />
          </div>
          {/* Usuarios de Aerolineas tiene que ir aca */}
          <div
            className={`container-radios ${
              icon ? "container-radios-open" : ""
            }`}
          >
            <div className="checkbox_filters">
              <input
                type="radio"
                name="radio"
                value={"Todos"}
                onChange={handleRadio}
              />
              <p>Todos</p>
            </div>
            {loadingAirline ? (
              <p>...Cargando vuelos...</p>
            ) : (
              airlines.map((airline) => {
                return (
                  <div className="checkbox_filters" key={airline}>
                    <input
                      type="radio"
                      name="radio"
                      value={airline}
                      onChange={handleRadio}
                    />
                    <p>{airline}</p>
                  </div>
                );
              })
            )}
          </div>

          {/* CLASES */}
          <div className="titles_filters" onClick={handleIconClass}>
            <h3>Clase</h3>
            <IoMdArrowDropdown
              className={`icon ${iconClass ? "iconOpen" : ""}`}
            />
          </div>

          <div
            className={`container-radios ${
              iconClass ? "container-radios-open" : ""
            }`}
          >
            <div className="checkbox_filters">
              <input type="radio" name="radio2" />
              <p>Economica</p>
            </div>
            <div className="checkbox_filters">
              <input type="radio" name="radio2" />
              <p>Mixta</p>
            </div>
            <div className="checkbox_filters">
              <input type="radio" name="radio2" />
              <p>Business</p>
            </div>
          </div>
        </div>
        <div className="flight-card">
          {loading ? (
            <p>...Cargando vuelos...</p>
          ) : savedFlights.length > 0 ? (
            renderFlights()
          ) : (
            <h1>No hay vuelos disponibles</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favs;
