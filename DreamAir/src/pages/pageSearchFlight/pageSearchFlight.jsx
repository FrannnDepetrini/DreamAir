import SearchFlight from "../../components/User/searchFlight/searchFlight";
import "./pageSearchFlight.css";
const PageSearchFlight = () => {
  return (
    <div className="container_searchFlight">
      <h2 className="title">Buscá el destino con el que más soñaste</h2>
      <SearchFlight />
    </div>
  );
};

export default PageSearchFlight;
