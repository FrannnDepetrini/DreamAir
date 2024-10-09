import "../PageTableUsers/pagetableUsers.css";
import TableAdmin from "../../../components/Admin/tableAdmin/tableAdmin";
const PagetableUsers = () => {
  return (
    <div className="page_table_users">
      <h2 className="page_h2_table_users">Usuarios</h2>
      <TableAdmin />
    </div>
  );
};

export default PagetableUsers;
