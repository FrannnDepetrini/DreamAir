import "../pageSupport/pageSupport.css";

const PageSupport = () => {
  return (
    <>
      <div className="div_container_pageSupport">
        <h2 className="h2_support">Soporte</h2>
        <h3 className="h3_support">¿Quienes somos?</h3>
        <p className="p_support">
          En DreamAir, nos dedicamos a conectar destinos y sueños. Somos una
          empresa de aerolíneas apasionada por la aviación, la innovación y el
          servicio al cliente. Desde nuestros inicios, nos hemos comprometido a
          ofrecer experiencias de viaje seguras, cómodas y accesibles, con el
          objetivo de llevar a nuestros pasajeros a sus destinos de manera
          eficiente y placentera. Nuestro equipo está formado por profesionales
          altamente capacitados, desde pilotos con años de experiencia hasta
          personal de cabina y de atención al cliente que comparten la misma
          misión: brindar un servicio excepcional en cada vuelo. Nos enorgullece
          decir que hemos construido una empresa que se centra en las personas,
          tanto en nuestros empleados como en nuestros pasajeros, entendiendo
          que cada viaje es una oportunidad de crear recuerdos inolvidables y de
          cumplir metas personales y profesionales.
        </p>
        <h3 className="h3_support">¿Por que elegirnos?</h3>
        <p className="p_support">
          Porque somos más que una aerolínea; somos su compañero de viaje. Nos
          enfocamos en brindar la mejor relación calidad-precio, con un enfoque
          constante en la satisfacción del cliente y en la creación de
          experiencias de vuelo que se adapten a cada pasajero. Al elegirnos,
          está eligiendo una empresa que valora la comodidad, la puntualidad y
          la atención al detalle.
        </p>
        <div className="div_circle">
          <h3 className="h3_support_circle">Envianos tus inconvenientes</h3>
          <form action="" className="form_pageSupport">
            <label htmlFor="">Nombre y Apellido:</label>
            <input type="text" placeholder="Nombre y Apellido" />
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="">Comentario:</label>
            <textarea placeholder="Detallanos tus problemas..."></textarea>
            <button type="button" className="button_support">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PageSupport;
