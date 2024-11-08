import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/layout";
// USER
import PagesRegister from "./pages/register/pagesRegister";
import BuyFligth from "./pages/buyFligth/BuyFligth";
import PageSearchFlight from "./pages/pageSearchFlight/pageSearchFlight";
import Favs from "./pages/favs/Favs";
import MyFlights from "./pages/myFlights/myFlights";
import Flights from "./pages/flights/flights";
//AIRLINE
import PagecreateFlight from "./pages/AirlinePages/PagecreateFlight/pagecreateFlight";
import PagetableAirline from "./pages/AirlinePages/PageTableAirline/pagetableAirline";
// ADMIN
import PagetableUsers from "./pages/AdminPages/PageTableUsers/pagetableUsers";
import PagecreateUsers from "./pages/AdminPages/PageCreateUsers/pagecreateUsers";
import Protected from "./components/protected/protected";
import { useState } from "react";
import { AuthContextProvider } from "./services/authContext/authContext";

//Unauthorized
import Unauthorized from "./pages/Unauthorized/unauthorized";
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <Router>
      <Routes>
        <Route
          // path="/"
          element={
            <AuthContextProvider>
              <Layout
                showModal={showModal}
                closeModal={closeModal}
                isModalVisible={isModalVisible}
              />
            </AuthContextProvider>
          }
        >
          {/* USER */}
          <Route
            path="/"
            index
            element={
              <AuthContextProvider>
                <PageSearchFlight />
              </AuthContextProvider>
            }
          />
          {/* <Route path="/searchFlights" element={<PageSearchFlight />} /> */}
          <Route path="/register" element={<PagesRegister />} />
          <Route
            path="/buyFlight"
            element={
              <AuthContextProvider>
                <Protected showModal={showModal} requiredRole="client">
                  <BuyFligth />
                </Protected>
              </AuthContextProvider>
            }
          />
          <Route path="/favs" element={<Favs showModal={showModal} />} />
          <Route path="/myFlights" element={<MyFlights />} />
          <Route path="/flights" element={<Flights showModal={showModal} />} />
          {/* AIRLINE */}
          <Route path="/createFlight" element={<PagecreateFlight />} />
          <Route
            path="/tableAirline"
            element={
              <Protected showModal={showModal} requiredRole="airline">
                <PagetableAirline />
              </Protected>
            }
          />
          {/* ADMIN */}
          <Route
            path="/tableAdmin"
            element={
              <AuthContextProvider>
                <Protected showModal={showModal} requiredRole="admin">
                  <PagetableUsers />
                </Protected>
              </AuthContextProvider>
            }
          />
          <Route
            path="/createAdmin"
            element={
              <AuthContextProvider>
                <Protected showModal={showModal} requiredRole="admin">
                  <PagecreateUsers />
                </Protected>
              </AuthContextProvider>
            }
          />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
