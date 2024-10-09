import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
import PagesRegister from "./pages/register/pagesRegister";
import BuyFligth from "./pages/buyFligth/BuyFligth";

import PageSearchFlight from "./pages/pageSearchFlight/pageSearchFlight";


import MyFlights from "./pages/myFlights/myFlights";
import Flights from "./pages/flights/flights";
import PagecreateFlight from "./pages/AirlinePages/PagecreateFlight/pagecreateFlight";
import PagetableAirline from "./pages/AirlinePages/PageTableAirline/pagetableAirline";

import PagetableUsers from "./pages/AdminPages/PageTableUsers/pagetableUsers";
import PagecreateUsers from "./pages/AdminPages/PageCreateUsers/pagecreateUsers";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageSearchFlight />} />
          <Route path="/searchFlights" element={<PageSearchFlight />} />
          {/* <Route path="/flights" element={} /> */}
          <Route path="/register" element={<PagesRegister />} />
          <Route path="/buyFlight" element={<BuyFligth />} />
          <Route path="/myFlights" element={<MyFlights />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/createFlight" element={<PagecreateFlight />} />
          <Route path="/tableAirline" element={<PagetableAirline />} />
          <Route path="/tableAdmin" element={<PagetableUsers />} />
          <Route path="/createAdmin" element={<PagecreateUsers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
