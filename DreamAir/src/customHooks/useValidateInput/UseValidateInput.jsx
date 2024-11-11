//     case "password": {
//       break;
//     }
//     case "age": {
//       break;
//     }
//     case "nationality": {
//       break;
//     }
//     case "name": {
//       break;
//     }
//     case "phoneNumber": {
//       break;
//     }
//     case "document": {
//       break;
//     }
//     case "genericText": {
//       break;
//     }
//     case "lastName": {
//       break;
//     }
//     case "times": {
//       break;
//     }
//     case "genericNumber": {
//       break;
//     }
//   }
// };

import { useState } from "react";

export function useValidateInput(inputType = "genericText") {
  const [errores, setErrores] = useState({ msg: 1 });

  const validateInput = (text) => {
    let errorMsg;
    if (text == "") {
      errorMsg = "El campo no debe ser vacio";
    } else {
      switch (inputType) {
        case "email": {
          if (!text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errorMsg = "Email invalido";
          } else {
            errorMsg = "";
          }
          break;
        }
        case "genericText": {
          if (text.length > 20) {
            errorMsg = "No mas de 20 caracteres";
          } else {
            errorMsg = "";
          }
          break;
        }
      }
    }
    setErrores({
      msg: errorMsg,
    });
  };

  return [validateInput, errores];
}
