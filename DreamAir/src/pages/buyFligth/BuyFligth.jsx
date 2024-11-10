import "./BuyFligth.css";
import { IoAirplaneSharp, FaArrowLeft } from "../../utils/icons/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../services/authContext/authContext.jsx";
const BuyFligth = () => {
  const [activeIndex, setActiveIndex] = useState("");
  const [activeIndex1, setActiveIndex1] = useState("");
  const { user } = useContext(AuthContext);

  const [fee, setFee] = useState(0);
  const focusOption = (currentOpt) => {
    setActiveIndex(currentOpt);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const flight = location.state;
  const handleBuy = () => {
    fetch("https://localhost:7001/api/Ticket/Create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        classSeat: activeIndex1,
        flightId: flight.id,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Compra exitosa");
      } else {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }
    });

    // .then((response) => {
    //   if (response.ok) {
    //     alert("Compra exitosa");
    //   } else {
    //     return response.text().then((text) => {
    //       throw new Error(text);})
    //   }
    // })
  };

  let subtotal =
    parseFloat(flight.passengers) * parseFloat(flight.priceDefault);
  const focusOption1 = (currentopt) => {
    setActiveIndex1(currentopt);

    setFee(
      currentopt === ""
        ? "-----"
        : currentopt == "FirstClass"
        ? `${flight.priceDefault * 0.5}`
        : `${flight.priceDefault * 0.3}`
    );
    // setTaxes(
    //   0.21 * (parseFloat(fee) * parseFloat(flight.passengers) + subtotal)
    // );
  };

  let dateGo = new Date(flight.dateGo);

  let dateBack = new Date(flight.dateBack);
  const opts = { year: "numeric", month: "short", day: "numeric" };
  return (
    <div className="div_container_buy_flight">
      <div className="user_data">
        <h5 onClick={() => navigate(-1)}>
          {" "}
          <FaArrowLeft /> Volver a la página anterior{" "}
        </h5>
        <div className="div_h2">
          <h2>Ya casi conseguis el vuelo de tus sueños!</h2>
          <h2>Completa los datos y listo!</h2>
        </div>

        <div className="user_info">
          <form className="form">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              className="form-input"
            />

            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Apellido"
              className="form-input"
            />

            <label htmlFor="nacionalidad" className="form-label">
              Nacionalidad
            </label>
            <input
              type="text"
              id="nacionalidad"
              name="nacionalidad"
              placeholder="Argentina"
              className="form-input"
            />

            <label htmlFor="dni" className="form-label">
              DNI (Documento Nacional de Identidad)
            </label>
            <input
              type="number"
              id="dni"
              name="dni"
              placeholder="45838091"
              className="form-input"
              min={1000000}
              max={100000000}
              onChange={(e) => {
                if (e.target.value.length > 9) {
                  e.target.value = e.target.value.slice(0, 9); // Limitar a 8 dígitos
                }
              }}
            />

            <label htmlFor="Edad" className="form-label">
              Edad
            </label>
            <input
              type="number"
              id="edad"
              name="edad"
              placeholder="21"
              min={0}
              max={99}
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  e.target.value = e.target.value.slice(0, 2); // Limitar a 2 dígitos
                }
              }}
              className="form-input"
            />

            <label className="form-label">Sexo</label>
            <div className="button-group">
              <button
                onClick={() => focusOption("Man")}
                className={activeIndex == "Man" ? "button_selected" : "button"}
                type="button"
              >
                Masculino
              </button>
              <button
                onClick={() => focusOption("Female")}
                className={
                  activeIndex == "Female" ? "button_selected" : "button"
                }
                type="button"
              >
                Femenino
              </button>
            </div>

            <label className="form-label">Clase</label>
            <div className="button-group">
              <button
                onClick={() => focusOption1("Economic")}
                className={
                  activeIndex1 == "Economic" ? "button_selected" : "button"
                }
                type="button"
              >
                Económica
              </button>
              <button
                onClick={() => focusOption1("FirstClass")}
                className={
                  activeIndex1 == "FirstClass" ? "button_selected" : "button"
                }
                type="button"
              >
                Primera clase
              </button>
            </div>
          </form>
        </div>
        <h2>A donde enviamos tu(s) voucher?</h2>
        <div className="send_voucher">
          <form className="purchase-form">
            <label htmlFor="email" className="purchase-form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@gmail.com"
              className="purchase-form-input"
            />

            <label htmlFor="confirmEmail" className="purchase-form-label">
              Confirma tu email
            </label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              placeholder="ejemplo@gmail.com"
              className="purchase-form-input"
            />
          </form>
        </div>
        <div className="buy_button">
          <button onClick={handleBuy} type="button" className="purchase_button">
            Comprar
          </button>
        </div>
      </div>
      <div className="fligth_data">
        <div className="payment_info">
          <h2>Detalles del pago</h2>
          <div className="details">
            <div className="details2">
              <h5>Vuelo(s) para {flight.passengers} persona(s) </h5>
              <p>${subtotal}</p>
            </div>

            <div className="details2">
              <h5>Recargo por clase {activeIndex1} </h5>
              <p>${fee}</p>
            </div>

            {/* <div className="details2">
              <h5>Impuestos </h5>
              <p> ${taxes}</p>
            </div> */}
          </div>
          <div className="total_payment">
            <h2>Total</h2>
            <p>${parseFloat(fee) + subtotal}</p>
          </div>
        </div>
        <div className="fligth_info">
          <h2>Detalles del vuelo</h2>
          <div className="from-to">
            <IoAirplaneSharp className="plane" />
            <p>
              {flight.departure} - {flight.arrival}
            </p>
            {/* <p>Rosario - Buenos Aires(BUE)</p> */}
          </div>
          <div className="fligth_date">
            <div className="going">
              {flight.travel == "Ida" ? (
                <>
                  {" "}
                  <h4>IDA</h4>
                  <p>{dateGo.toLocaleDateString("es-ES", opts)}</p>
                  <p>
                    {flight.timeDepartureGo} - {flight.timeArrivalGo}
                  </p>
                </>
              ) : (
                <>
                  <div>
                    <h4>IDA</h4>
                    <p>{dateGo.toLocaleDateString("es-ES", opts)}</p>
                    <p>
                      {flight.timeDepartureGo} - {flight.timeArrivalGo}
                    </p>
                  </div>
                  <div>
                    <h4>VUELTA</h4>
                    <p>{dateBack.toLocaleDateString("es-ES", opts)}</p>
                    <p>
                      {flight.timeDepartureBack} - {flight.timeArrivalBack}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <p>{flight.airline}</p>
        </div>
      </div>
    </div>
  );
};

export default BuyFligth;
