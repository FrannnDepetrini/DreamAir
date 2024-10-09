import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
// USER
import PagesRegister from "./pages/register/pagesRegister";
import BuyFligth from "./pages/buyFligth/BuyFligth";
import PageSearchFlight from "./pages/pageSearchFlight/pageSearchFlight";
import MyFlights from "./pages/myFlights/myFlights";
import Flights from "./pages/flights/flights";
//AIRLINE
import PagecreateFlight from "./pages/AirlinePages/PagecreateFlight/pagecreateFlight";
import PagetableAirline from "./pages/AirlinePages/PageTableAirline/pagetableAirline";
// ADMIN
import PagetableUsers from "./pages/AdminPages/PageTableUsers/pagetableUsers";
import PagecreateUsers from "./pages/AdminPages/PageCreateUsers/pagecreateUsers";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* USER */}
          <Route path="/searchFlights"  index element={<PageSearchFlight />} />
          <Route path="/register" element={<PagesRegister />} />
          <Route path="/buyFlight" element={<BuyFligth />} />
          <Route path="/myFlights" element={<MyFlights />} />
          <Route path="/favs" element={<Flights />} />
          <Route path="/flights" element={<Flights />} />
          {/* AIRLINE */}
          <Route path="/createFlight" element={<PagecreateFlight />} />
          <Route path="/tableAirline" element={<PagetableAirline />} />
          {/* ADMIN */}
          <Route path="/tableAdmin" element={<PagetableUsers />} />
          <Route path="/createAdmin" element={<PagecreateUsers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
