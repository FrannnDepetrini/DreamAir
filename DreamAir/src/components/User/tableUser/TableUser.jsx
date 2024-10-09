import "./TableUser.css";
import { RiDeleteBin6Line } from "../../../utils/icons/icons";
const TableUser = () => {
  return (
    <div className="div_container_table_user">
      {/* <h2 className="table_title">Mis Viajes</h2> */}
      <div className="table_container">
        <table className="table">
          <thead>
            <tr>
              <th>Fecha de compra</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Fecha</th>
              <th>Horario de salida</th>
              <th>Horario de llegada</th>
              <th>Estado</th>
              <th>Cancelar</th>
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
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
                <RiDeleteBin6Line className="trash_icon" />
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <button className="table_button_user">Comprar un vuelo</button>
    </div>
  );
};

export default TableUser;
