import "./createFlight.css";
import { IoLocationSharp, FaCalendarAlt, HiOutlineSwitchHorizontal } from "../../../utils/icons/icons.js";
import { useState } from "react";

const CreateFlight = () => {

  const [departure, setDeparture] = useState("")
  const [arrival, setArrival] = useState("")
  const [capacity, setCapacity] = useState("")
  const [price, setPrice] = useState("")
  const [dateDeparture, setDateDeparture] = useState("")
  const [departureTime, setDepartureTime] = useState("")
  const [arrivalTime, setArrivalTime] = useState("")


  const handleDeparture = (e) => {
    setDeparture(e.target.value)
  }

  const handleArrival = (e) => {
    setArrival(e.target.value)
  }

  const handleCapacity = (e) => {
    setCapacity(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleDateDeparture = (e) => {
    setDateDeparture(e.target.value)
  }

  const handleDepartureTime = (e) => {
    setDepartureTime(e.target.value)
  }

  const handleArrivalTime = (e) => {
    setArrivalTime(e.target.value)
  }

  return (
    <div className="div_container_create_flight">
      <div className="div_search">
        <div className="div_destinoCapacidad">
          <div className="div_destino">
            <IoLocationSharp className="location1_airline" />
            <input type="text" placeholder="Destino*" onChange={handleDeparture}/>
            <HiOutlineSwitchHorizontal className="switch_airline" />
            <IoLocationSharp className="location2_airline" />
            <input type="text" placeholder="Origen*" onChange={handleArrival}/>
          </div>

          <div className="div_capacidad">
            <IoLocationSharp className="location1_airline" />
            <input type="text" placeholder="Capacidad total*" onChange={handleCapacity}/>
            <IoLocationSharp className="location2_airline" />
            <input type="text" placeholder="Precio base*" onChange={handlePrice}/>
          </div>
        </div>

        <div className="div_dates">
          <FaCalendarAlt className="calendar1_airline" />
          <input type="text" placeholder="Fecha de salida*" onChange={handleDateDeparture}/>
          <FaCalendarAlt className="calendar2_airline" />
          <input type="text" placeholder="Hora salida*" onChange={handleDepartureTime}/>
          <FaCalendarAlt className="calendar3_airline" />
          <input type="text" placeholder="Hora llegada*" onChange={handleArrivalTime}/>
        </div>
      </div>
      <button>Crear</button>
    </div>
  );
};

export default CreateFlight;
