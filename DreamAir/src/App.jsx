import "./App.css";

import Footer from "./components/footer/footer";

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
    <div className="container_app">
      <Footer />
    </div>
  );
}

export default App;
