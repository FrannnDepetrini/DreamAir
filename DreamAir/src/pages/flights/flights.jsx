import CardFlight from "../../components/User/cardFlight/cardFlight";
import "../flights/flights.css";
import { IoMdArrowDropdown } from "../../utils/icons/icons.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Flights = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { arrival, departure, dateGo, dateBack, travel, passengers } =
    useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7001/Get");
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

  console.log(data);
  return (
    <div className="flights_container">
      <div className="title_and_order">
        <h2>Vuelos</h2>

        <div className="selected_div">
          <label>Ordenar por </label>
          <select>
            <option value="default" defaultValue>
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
          <div className="titles_filters">
            <h3>Aerolinea</h3>
            <IoMdArrowDropdown className="icon" />
          </div>
          <div className="checkbox_filters">
            <input type="radio" name="radio" />
            <p>Avianca</p>
          </div>
          <div className="checkbox_filters">
            <input type="radio" name="radio" />
            <p>Aerolineas Arg.</p>
          </div>
          <div className="checkbox_filters">
            <input type="radio" name="radio" />
            <p>Emirate</p>
          </div>

          {/* CLASES */}
          <div className="titles_filters">
            <h3>Clase</h3>
            <IoMdArrowDropdown className="icon" />
          </div>
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
          {/* AVIONES */}
          <div className="titles_filters">
            <h3>Avion</h3>
            <IoMdArrowDropdown className="icon" />
          </div>
        </div>
        <div className="flight-card">
          {loading ? (
            <p>...Cargando vuelos...</p>
          ) : data.length > 0 && data[0].departure === departure ? (
            <CardFlight flightDeparture={data[0]} />
          ) : (
            <h1>No hay vuelos con esas caracteristicas</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flights;
