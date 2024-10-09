import "../PageTableAirline/pagetableAirline.css";
import TableAirline from "../../../components/Airline/tableAirline/TableAirline";

const PagetableAirline = () => {
  return (
    <div className="page_table_airline">
      <h2 className="page_h2_table_airline">Vuelos creados</h2>
      <TableAirline />
    </div>
  );
};

export default PagetableAirline;
