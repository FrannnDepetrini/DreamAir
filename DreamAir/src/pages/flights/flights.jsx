import CardFlight from "../../components/User/cardFlight/cardFlight";
import "../flights/flights.css";
import { IoMdArrowDropdown } from "../../utils/icons/icons.js";

const Flights = () => {
  const flight1 = {
    departure: "ROS Fisherton",
    arrival: "BSB Presidente",
    timeArrival: "16:20",
    timeDeparture: "8:20",
    duration: "8h 46m",
    date: "string",
    totalAmount: "100",
    priceDefault: "150000",
    airline: "Emirates",
    ticketsAvailable: "60",
  };

  const flight2 = {
    departure: "BSB Presidente",
    arrival: "ROS Fisherton",
    timeArrival: "8:20",
    timeDeparture: "16:20",
    duration: "8h 46m",
    date: "string",
    totalAmount: "100",
    priceDefault: "160000",
    airline: "Emirates",
    ticketsAvailable: "60",
  };

  return (
    <div className="flights_container">
      <div className="title_and_order">
        <h2>Vuelos</h2>

        <div className="selected_div">
          <label htmlFor="">Ordenar por </label>
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
          <CardFlight flightDeparture={flight1} />
          <CardFlight flightDeparture={flight2} flightArrival={flight1} />
          <CardFlight flightDeparture={flight1} />
          <CardFlight flightDeparture={flight1} flightArrival={flight2} />
        </div>
      </div>
    </div>
  );
};

export default Flights;
