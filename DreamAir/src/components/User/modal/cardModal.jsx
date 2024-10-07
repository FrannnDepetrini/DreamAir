import { useState } from "react";
import "./cardModal.css";
import { FcGoogle, FaFacebookF, GrGoogle } from "../../../utils/icons/icons";

const CardModal = ({ showModal, closeModal }) => {
  const [googleFocus, setgoogleFocus] = useState(false);
  // const handleCloseModal = () => {
  //   closeModal(false);
  // };

  const handleLogIn = (e) => {
    e.preventDefault();
    closeModal(false);
  };
  return (
    <div className={showModal ? "modal" : "modal-closed"}>
      <div className="modal-content">
        <h2 className="modal-title">
          Bienvenido a{" "}
          <img
            style={{ width: "200px" }}
            src="https://github.com/FrannnDepetrini/DreamAir/blob/main/DreamAir/src/utils/images/LogoDreamAirPH.png?raw=true"
            alt=""
          />
        </h2>

        <form onSubmit={handleLogIn} className="login-form">
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Mail"
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <button type="submit" className="login-btn">
            Iniciar sesion
          </button>
        </form>

        <div className="register-link">
          <p>
            ¿No tienes cuenta aún? <a href="/register">Regístrate</a>
          </p>
        </div>

        <div className="social-login">
          <button
            onMouseEnter={() => setgoogleFocus(true)}
            onMouseLeave={() => setgoogleFocus(false)}
            className="google-btn"
          >
            {googleFocus ? <GrGoogle fontSize={"0.8rem"} /> : <FcGoogle />}
          </button>
          <button type="submit" className="facebook-btn">
            <FaFacebookF />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
