import { useState } from "react";
import "./cardModal.css";
import { FcGoogle, FaFacebookF, GrGoogle } from "../../utils/icons/icons";

const CardModal = () => {
  const [googleFocus, setgoogleFocus] = useState(false);
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">
          Bienvenido a{" "}
          <img
            style={{ width: "200px" }}
            src="https://github.com/FrannnDepetrini/DreamAir/blob/main/DreamAir/src/utils/images/LogoDreamAirPH.png?raw=true"
            alt=""
          />
        </h2>

        <form className="login-form">
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
          <button className="facebook-btn">
            <FaFacebookF />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
