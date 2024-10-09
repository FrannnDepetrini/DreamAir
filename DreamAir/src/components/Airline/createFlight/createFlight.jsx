import "./createFlight.css";
import { IoLocationSharp, FaCalendarAlt, HiOutlineSwitchHorizontal } from "../../../utils/icons/icons.js";

const CreateFlight = () => {
  return (
    <div className="div_container_create_flight">
      <div className="div_search">
        <div className="div_destinoCapacidad">
          <div className="div_destino">
            <IoLocationSharp className="location1_airline" />
            <input type="text" placeholder="Destino*" />
            <HiOutlineSwitchHorizontal className="switch_airline" />
            <IoLocationSharp className="location2_airline" />
            <input type="text" placeholder="Origen*" />
          </div>

          <div className="div_capacidad">
            <IoLocationSharp className="location1_airline" />
            <input type="text" placeholder="Capacidad total*" />
            <IoLocationSharp className="location2_airline" />
            <input type="text" placeholder="Precio base*" />
          </div>
        </div>

        <div className="div_dates">
          <FaCalendarAlt className="calendar1_airline" />
          <input type="text" placeholder="Fecha de salida*" />
          <FaCalendarAlt className="calendar2_airline" />
          <input type="text" placeholder="Hora salida*" />
          <FaCalendarAlt className="calendar3_airline" />
          <input type="text" placeholder="Hora llegada*" />
        </div>
      </div>
      <button>Crear</button>
    </div>
  );
};

export default CreateFlight;
