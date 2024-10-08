import "./register.css";

const Register = () => {
  return (
    <div className="div_container_reg">
      <div className="data_register">
        <div className="div_name">
          <input type="text" className="input100" placeholder="Nombre*" />
          <input type="text" className="input100" placeholder="Apellido*" />
          <input
            type="date"
            className="input100"
            placeholder="Fecha nacimiento*"
          />
        </div>

        <div className="div_phone">
          <input type="text" className="input100" placeholder="Nacionalidad*" />
          <input type="number" className="input100" placeholder="Documento*" />
          <input type="number" className="input100" placeholder="Telefono*" />
        </div>

        <div className="div_email">
          <input type="email" className="input100" placeholder="E-mail*" />
          <div className="div_labelInput">
            <label>Validar mail</label>
            <input type="email" className="input100" placeholder="E-mail*" />
          </div>
        </div>

        <div className="div_password">
          <input type="password" className="input100" placeholder="********" />
          <div className="div_labelInput">
            <label>Validar contraseña</label>
            <input
              type="password"
              className="input100"
              placeholder="********"
            />
          </div>
        </div>
      </div>
      <div className="button_register">
        <button>Registrar</button>
      </div>
    </div>
  );
};

export default Register;