import { Link } from "react-router-dom";
import FooterLogo from "../images/Asset 9@4x.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src={FooterLogo} width={"80px"} height={"140px"} alt="Logo" />
        <div className="footerNavContainer">
          <nav className="footerNav">
            <h3 className="footerMenuHeading ">Navigation</h3>
            <ul className="footerMenu">
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>About</Link>
              </li>
              <li>
                <Link to='/'>Menu</Link>
              </li>
              <li>
                <Link to='/book'>Reservations</Link>
              </li>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Login</Link>
              </li>
            </ul>
          </nav>

          <nav className="contacts">
            <h3 className="footerMenuHeading ">Contacts</h3>
            <ul className="footerMenu">
              <li>
                <Link to='/'>Address</Link>
              </li>
              <li>
                <Link to='/'>Phone Number</Link>
              </li>
              <li>
                <Link to='/'>Email</Link>
              </li>
            </ul>
          </nav>

          <nav className="socialMedia">
            <h3 className="footerMenuHeading ">Social Media as</h3>
            <ul className="footerMenu">
              <li>
                <Link to='https://facebook.com' target="_blank">Facebook</Link>
              </li>
              <li>
                <Link to='https://instagram.com' target="_blank">Instagram</Link>
              </li>
              <li>
                <Link to='https://whatsapp.com' target="_blank">Whatsapp</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
