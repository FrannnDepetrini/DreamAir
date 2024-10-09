import CreateUser from "../../../components/Admin/createUser/createUser";
import "../PageCreateUsers/pagecreateUsers.css";
const PagecreateUsers = () => {
  return (
    <div className="page_create_users">
      <h2 className="page_h2_create_users">Crear un usuario</h2>
      <CreateUser />
    </div>
  );
};

export default PagecreateUsers;
