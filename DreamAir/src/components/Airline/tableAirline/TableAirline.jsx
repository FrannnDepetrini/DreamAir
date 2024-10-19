import { useState, useEffect } from "react";
import { RiDeleteBin6Line, FaPen, FaCheckCircle, MdCancel } from "../../../utils/icons/icons";
import "./TableAirline.css";
const TableAirline = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [isPen, setIsPen] = useState(false)

  const [dateDeparture, setDateDeparture] = useState("")
  const [timeDeparture, setTimeDeparture] = useState("")
  const [timeArrival, setTimeArrival] = useState("")



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


  const handleId = (flightId) => {

    fetch("https://localhost:7001/api/Flight/Delete", {
      method: "DELETE",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify(flightId),
    })

    .then((response) => {
      if (response.ok) return response.json();
      else {
        throw new Error("The response has some errors");
      }
    })

    setData(data.filter(flight => flight.id != flightId))

  }


  const handleDateDeparture = (e) => {
    setDateDeparture(e.target.value); 
  };
  
  const handleTimeDeparture = (e) => {
    setTimeDeparture(e.target.value); 
  };
  
  const handleTimeArrival = (e) => {
    setTimeArrival(e.target.value); 
  };
  

  const handlePenId = (flightId, date, timeDeparture, timeArrival) => {
    setIsPen(flightId)
    setDateDeparture(date)
    setTimeDeparture(timeDeparture)
    setTimeArrival(timeArrival)

  }

  const handleAceptChanges = (flightId) => {

    const newFlightUpdate = {
      flightId: flightId,
      date: new Date(dateDeparture),
      timeDeparture: timeDeparture,
      timeArrival: timeArrival
    }
    // console.log(newFlightUpdate)
    fetch("https://localhost:7001/api/Flight/Update", {
      method: "PUT",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify(newFlightUpdate),
    })

    .then((response) => {
      if (response.ok) return response.json();
        else {
        throw new Error("The response has some errors");
      }
    })
    setData(prevData => 
      prevData.map(flight => 
        flight.id === flightId ? { ...flight, ...newFlightUpdate } : flight
      )
    );
    setIsPen("")
  }

  const handleCancelChanges = () => {

    setIsPen("")
  }

  return (
    <div className="div_container_table_airline">
      <div className="table_container">
        <table className="table_airline">
          <thead>
            <tr>
              <th>Origen</th>
              <th>Destino</th>
              <th>Fecha</th>
              <th>Horario de salida</th>
              <th>Horario de llegada</th>
              <th>Estado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {loading ? <tr><td><p>...cargando datos...</p></td></tr> 
            : data.map((flight) => {
              let date = new Date(flight.date);
              const opts = { year: "numeric", month: "short", day: "numeric" };
              return (<tr key={flight.id}>
                <td>{ flight.departure }</td>
                <td>{ flight.arrival }</td>
                <td>{isPen == flight.id ? <input type="text" value={dateDeparture} onChange={handleDateDeparture} /> : date.toLocaleDateString("es-ES", opts)}</td>
                <td>{isPen == flight.id ? <input type="text" value={timeDeparture} onChange={handleTimeDeparture} /> : flight.timeDeparture}</td>
                <td>{isPen == flight.id ? <input type="text" value={timeArrival} onChange={handleTimeArrival} /> : flight.timeArrival}</td>
                <td>{flight.freeEconomicSeats == flight.totalAmountEconomic && flight.freeFirstClassSeats == flight.totalAmountFirstClass ? "Lleno" : "Libre"}</td>
                
                <td className="icons">
                
                  {isPen == flight.id 
                  ? <> <FaCheckCircle className="checkCircle" onClick={() => handleAceptChanges(flight.id)}/> <MdCancel className="cancelCircle" onClick={handleCancelChanges}/> </>
                  : <> <FaPen className="pen" onClick={() => handlePenId(flight.id, date.toLocaleDateString("en-CA"), flight.timeDeparture, flight.timeArrival)}/> <RiDeleteBin6Line className="trash" onClick={() => handleId(flight.id)} /> </>}
                    
                  

                </td>
              </tr>)
            })
            }
            
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <button className="table_button_airline">Crea un vuelo nuevo</button>
    </div>
  );
};

export default TableAirline;