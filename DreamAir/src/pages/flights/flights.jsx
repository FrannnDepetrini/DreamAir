import CardFlight from "../../components/User/cardFlight/cardFlight";
import "../flights/flights.css";
import { IoMdArrowDropdown } from "../../utils/icons/icons.js";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/authContext/authContext.jsx";
const Flights = ({ showModal }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
  console.log(data);
  const handleRadio = (e) => {
    setFilterAirline(e.target.value);
  };

  const renderFlights = () => {
    console.log(new Date(data[0].date).toLocaleDateString("en-CA"));
    console.log(data[1].date.slice(0, 10));
    const filteredFlights = data
      .filter(
        (flight) =>
          filterAirline === "Todos"
            ? flight.departure === departure &&
              flight.arrival === arrival &&
              flight.date.slice(0, 10) === dateGo
            : //new Date(flight.date).toLocaleDateString("en-CA") === dateGo
              flight.departure === departure &&
              flight.airline === filterAirline &&
              flight.arrival === arrival &&
              flight.date.slice(0, 10) === dateGo
        //new Date(flight.date).toLocaleDateString("en-CA") === dateGo //&& flight.date === dateBack
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
          flightDeparture={flight}
          flightDate={flight.date}
        />
      ))
    ) : (
      <h1>No hay vuelos con esas características</h1>
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
            <div className="checkbox_filters">
              <input
                type="radio"
                name="radio"
                value={"Avianca"}
                onChange={handleRadio}
              />
              <p>Avianca</p>
            </div>
            <div className="checkbox_filters">
              <input
                type="radio"
                name="radio"
                value={"Aerolineas Argentinas"}
                onChange={handleRadio}
              />
              <p>Aerolineas Arg.</p>
            </div>
            <div className="checkbox_filters">
              <input
                type="radio"
                name="radio"
                value={"Emirates"}
                onChange={handleRadio}
              />
              <p>Emirates</p>
            </div>
            <div className="checkbox_filters">
              <input
                type="radio"
                name="radio"
                value={"Flybondi"}
                onChange={handleRadio}
              />
              <p>Flybondi</p>
            </div>
            <div className="checkbox_filters">
              <input
                type="radio"
                name="radio"
                value={"Sol"}
                onChange={handleRadio}
              />
              <p>Sol</p>
            </div>
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
