import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { IoAirplaneSharp } from "@react-icons/all-files/io5/IoAirplaneSharp";
import "./cardFlight.css";

const CardFlight = ({ flightDeparture, flightArrival = null }) => {
  return flightArrival == null ? (
    <div className="container_main">
      <div className="container_flight">
        <div className="nav_flight">
          <h5> {flightDeparture.airline} </h5>
          <div className="button_save">
            <FaRegHeart></FaRegHeart>
            <h5>Guardar</h5>
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
        <button>Comprar</button>
      </div>
    </div>
  ) : (
    <div className="container_main">
      <div className="container_flight">
        <div className="nav_flight">
          <h5> {flightDeparture.airline} </h5>
          <div className="button_save">
            <FaRegHeart></FaRegHeart>
            <h5>Guardar</h5>
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
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default CardFlight;
