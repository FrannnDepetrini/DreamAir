import "../searchFlight/searchFlight.css"
import { IoLocationSharp, FaCalendarAlt, HiOutlineSwitchHorizontal } from "../../utils/icons/icons";
import { useState } from "react";

const SearchFlight = () => {

    const [travel, settravel] = useState(true)

    const handleSelect = (e) => {
        const selectedOption = e.target.value
        settravel(selectedOption === "Idavuelta")
    }

    return (

        <div className="div_container">
            <div className="div_select">
                <select onChange={handleSelect}>
                    <option value="Idavuelta">Ida y vuelta</option>
                    <option value="Ida">Ida</option>
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

                    {travel ? (
                        <>
                            <IoLocationSharp className="location1" />
                            <input type="text" placeholder="Destino*" />
                            <HiOutlineSwitchHorizontal className="switch" />
                            <IoLocationSharp className="location2" />
                            <input type="text" placeholder="Origen*" />

                            <FaCalendarAlt className="calendar1" />
                            <input type="date" placeholder="Salida*" />
                            <FaCalendarAlt className="calendar2" />
                            <input type="date" placeholder="Regreso*" />
                        </>) : (
                        <>
                            <IoLocationSharp className="locationIda1" />
                            <input type="text" placeholder="Destino*" />
                            <HiOutlineSwitchHorizontal className="switchIda" />
                            <IoLocationSharp className="locationIda2" />
                            <input type="text" placeholder="Origen*" />

                            <FaCalendarAlt className="calendarIda1" />
                            <input type="date" placeholder="Salida*" />
                        </>)}
                </div>

                <button>Buscar</button>
            </div>
        </div>

    )
}

export default SearchFlight;