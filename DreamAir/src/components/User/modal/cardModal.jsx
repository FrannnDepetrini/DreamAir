import { useState } from "react";
import "./cardModal.css";
import { FcGoogle, FaFacebookF, GrGoogle } from "../../../utils/icons/icons";

const CardModal = ({ handleLogin, isOpen, closeModal }) => {
  const [googleFocus, setgoogleFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };
  const handlerLogIn = async (e) => {
    e.preventDefault();
    const res = await fetch("https://localhost:7001/api/Autentication/login", {
      method: "POST",
      headers: {
        "content-type": "Application/Json",
      },
      body: JSON.stringify({ email, password }),
    });

    try {
      if (!res.ok) throw res;

      const token = await res.text();
      handleLogin(email, token);
    } catch (err) {
      console.error(err);
    }
    closeModal();
  };
  return (
    <>
      <div
        onClick={closeModal}
        className={`modal ${isOpen ? "" : "closed"}`}
      ></div>
      <div className={`modal-content ${isOpen ? "" : "closed"}`}>
        <h2 className="modal-title">
          Bienvenido a{" "}
          <img
            style={{ width: "200px" }}
            src="https://github.com/FrannnDepetrini/DreamAir/blob/main/DreamAir/src/utils/images/LogoDreamAirPH.png?raw=true"
            alt=""
          />
        </h2>

        <form onSubmit={handlerLogIn} className="login-form">
          <br />

          <input
            onChange={handleSetEmail}
            type="email"
            id="emailmodal"
            name="email"
            placeholder="Mail"
            required
          />

          <input
            onChange={handleSetPass}
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
    </>
  );
};

export default CardModal;
