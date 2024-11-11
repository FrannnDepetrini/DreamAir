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
import PageSupport from "./pages/pageSupport/PageSupport";
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
      <AuthContextProvider>
        <Routes>
          <Route
            // path="/"
            element={
              <Layout
                showModal={showModal}
                closeModal={closeModal}
                isModalVisible={isModalVisible}
              />
            }
          >
            {/* USER */}
            <Route path="/" index element={<PageSearchFlight />} />
            {/* <Route path="/searchFlights" element={<PageSearchFlight />} /> */}
            <Route path="/register" element={<PagesRegister />} />
            <Route
              path="/buyFlight"
              element={
                <Protected showModal={showModal} requiredRole="client">
                  <BuyFligth />
                </Protected>
              }
            />
            <Route
              path="/favs"
              element={
                <Protected showModal={showModal} requiredRole="client">
                  <Favs showModal={showModal} />
                </Protected>
              }
            />
            <Route
              path="/myFlights"
              element={
                <Protected showModal={showModal} requiredRole="client">
                  <MyFlights />
                </Protected>
              }
            />
            <Route
              path="/flights"
              element={<Flights showModal={showModal} />}
            />
            <Route path="/support" element={<PageSupport />} />
            {/* AIRLINE */}
            <Route
              path="/createFlight"
              element={
                <Protected showModal={showModal} requiredRole="airline">
                  <PagecreateFlight />
                </Protected>
              }
            />
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
                <Protected showModal={showModal} requiredRole="admin">
                  <PagetableUsers />
                </Protected>
              }
            />
            <Route
              path="/createAdmin"
              element={
                <Protected showModal={showModal} requiredRole="admin">
                  <PagecreateUsers />
                </Protected>
              }
            />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
