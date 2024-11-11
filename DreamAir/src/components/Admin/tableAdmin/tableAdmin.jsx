import "../tableAdmin/tableAdmin.css";
import {
  RiDeleteBin6Line,
  FaPen,
  FaCheckCircle,
  MdCancel,
} from "../../../utils/icons/icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../services/authContext/authContext";
import { useNavigate } from "react-router-dom";
const TableAdmin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPen, setIsPen] = useState(false);
  const [userRole, setUserRole] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7001/api/User/Get", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

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

  const handleId = (userId) => {
    fetch(`https://localhost:7001/api/User/Delete/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    }).then((response) => {
      if (response.ok) return response.json();
      else {
        throw new Error("The response has some errors");
      }
    });

    setData(data.filter((user) => user.id != userId));
  };

  const handleAceptChanges = (userId) => {
    const newUserUpdate = {
      id: userId,
      newRole: userRole,
    };
    if (userRole != "client" && userRole != "airline" && userRole != "admin") {
      alert("Solo puedes poner roles client | airline | admin");
    } else {
      fetch("https://localhost:7001/api/User/UpdateRole", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newUserUpdate),
      }).then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("The response has some errors");
        }
      });
      setData((prevData) =>
        prevData.map((user) =>
          user.id === userId ? { ...user, role: userRole } : user
        )
      );
      setIsPen("");
    }
  };

  const handleCancelChanges = () => {
    setIsPen("");
  };
  const handleUserRole = (e) => {
    setUserRole(e.target.value);
  };

  return (
    <div className="div_container_table_users">
      <div className="table_container">
        <table className="table_admin">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
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
              data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name + " " + user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                      {isPen == user.id ? (
                        <input
                          type="text"
                          value={userRole}
                          onChange={handleUserRole}
                        />
                      ) : (
                        user.role
                      )}
                    </td>
                    <td className="icons">
                      {isPen == user.id ? (
                        <>
                          {" "}
                          <FaCheckCircle
                            className="checkCircle"
                            onClick={() => handleAceptChanges(user.id)}
                          />{" "}
                          <MdCancel
                            className="cancelCircle"
                            onClick={handleCancelChanges}
                          />{" "}
                        </>
                      ) : (
                        <>
                          <RiDeleteBin6Line
                            className="trash"
                            onClick={() => handleId(user.id)}
                          />{" "}
                          <FaPen
                            className="pen"
                            onClick={() => setIsPen(user.id)}
                          />
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
        onClick={() => {
          navigate("/createAdmin");
        }}
      >
        Crea un usuario nuevo
      </button>
    </div>
  );
};

export default TableAdmin;
