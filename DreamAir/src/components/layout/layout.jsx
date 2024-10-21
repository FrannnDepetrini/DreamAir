import Header from "../User/header/header";
import Aside from "../User/aside/aside";
import Footer from "../User/footer/footer";
import "../layout/layout.css";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import CardModal from "../User/modal/cardModal";
import { AuthContext } from "../../services/authContext/authContext";
const Layout = ({ isModalVisible, showModal, closeModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleLogin, user } = useContext(AuthContext);
  const handlerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlerMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handlerMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={isMenuOpen ? "container_layout_ajusted" : "container_layout"}
      >
        <Header
          user={user}
          showModal={showModal}
          toggleMenu={handlerMenu}
          className="header"
        />
        <Aside
          isMenuOpen={isMenuOpen}
          toggleMenuOpen={handlerMenuOpen}
          toggleMenuClose={handlerMenuClose}
          className="aside"
        />
        <Outlet className={isMenuOpen ? "main_adjusted" : "main"}></Outlet>

        <Footer className={isMenuOpen ? "footer_adjusted" : "footer"} />
      </div>
      <CardModal
        handleLogin={handleLogin}
        isOpen={isModalVisible}
        closeModal={closeModal}
      />
    </>
  );
};

export default Layout;
