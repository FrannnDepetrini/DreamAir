import TableUser from "../../components/User/tableUser/TableUser";
import "../myFlights/myFlights.css";
const MyFlights = () => {
  return (
    <div className="div-container-page-myflights">
      <h2 className="h2"> Mis Viajes</h2>
      <TableUser />
    </div>
  );
};

export default MyFlights;
