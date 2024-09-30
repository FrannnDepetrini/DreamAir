import "../searchFlight/searchFlight.css"
import { IoLocationSharp, FaCalendarAlt, HiOutlineSwitchHorizontal } from "../../utils/icons/icons";

const SearchFlight = () => {

    return (

         <div className="div_container">
             <div className="div_select">
                 <select>
                     <option value="">Ida y vuelta</option>
                     <option value="">Ida</option>
                 </select>
                 <select>
                     <option value="" disabled selected>Cant Pasajeros</option>
                     <option value="">1</option>
                     <option value="">2</option>
                     <option value="">3</option>
                     <option value="">4</option>
                     <option value="">5</option>
                 </select>
             </div>

             <div className="div_search">
                 <div className="div_destino">
                     <IoLocationSharp className="location1"/>
                     <input type="text" placeholder="Destino*"/>
                     <HiOutlineSwitchHorizontal className="switch"/>
                     <IoLocationSharp className="location2"/>
                     <input type="text" placeholder="Origen*"/>
                 
                     <FaCalendarAlt className="calendar1"/>
                     <input type="date" placeholder="Salida*"/>
                     <FaCalendarAlt className="calendar2"/>
                     <input type="date" placeholder="Regreso*"/>
                 </div>

                 <button>Buscar</button>
             </div>
         </div> 
        
                )
}

export default SearchFlight;