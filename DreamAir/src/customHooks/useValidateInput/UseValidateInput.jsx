import { useState } from "react";

export function useValidateInput(typeInput) {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const validate = (text) => {
    let errorMessage = "";
    let boolean = false;
    setValue(text);
    switch (typeInput) {
      case "email": {
        if (text === "") {
          console.log(text === "", 123);
          errorMessage = "El email no debe ser vacío";
        } else if (!text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          console.log(!text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), 124);
          errorMessage = "Email inválido";
        } else {
          console.log("esta bien pibe");
          boolean = true;
          errorMessage = "";
        }
        break;
      }
      case "password": {
        break;
      }
      case "age": {
        break;
      }
      case "nationality": {
        break;
      }
      case "name": {
        break;
      }
      case "phoneNumber": {
        break;
      }
      case "document": {
        break;
      }
      case "genericText": {
        break;
      }
      case "lastName": {
        break;
      }
      case "times": {
        break;
      }
      case "genericNumber": {
        break;
      }
    }
    setError(errorMessage);
    setIsValid(boolean);
    // console.log(errorMessage, "!");
  };

  // if (shouldValidate) validate();

  return { isValid, error, validate, value };
}
