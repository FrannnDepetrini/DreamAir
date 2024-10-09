import Header from "../User/header/header";
import Aside from "../User/aside/aside";
import Footer from "../User/footer/footer";
import "../layout/layout.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import CardModal from "../User/modal/cardModal";
const Layout = ({ isModalVisible, showModal, closeModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <CardModal isOpen={isModalVisible} closeModal={closeModal} />
    </>
  );
};

export default Layout;
