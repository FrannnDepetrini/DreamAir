import { useState } from "react";
import "../createUser/createUser.css";
import { useValidateInput } from "../../../customHooks/useValidateInput/UseValidateInput";

const CreateUser = ({ user }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("cliente");
  const [errors, setErrors] = useState({
    name: "1",
    lastName: "1",
    age: "1",
    nationality: "1",
    document: "1",
    phone: "1",
    validateMail: "1",
    validatePass: "1",
  });

  const [validateEmail, errorsEmail] = useValidateInput("email");
  const [validatePass, errorsPass] = useValidateInput();

  const handleInputName = (e) => {
    if (e.target.value == "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "El nombre no debe ser vacio",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }));
      setName(e.target.value);
    }
  };

  const handleInputLastName = (e) => {
    if (e.target.value == "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "El apellido no debe ser vacio",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "",
      }));
      setLastName(e.target.value);
    }
  };

  const handleInputAge = (e) => {
    if (e.target.value.length == "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: "La edad no debe ser vacia",
      }));
    } else if (e.target.value < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        age: "La edad no debe ser negativa",
      }));
    } else if (e.target.value.length > 2) {
      e.target.value = e.target.value.slice(0, 2); // Limitar a 2 dígitos
      setAge(e.target.value);
    } else {
      setAge(e.target.value);
      setErrors((prevErrors) => ({ ...prevErrors, age: "" }));
    }
  };

  const handleInputNationality = (e) => {
    if (e.target.value == "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nationality: "La nacionalidad no debe ser vacia",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nationality: "",
      }));
      setNationality(e.target.value);
    }
  };
  const handleInputDocument = (e) => {
    if (e.target.value == "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        document: "El documento no debe ser vacio",
      }));
    } else if (e.target.value.length < 7) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        document: "El documento debe tener al menos 8 digitos",
      }));
    } else if (e.target.value.length > 9) {
      e.target.value = e.target.value.slice(0, 9);
      setDocument(e.target.value);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        document: "",
      }));
      setDocument(e.target.value);
    }
  };
  const handleInputPhone = (e) => {
    if (e.target.value.length < 10) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "El numero debe tener 10 digitos",
      }));
    } else if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
      setPhone(e.target.value);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "",
      }));
      setPhone(e.target.value);
    }
  };

  const handleValidateEmail = (e) => {
    if (e.target.value != mail) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        validateMail: "Los emails no coinciden",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        validateMail: "",
      }));
    }
  };

  const handleValidatePassword = (e) => {
    if (e.target.value != password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        validatePass: "Las contraseñas no coinciden",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        validatePass: "",
      }));
    }
  };

  //Usan hook

  const handleInputEmail = (e) => {
    validateEmail(e.target.value);
    setMail(e.target.value);
  };

  const handleInputPassword = (e) => {
    validatePass(e.target.value);
    setPassword(e.target.value);
  };

  const isValidatedAllInputs = () => {
    if (userType == "aerolinea") {
      let objetToAirlines = {
        name: errors.name,
        mail: errorsEmail.msg,
        password: errorsPass.msg,
        validateMail: errors.validateMail,
        validatePass: errors.validatePass,
      };
      let result = !Object.values(objetToAirlines).every((val) => val === "");
      return result;
    }
    let objetToClients = {
      name: errors.name,
      mail: errorsEmail.msg,
      password: errorsPass.msg,
      validateMail: errors.validateMail,
      validatePass: errors.validatePass,
      lastName: errors.lastName,
      age: errors.age,
      nationality: errors.nationality,
      document: errors.document,
      phone: errors.phone,
    };
    let result = !Object.values(objetToClients).every((val) => val === "");

    return result;
  };

  const handleRegister = () => {
    if (isValidatedAllInputs()) {
      alert("Hay algun campo que falta de resolver");
    } else {
      if (userType == "cliente") {
        fetch("https://localhost:7001/api/UserClient/Create", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            email: mail,
            password: password,
            name: name,
            lastName: lastName,
            nationality: nationality,
            dni: document,
            phone: phone,
            age: age,
          }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return response.text().then((text) => {
                throw new Error(text);
              });
            }
          })
          .then(() => {
            alert("Usuario creado con exito");
          })
          .catch((error) => {
            const errorException = error.message.match(
              /This email already exists/
            )
              ? "Este email ya está en uso"
              : "Error inesperado, vuelva a intentar más tarde";
            alert(errorException);
          });
      } else {
        //fetch airline
        fetch("https://localhost:7001/api/UserAirline/Create", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            name: name,
            email: mail,
            password: password,
          }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              return response.text().then((text) => {
                throw new Error(text);
              });
            }
          })
          .then(() => {
            alert("Usuario creado con exito");
          })
          .catch((error) => {
            const errorException = error.message.match(
              /This email already exists/
            )
              ? "Este email ya está en uso"
              : "Error inesperado, vuelva a intentar más tarde";
            alert(errorException);
          });
      }
    }
  };

  return (
    <div className="div_container_create_users">
      <div className="data_register">
        <div className="div_select">
          <select onChange={(e) => setUserType(e.target.value)}>
            <option defaultValue value="cliente">
              Cliente
            </option>
            <option value="aerolinea">Aerolinea</option>
            {/* <option value="">Administrador</option> */}
          </select>
        </div>

        <div className="div_name">
          <div className="div_labelInput">
            <label
              className={
                errors.name != "1" && errors.name != "" ? "labelError" : ""
              }
            >
              {errors.name != "1" && errors.name != "" ? errors.name : "Nombre"}
            </label>

            <input
              onChange={(e) => handleInputName(e)}
              type="text"
              className="input100"
              placeholder="Nombre*"
              maxLength={20}
              minLength={1}
            />
          </div>
          {userType == "cliente" ? (
            <>
              <div className="div_labelInput">
                <label
                  className={
                    errors.lastName != "1" && errors.lastName != ""
                      ? "labelError"
                      : ""
                  }
                >
                  {errors.lastName != "1" && errors.lastName != ""
                    ? errors.lastName
                    : "Apellido"}
                </label>
                <input
                  onChange={(e) => handleInputLastName(e)}
                  type="text"
                  className="input100"
                  placeholder="Apellido*"
                  maxLength={20}
                  minLength={1}
                />
              </div>
              <div className="div_labelInput">
                <label
                  className={
                    errors.age != "1" && errors.age != "" ? "labelError" : ""
                  }
                >
                  {errors.age != "1" && errors.age != "" ? errors.age : "Edad"}
                </label>

                <input
                  type="number"
                  className="input100"
                  placeholder="Edad*"
                  min={0}
                  max={99}
                  onKeyDown={(e) => {
                    if (e.key.toLowerCase() == "e") {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => handleInputAge(e)}
                />
              </div>{" "}
            </>
          ) : null}
        </div>

        {userType == "cliente" ? (
          <>
            <div className="div_phone">
              <div className="div_labelInput">
                <label
                  className={
                    errors.nationality != "1" && errors.nationality != ""
                      ? "labelError"
                      : ""
                  }
                >
                  {errors.nationality != "1" && errors.nationality != ""
                    ? errors.nationality
                    : "Nacionalidad"}
                </label>

                <input
                  onChange={(e) => handleInputNationality(e)}
                  type="text"
                  className="input100"
                  placeholder="Nacionalidad*"
                  maxLength={20}
                  minLength={1}
                />
              </div>
              <div className="div_labelInput">
                <label
                  className={
                    errors.document != "1" && errors.document != ""
                      ? "labelError"
                      : ""
                  }
                >
                  {errors.document != "1" && errors.document != ""
                    ? errors.document
                    : "Documento"}
                </label>
                <input
                  type="number"
                  className="input100"
                  placeholder="Documento*"
                  min={1000000}
                  max={100000000}
                  onKeyDown={(e) => {
                    if (e.key.toLowerCase() == "e") {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => handleInputDocument(e)}
                />
              </div>
              <div className="div_labelInput">
                <label
                  className={
                    errors.phone != "1" && errors.phone != ""
                      ? "labelError"
                      : ""
                  }
                >
                  {errors.phone != "1" && errors.phone != ""
                    ? errors.phone
                    : "Telefono"}
                </label>
                <input
                  type="number"
                  className="input100"
                  placeholder="Telefono*"
                  onKeyDown={(e) => {
                    if (e.key.toLowerCase() == "e") {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => handleInputPhone(e)}
                />
              </div>
            </div>
          </>
        ) : null}
        <h3>{errorsEmail.email}</h3>
        <div className="div_email">
          <div className="div_labelInput">
            <label
              className={
                errorsEmail.msg != "1" && errorsEmail.msg != ""
                  ? "labelError"
                  : ""
              }
            >
              {errorsEmail.msg != "1" && errorsEmail.msg != ""
                ? errorsEmail.msg
                : "Email"}
            </label>
            <input
              onChange={(e) => handleInputEmail(e)}
              type="email"
              className="input100"
              placeholder="E-mail*"
            />
          </div>
          <div className="div_labelInput">
            <label
              className={
                errors.validateMail != "1" && errors.validateMail != ""
                  ? "labelError"
                  : ""
              }
            >
              {errors.validateMail != "1" && errors.validateMail != ""
                ? errors.validateMail
                : "Validar email"}
            </label>
            <input
              type="email"
              onChange={(e) => handleValidateEmail(e)}
              className="input100"
              placeholder="E-mail*"
            />
          </div>
        </div>

        <div className="div_password">
          <div className="div_labelInput">
            <label
              className={
                errorsPass.msg != "1" && errorsPass.msg != ""
                  ? "labelError"
                  : ""
              }
            >
              {errorsPass.msg != "1" && errorsPass.msg != ""
                ? errorsPass.msg
                : "Contraseña"}
            </label>

            <input
              onChange={(e) => handleInputPassword(e)}
              type="password"
              className="input100"
              placeholder="********"
            />
          </div>
          <div className="div_labelInput">
            <label
              className={
                errors.validatePass != "1" && errors.validatePass != ""
                  ? "labelError"
                  : ""
              }
            >
              {errors.validatePass != "1" && errors.validatePass != ""
                ? errors.validatePass
                : "Validar contraseña"}
            </label>
            <input
              type="password"
              className="input100"
              placeholder="********"
              onChange={(e) => handleValidatePassword(e)}
            />
          </div>
        </div>
      </div>
      <div className="button_register">
        <button onClick={handleRegister}>Crear</button>
      </div>
    </div>
  );
};

export default CreateUser;
