import "./TableUser.css";
import { RiDeleteBin6Line } from "../../../utils/icons/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../services/authContext/authContext";
import { useNavigate } from "react-router-dom";
const TableUser = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:7001/api/UserClient/GetTickets",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

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

  const handleId = (ticketId) => {
    fetch(`https://localhost:7001/api/Ticket/delete/${ticketId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(ticketId),
    }).then((response) => {
      if (response.ok) return response.json();
      else {
        throw new Error("The response has some errors");
      }
    });

    setData(data.filter((ticket) => ticket.id != ticketId));
  };

  return (
    <div className="div_container_table_user">
      {/* <h2 className="table_title">Mis Viajes</h2> */}
      <div className="table_container">
        <table className="table">
          <thead>
            <tr>
              <th>Aerolinea</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Fecha</th>
              <th>Hora de salida</th>
              <th>Hora de llegada</th>
              <th>Fecha regreso</th>
              <th>Hora de salida (regreso)</th>
              <th>Hora de llegada (regreso)</th>
              <th>Estado</th>
              <th>Cancelar</th>
            </tr>
          </thead>
          <tbody>
            {console.log(data)}
            {loading ? (
              <tr>
                <td>
                  <p>...cargando datos...</p>
                </td>
              </tr>
            ) : (
              data.map((ticket) => {
                let dateGo = new Date(ticket.dateGo);
                let dateBack = new Date(ticket.dateBack);
                const opts = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };
                return (
                  <tr key={ticket.id}>
                    <td>{ticket.airline}</td>
                    <td>{ticket.departure}</td>
                    <td>{ticket.arrival}</td>
                    <td>{dateGo.toLocaleDateString("es-ES", opts)}</td>
                    <td>{ticket.timeDepartureGo} Hs</td>
                    <td>{ticket.timeArrivalGo} Hs</td>
                    <td>
                      {ticket.travel == "Ida"
                        ? "------"
                        : dateBack.toLocaleDateString("es-ES", opts)}
                    </td>
                    <td>
                      {ticket.travel == "Ida"
                        ? "------"
                        : ticket.timeDepartureBack + " Hs"}{" "}
                    </td>
                    <td>
                      {ticket.travel == "Ida"
                        ? "------"
                        : ticket.timeArrivalBack + " Hs"}{" "}
                    </td>
                    <td>{ticket.state}</td>
                    <td>
                      <RiDeleteBin6Line
                        className="trash_icon"
                        onClick={() => handleId(ticket.id)}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <button className="table_button_user" onClick={() => navigate("/")}>
        Comprar un vuelo
      </button>
    </div>
  );
};

export default TableUser;
