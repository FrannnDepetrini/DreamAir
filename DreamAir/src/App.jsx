import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
import PagesRegister from "./pages/register/pagesRegister";
import BuyFligth from "./pages/buyFligth/BuyFligth";
import MyFlights from "./pages/myFlights/myFlights";
import Flights from "./pages/flights/flights";
import PagecreateFlight from "./pages/AirlinePages/PagecreateFlight/pagecreateFlight";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PagesRegister />} />
          <Route path="/register" element={<PagesRegister />} />
          <Route path="/buyFlight" element={<BuyFligth />} />
          <Route path="/myFlights" element={<MyFlights />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/createFlight" element={<PagecreateFlight />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
