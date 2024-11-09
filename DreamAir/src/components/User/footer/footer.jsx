import "./footer.css";
import { FaFacebookF, FaInstagram } from "../../../utils/icons/icons";

const Footer = () => {
  return (
    <div className="container_footer">
      <div className="container_our_info">
        <h2>Nuestra empresa</h2>
        <p>Quienes somos</p>
        <p>Por que elegirnos</p>
      </div>
      <div className="container_info_extra">
        <h2>Mas</h2>
        <p>Aerolineas</p>
      </div>
      <div className="container_social_media">
        <div className="link_instagram">
          <FaInstagram className="icon_ig" />
        </div>
        <div className="link_facebook">
          <FaFacebookF className="icon_fb" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
