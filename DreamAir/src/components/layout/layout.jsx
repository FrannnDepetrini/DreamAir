import Header from "../User/header/header";
import Aside from "../User/aside/aside";
import Footer from "../User/footer/footer";
import "../layout/layout.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CardModal from "../User/modal/cardModal";
import { AuthContext } from "../../services/authContext/AuthContext";
import { ThemeContext } from "../../services/themeContext/ThemeContext";
const Layout = ({ isModalVisible, showModal, closeModal }) => {
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleLogin, user, handleLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlerMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handlerMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handlerLogOut = () => {
    handleLogout();
    navigate("/");
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
          handleLogOut={handlerLogOut}
          theme={theme}
          className="header"
        />
        <Aside
          isMenuOpen={isMenuOpen}
          toggleMenuOpen={handlerMenuOpen}
          toggleMenuClose={handlerMenuClose}
          className="aside"
          userRole={user.role}
          showModal={showModal}
          theme={theme}
        />
        <Outlet className={isMenuOpen ? "main_adjusted" : "main"}></Outlet>

        <Footer
          theme={theme}
          className={isMenuOpen ? "footer_adjusted" : "footer"}
        />
      </div>
      <CardModal
        theme={theme}
        handleLogin={handleLogin}
        isOpen={isModalVisible}
        closeModal={closeModal}
      />
    </>
  );
};

export default Layout;
