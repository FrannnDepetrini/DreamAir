import React from "react";
import "./cardModal.css";

const CardModal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">
          Bienvenido a{" "}
          <span className="brand">
            Dream<span className="brand-highlight">Air</span>
          </span>
        </h2>

        <form className="login-form">
          <button type="submit" className="login-btn">
            Iniciar sesión
          </button>
          <br />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Mail"
            required
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Contraseña"
            required
          />
        </form>

        <div className="register-link">
          <p>
            ¿No tienes cuenta aún? <a href="/register">Regístrate</a>
          </p>
        </div>

        <div className="social-login">
          <button className="google-btn">Google</button>
          <button className="facebook-btn">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
