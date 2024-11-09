import "./footer.css";
import { FaFacebookF, FaInstagram } from "../../../utils/icons/icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  const handleNavigate = () => {
    Navigate("/support");
  };
  return (
    <div className="container_footer">
      <div className="container_our_info">
        <h2>Nuestra empresa</h2>
        <p onClick={handleNavigate}>Quienes somos</p>
        <p onClick={handleNavigate}>Por que elegirnos</p>
      </div>
      <div className="container_info_extra">
        <h2>Mas</h2>
        <p onClick={handleNavigate}>Aerolineas</p>
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
