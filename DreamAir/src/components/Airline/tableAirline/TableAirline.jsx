import { DiAptana } from "../../../utils/icons/icons";
import "./TableAirline.css";
const TableAirline = () => {
  return (
    <div className="div_container_table_airline">
      <div className="table_container">
        <table className="table">
          <thead>
            <tr>
              <th>Fecha de creacion</th>
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
            <tr>
              <td>01/09/2024</td>
              <td>Buenos Aires (BUE)</td>
              <td>Catamarca (CTC)</td>
              <td>11/09/2024</td>
              <td>12:00 Hs</td>
              <td>18:00 Hs</td>
              <td>Completo</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
            <tr>
              <td>01/09/2024</td>
              <td>Buenos Aires (BUE)</td>
              <td>Catamarca (CTC)</td>
              <td>11/09/2024</td>
              <td>12:00 Hs</td>
              <td>18:00 Hs</td>
              <td>Completo</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
            <tr>
              <td>01/09/2024</td>
              <td>Buenos Aires (BUE)</td>
              <td>Catamarca (CTC)</td>
              <td>11/09/2024</td>
              <td>12:00 Hs</td>
              <td>18:00 Hs</td>
              <td>Completo</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
            <tr>
              <td>01/09/2024</td>
              <td>Buenos Aires (BUE)</td>
              <td>Catamarca (CTC)</td>
              <td>11/09/2024</td>
              <td>12:00 Hs</td>
              <td>18:00 Hs</td>
              <td>Completo</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
            <tr>
              <td>01/09/2024</td>
              <td>Buenos Aires (BUE)</td>
              <td>Catamarca (CTC)</td>
              <td>11/09/2024</td>
              <td>12:00 Hs</td>
              <td>18:00 Hs</td>
              <td>Completo</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
            <tr>
              <td>01/09/2024</td>
              <td>Buenos Aires (BUE)</td>
              <td>Catamarca (CTC)</td>
              <td>11/09/2024</td>
              <td>12:00 Hs</td>
              <td>18:00 Hs</td>
              <td>Completo</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
            <tr>
              <td>01/09/2024</td>
              <td>Buenos Aires (BUE)</td>
              <td>Catamarca (CTC)</td>
              <td>11/09/2024</td>
              <td>12:00 Hs</td>
              <td>18:00 Hs</td>
              <td>Completo</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
            <tr>
              <td>01/09/2024</td>
              <td>Catamarca (CTC)</td>
              <td>Buenos Aires (BUE)</td>
              <td>21/09/2024</td>
              <td>16:00 Hs</td>
              <td>22:00 Hs</td>
              <td>Incompleto</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
            <tr>
              <td>01/09/2024</td>
              <td>Catamarca (CTC)</td>
              <td>Buenos Aires (BUE)</td>
              <td>21/09/2024</td>
              <td>16:00 Hs</td>
              <td>22:00 Hs</td>
              <td>Incompleto</td>
              <td>
                <DiAptana className="edit_icon" />
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <button className="table_button">Crea un vuelo nuevo</button>
    </div>
  );
};

export default TableAirline;
