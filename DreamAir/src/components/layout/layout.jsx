import Header from "../User/header/header";
import Aside from "../User/aside/aside";
import Footer from "../User/footer/footer";
import Register from "../User/register/register";
import "../layout/layout.css";
import {Outlet} from "react-router-dom"
import { useState } from "react";
const Layout = () => {
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
    <div className={isMenuOpen ? "container_layout_ajusted" : "container_layout"}>
      <Header toggleMenu={handlerMenu} className="header" />
      <Aside
        isMenuOpen={isMenuOpen}
        toggleMenuOpen={handlerMenuOpen}
        toggleMenuClose={handlerMenuClose}
        className="aside"
      />
      <Outlet className={isMenuOpen ? "main_adjusted" : "main"}>
        
      </Outlet>

      <Footer className={isMenuOpen ? "footer_adjusted" : "footer"}/>
    </div>
  );
};

export default Layout;
