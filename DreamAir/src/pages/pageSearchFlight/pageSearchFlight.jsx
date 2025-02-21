// import { useContext, useEffect } from "react";
import { useContext } from "react";
import SearchFlight from "../../components/User/searchFlight/searchFlight";
import "./pageSearchFlight.css";
import { ThemeContext } from "../../services/themeContext/ThemeContext";
// import { AuthContext } from "../../services/authContext/authContext";
// import { useNavigate } from "react-router-dom";
const PageSearchFlight = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id={`${theme == "dark" ? "c_sf_dark" : ""}`}
      className="container_searchFlight"
    >
      <h2 id={`${theme == "dark" ? "h1_dark" : ""}`} className="title">
        Buscá el destino con el que más soñaste
      </h2>
      <SearchFlight />
    </div>
  );
};

export default PageSearchFlight;
