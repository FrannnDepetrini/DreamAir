import "../tableAdmin/tableAdmin.css";
import { RiDeleteBin6Line, FaPen } from "../../../utils/icons/icons";

const TableAdmin = () => {
  return (
    <div className="div_container_table_users">
      <div className="table_container">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joaquin Tanlongo</td>
              <td>joako.tanlon@gmail.com</td>
              <td>Administrador</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>

            <tr>
              <td>Francisco Depetrini</td>
              <td>frandp7@gmail.com</td>
              <td>Cliente</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>
            <tr>
              <td>Maximo Martin</td>
              <td>maximomartin05@gmail.com</td>
              <td>Aerolinea</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>
            <tr>
              <td>Francisco Depetrini</td>
              <td>frandp7@gmail.com</td>
              <td>Cliente</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>
            <tr>
              <td>Maximo Martin</td>
              <td>maximomartin05@gmail.com</td>
              <td>Aerolinea</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>
            <tr>
              <td>Francisco Depetrini</td>
              <td>frandp7@gmail.com</td>
              <td>Cliente</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>
            <tr>
              <td>Maximo Martin</td>
              <td>maximomartin05@gmail.com</td>
              <td>Aerolinea</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>
            <tr>
              <td>Francisco Depetrini</td>
              <td>frandp7@gmail.com</td>
              <td>Cliente</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>
            <tr>
              <td>Maximo Martin</td>
              <td>maximomartin05@gmail.com</td>
              <td>Aerolinea</td>
              <td className="icons">
                <RiDeleteBin6Line className="trash" /> <FaPen className="pen" />
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <button>Crea un usuario nuevo</button>
    </div>
  );
};

export default TableAdmin;
