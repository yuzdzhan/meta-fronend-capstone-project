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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/reservation">Reservations</a>
              </li>
              <li>
                <a href="/order">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>

          <nav className="contacts">
            <h3 className="footerMenuHeading ">Contacts</h3>
            <ul className="footerMenu">
              <li>
                <a href={"/"}>Address</a>
              </li>
              <li>
                <a href={"/"}>Phone Number</a>
              </li>
              <li>
                <a href={"/"}>Email</a>
              </li>
            </ul>
          </nav>

          <nav className="socialMedia">
            <h3 className="footerMenuHeading ">Social Media as</h3>
            <ul className="footerMenu">
              <li>
                <a href="facebook.com">Facebook</a>
              </li>
              <li>
                <a href="instagram.com">Instagram</a>
              </li>
              <li>
                <a href="whatsapp.com">Whatsapp</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
