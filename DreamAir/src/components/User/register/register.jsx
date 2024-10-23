import { useEffect, useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const navigate = useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleNationality = (e) => {
    setNationality(e.target.value);
  };
  const handleDNI = (e) => {
    setDni(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailValidation = (e) => {
    setEmailValidation(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordValidation = (e) => {
    setPasswordValidation(e.target.value);
  };
  const handleRegister = () => {
    if (email === emailValidation && password === passwordValidation) {
      const createClient = {
        email,
        password,
        name,
        lastName,
        nationality,
        dni,
        phone,
        age,
      };

      fetch("https://localhost:7001/api/UserClient/Create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createClient),
      }).then((response) => {
        if (response.ok) {
          navigate("/searchFlights");
          return response.json(), alert("Usuario registrado con exito");
        } else {
          throw new Error("The response has some errors");
        }
      });
    } else {
      alert("El email o la contraseña, no coinciden.");
    }
  };

  return (
    <div className="div_container_reg">
      <div className="data_register">
        <div className="div_name">
          <input
            type="text"
            className="input100"
            placeholder="Nombre*"
            onChange={handleName}
          />
          <input
            type="text"
            className="input100"
            placeholder="Apellido*"
            onChange={handleLastName}
          />
          <input
            type="number"
            className="input100"
            placeholder="Ingrese su edad*"
            onChange={handleAge}
          />
        </div>

        <div className="div_phone">
          <input
            type="text"
            className="input100"
            placeholder="Nacionalidad*"
            onChange={handleNationality}
          />
          <input
            type="number"
            className="input100"
            placeholder="Documento*"
            onChange={handleDNI}
          />
          <input
            type="number"
            className="input100"
            placeholder="Telefono*"
            onChange={handlePhone}
          />
        </div>

        <div className="div_email">
          <input
            type="email"
            className="input100"
            placeholder="E-mail*"
            onChange={handleEmail}
          />
          <div className="div_labelInput">
            <label>Validar mail</label>
            <input
              type="email"
              className="input100"
              placeholder="E-mail*"
              onChange={handleEmailValidation}
            />
          </div>
        </div>

        <div className="div_password">
          <input
            type="password"
            className="input100"
            placeholder="********"
            onChange={handlePassword}
          />
          <div className="div_labelInput">
            <label>Validar contraseña</label>
            <input
              type="password"
              className="input100"
              placeholder="********"
              onChange={handlePasswordValidation}
            />
          </div>
        </div>
      </div>
      <div className="button_register">
        <button type="button" onClick={handleRegister}>
          Registrar
        </button>
      </div>
    </div>
  );
};

export default Register;
