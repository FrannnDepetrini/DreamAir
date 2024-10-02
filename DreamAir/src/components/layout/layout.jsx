import Header from "../header/header";
import Aside from "../aside/aside";
import "../layout/layout.css";
import { useState } from "react";
import Footer from "../footer/footer";
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
    <div className="container_layout">
      <Header toggleMenu={handlerMenu} className="header" />
      <Aside
        isMenuOpen={isMenuOpen}
        toggleMenuOpen={handlerMenuOpen}
        toggleMenuClose={handlerMenuClose}
        className="aside"
      />
      <div className={isMenuOpen ? "main_adjusted" : "main"}>
        <h3>main</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
