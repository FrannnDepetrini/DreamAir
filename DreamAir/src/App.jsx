import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
import PagesRegister from "./pages/register/pagesRegister";
import BuyFligth from "./pages/buyFligth/BuyFligth";
import PageSearchFlight from "./pages/pageSearchFlight/pageSearchFlight";

function App() {
  const flight1 = {
    departure: "ROS Fisherton",
    arrival: "BSB Presidente",
    timeArrival: "16:20",
    timeDeparture: "8:20",
    duration: "8h 46m",
    date: "string",
    totalAmount: "100",
    priceDefault: "150000",
    airline: "Emirates",
    ticketsAvailable: "60",
  };

  const flight2 = {
    departure: "BSB Presidente",
    arrival: "ROS Fisherton",
    timeArrival: "8:20",
    timeDeparture: "16:20",
    duration: "8h 46m",
    date: "string",
    totalAmount: "100",
    priceDefault: "160000",
    airline: "Emirates",
    ticketsAvailable: "60",
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageSearchFlight />} />
          <Route path="/flights" element={<PageSearchFlight />} />
          <Route path="/register" element={<PagesRegister />} />
          <Route path="/buyFlight" element={<BuyFligth />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
