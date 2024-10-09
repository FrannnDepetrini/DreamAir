import "./BuyFligth.css";
import { IoAirplaneSharp, FaArrowLeft } from "../../utils/icons/icons";
import { useNavigate } from "react-router-dom";
const BuyFligth = () => {
  const navigate = useNavigate();
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
              type="text"
              id="dni"
              name="dni"
              placeholder="45838091"
              className="form-input"
            />

            <label htmlFor="fechaNacimiento" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              className="form-input"
            />

            <label className="form-label">Sexo</label>
            <div className="button-group">
              <button className="button" type="button">
                Masculino
              </button>
              <button className="button" type="button">
                Femenino
              </button>
            </div>

            <label className="form-label">Clase</label>
            <div className="button-group">
              <button className="button" type="button">
                Económica
              </button>
              <button className="button" type="button">
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
          <button type="submit" className="purchase_button">
            Comprar
          </button>
        </div>
      </div>
      <div className="fligth_data">
        <div className="payment_info">
          <h2>Detalles del pago</h2>
          <div className="details">
            <div className="details2">
              <h5>Vuelo(s) para n persona(s) </h5>
              <p>$85.130</p>
            </div>

            <div className="details2">
              <h5>Recargo por clase n </h5>
              <p>$32.700</p>
            </div>

            <div className="details2">
              <h5>Impuestos </h5>
              <p> $8.250</p>
            </div>
          </div>
          <div className="total_payment">
            <h2>Total</h2>
            <p>$128.902</p>
          </div>
        </div>
        <div className="fligth_info">
          <h2>Detalles del vuelo</h2>
          <div className="from-to">
            <IoAirplaneSharp className="plane" />
            <p>Buenos Aires(BUE) - Rosario</p>
            <p>Rosario - Buenos Aires(BUE)</p>
          </div>
          <div className="fligth_date">
            <div className="going">
              <h4>IDA</h4>
              <p>02 Oct. 2024</p>
              <p>06:50 - 7:50</p>
            </div>
            <div className="going">
              <h4>VUELTA</h4>
              <p>09 Oct. 2024</p>
              <p>16:50 - 17:50</p>
            </div>
          </div>
          <p>Aerolines Argentinas</p>
        </div>
      </div>
    </div>
  );
};

export default BuyFligth;
