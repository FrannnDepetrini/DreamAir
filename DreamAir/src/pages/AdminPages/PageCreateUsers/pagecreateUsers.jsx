import { useContext } from "react";
import CreateUser from "../../../components/Admin/createUser/createUser";
import "../PageCreateUsers/pagecreateUsers.css";
import { AuthContext } from "../../../services/authContext/authContext";
const PagecreateUsers = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="page_create_users">
      <h2 className="page_h2_create_users">Crear un usuario</h2>
      <CreateUser user={user} />
    </div>
  );
};

export default PagecreateUsers;
