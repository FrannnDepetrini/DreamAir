import "./App.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./components/layout/layout";
import PagesRegister from "./pages/register/pagesRegister";

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
        <Route path="/" element={<Layout/>}>
          <Route index element={<PagesRegister/>}/>
        </Route>
      </Routes>
    </Router>
      
    
  );
}

export default App;
