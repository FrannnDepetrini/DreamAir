import CardFlight from "../../components/User/cardFlight/cardFlight";
import "../flights/flights.css";
import { IoMdArrowDropdown } from "../../utils/icons/icons.js";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/authContext/authContext.jsx";
const Flights = ({ showModal }) => {
  const [data, setData] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingAirline, setLoadingAirline] = useState(true);
  const [sorted, setSorted] = useState("");
  const [filterAirline, setFilterAirline] = useState("Todos");
  const [icon, setIcon] = useState(false);
  const [iconClass, setIconClass] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const { departure, arrival, dateGo, dateBack, travel, passengers } =
    location.state;

  const navigateBuy = (flightSelected) => {
    navigate("/buyFlight", {
      state: { ...flightSelected, passengers: passengers, travel },
    });
  };
  const handleSelectSorted = (e) => {
    setSorted(e.target.value);
  };

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

  // CHECKBOXS RADIO

  const handleRadio = (e) => {
    setFilterAirline(e.target.value);
  };

  const renderFlights = () => {
    console.log(data);
    const filteredFlights = data
      .filter((flight) =>
        filterAirline === "Todos"
          ? flight.travel === travel &&
            flight.departure === departure &&
            flight.arrival === arrival &&
            flight.dateGo.slice(0, 10) === dateGo
          : flight.travel === travel &&
            flight.departure === departure &&
            flight.airline === filterAirline &&
            flight.arrival === arrival &&
            flight.dateGo.slice(0, 10) === dateGo
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
          handlerNavigateBuy={navigateBuy}
          flight={flight}
        />
      ))
    ) : (
      <h1>No hay vuelos con esas caracterÃ­sticas</h1>
    );
  };

  const handleIcon = () => {
    setIcon(!icon);
  };

  const handleIconClass = () => {
    setIconClass(!iconClass);
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
          ) : data.length > 0 ? (
            renderFlights()
          ) : (
            <h1>No hay vuelos disponibles</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flights;
