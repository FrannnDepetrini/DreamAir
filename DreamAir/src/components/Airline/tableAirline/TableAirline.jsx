import { useState, useEffect, useContext } from "react";
import {
  RiDeleteBin6Line,
  FaPen,
  FaCheckCircle,
  MdCancel,
} from "../../../utils/icons/icons";
import "./TableAirline.css";
import { AuthContext } from "../../../services/authContext/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
const TableAirline = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPen, setIsPen] = useState(false);

  const [dateDepartureGo, setDateDepartureGo] = useState("");
  const [timeDepartureGo, setTimeDepartureGo] = useState("");
  const [timeArrivalGo, setTimeArrivalGo] = useState("");
  const [dateDepartureBack, setDateDepartureBack] = useState("");
  const [timeDepartureBack, setTimeDepartureBack] = useState("");
  const [timeArrivalBack, setTimeArrivalBack] = useState("");

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
    fetch(`https://localhost:7001/api/Flight/Delete/${flightId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(flightId),
    }).then((response) => {
      if (response.ok) return response.json();
      else {
        throw new Error("The response has some errors");
      }
    });

    setData(data.filter((flight) => flight.id != flightId));
  };

  const handleDateDepartureGo = (e) => {
    setDateDepartureGo(e.target.value);
  };

  const handleTimeDepartureGo = (e) => {
    setTimeDepartureGo(e.target.value);
  };

  const handleTimeArrivalGo = (e) => {
    setTimeArrivalGo(e.target.value);
  };

  const handleDateDepartureBack = (e) => {
    setDateDepartureBack(e.target.value);
  };

  const handleTimeDepartureBack = (e) => {
    setTimeDepartureBack(e.target.value);
  };

  const handleTimeArrivalBack = (e) => {
    setTimeArrivalBack(e.target.value);
  };

  const handlePenId = (flightId, dateGo, timeDepartureGo, timeArrivalGo) => {
    setIsPen(flightId);
    setDateDepartureGo(dateGo);
    setTimeDepartureGo(timeDepartureGo);
    setTimeArrivalGo(timeArrivalGo);
  };

  const handleAceptChanges = (flightId) => {
    const newFlightUpdate = {
      flightId: flightId,
      dateGo: new Date(dateDepartureGo),
      timeDepartureGo: timeDepartureGo,
      timeArrivalGo: timeArrivalGo,
      dateBack: flightId.travel == "Ida" ? null : new Date(dateDepartureBack),
      timeDepartureBack: flightId.travel == "Ida" ? null : timeDepartureBack,
      timeArrivalBack: flightId.travel == "Ida" ? null : timeArrivalBack,
    };
    // console.log(newFlightUpdate)
    fetch("https://localhost:7001/api/Flight/Update", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newFlightUpdate),
    }).then((response) => {
      if (response.ok) return response.json();
      else {
        throw new Error("The response has some errors");
      }
    });
    setData((prevData) =>
      prevData.map((flight) =>
        flight.id === flightId ? { ...flight, ...newFlightUpdate } : flight
      )
    );
    setIsPen("");
  };

  const handleCancelChanges = () => {
    setIsPen("");
  };

  return (
    <div className="div_container_table_airline">
      <div className="table_container">
        <table className="table_airline">
          <thead>
            <tr>
              <th>Origen</th>
              <th>Destino</th>
              <th>Tipo de vuelo</th>
              <th>Fecha de salida</th>
              <th>Hora de salida</th>
              <th>Hora de llegada</th>
              <th>Fecha de regreso</th>
              <th>Hora de salida (regreso)</th>
              <th>Hora de llegada (regreso)</th>

              <th>Estado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td>
                  <p>...cargando datos...</p>
                </td>
              </tr>
            ) : (
              data.map((flight) => {
                let dateGo = new Date(flight.dateGo);
                let dateBack = new Date(flight.dateBack);
                const opts = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };

                return (
                  <tr key={flight.id}>
                    <td>{flight.departure}</td>
                    <td>{flight.arrival}</td>
                    <td>{flight.travel}</td>
                    <td>
                      {isPen == flight.id ? (
                        <input
                          type="text"
                          value={dateDepartureGo}
                          onChange={handleDateDepartureGo}
                        />
                      ) : (
                        dateGo.toLocaleDateString("es-ES", opts)
                      )}
                    </td>
                    <td>
                      {isPen == flight.id ? (
                        <input
                          type="time"
                          value={timeDepartureGo}
                          onChange={handleTimeDepartureGo}
                        />
                      ) : (
                        flight.timeDepartureGo
                      )}
                    </td>
                    <td>
                      {isPen == flight.id ? (
                        <input
                          type="time"
                          value={timeArrivalGo}
                          onChange={handleTimeArrivalGo}
                        />
                      ) : (
                        flight.timeArrivalGo
                      )}
                    </td>
                    {/* vuelos de regreso */}
                    <td>
                      {isPen == flight.id &&
                      flight.travel.toLowerCase() == "idavuelta" ? (
                        <input
                          type="text"
                          value={dateDepartureBack}
                          onChange={handleDateDepartureBack}
                        />
                      ) : flight.travel == "Ida" ? (
                        "------"
                      ) : (
                        dateBack.toLocaleDateString("es-ES", opts)
                      )}
                    </td>
                    <td>
                      {isPen == flight.id &&
                      flight.travel.toLowerCase() == "idavuelta" ? (
                        <input
                          type="time"
                          value={timeDepartureBack}
                          onChange={handleTimeDepartureBack}
                        />
                      ) : flight.travel == "Ida" ? (
                        "------"
                      ) : (
                        flight.timeDepartureBack
                      )}
                    </td>
                    <td>
                      {isPen == flight.id &&
                      flight.travel.toLowerCase() == "idavuelta" ? (
                        <input
                          type="time"
                          value={timeArrivalBack}
                          onChange={handleTimeArrivalBack}
                        />
                      ) : flight.travel == "Ida" ? (
                        "------"
                      ) : (
                        flight.timeArrivalBack
                      )}
                    </td>
                    <td>
                      {flight.freeEconomicSeats == flight.totalAmountEconomic &&
                      flight.freeFirstClassSeats == flight.totalAmountFirstClass
                        ? "Lleno"
                        : "Libre"}
                    </td>

                    <td className="icons">
                      {isPen == flight.id ? (
                        <>
                          {" "}
                          <FaCheckCircle
                            className="checkCircle"
                            onClick={() => handleAceptChanges(flight.id)}
                          />{" "}
                          <MdCancel
                            className="cancelCircle"
                            onClick={handleCancelChanges}
                          />{" "}
                        </>
                      ) : (
                        <>
                          {" "}
                          <FaPen
                            className="pen"
                            onClick={() =>
                              handlePenId(
                                flight.id,
                                dateGo.toLocaleDateString("en-CA"),
                                flight.timeDepartureGo,
                                flight.timeArrivalGo
                              )
                            }
                          />{" "}
                          <RiDeleteBin6Line
                            className="trash"
                            onClick={() => handleId(flight.id)}
                          />{" "}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <button
        className="table_button_airline"
        onClick={() => {
          navigate("/createFlight");
        }}
      >
        Crea un vuelo nuevo
      </button>
    </div>
  );
};

export default TableAirline;
