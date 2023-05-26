import { useState } from "react";
import menuIcon from "../images/menu_icon.png";
import menuCloseIcon from "../images/x_icon.png";
import "./Nav.css";
import { Link } from "react-router-dom";

export function Nav() {
  const [mobileVisible, setMobileVisible] = useState(false);

  const showMobileMenu = (e) => {
    e.preventDefault();
    setMobileVisible(true);
  }

  const hideMobileMenu = (e) => {
    e.preventDefault();
    setMobileVisible(false);
  }

  return (
    <>
      <nav className={`nav ${mobileVisible && "mobile_visible"}`}>
        <ul>
          <li>
            <Link to={'/'}>About</Link>
          </li>
          <li>
            <Link to={'/'}>Menu</Link>
          </li>
          <li>
            <Link to={'/book'}>Reservations</Link>
          </li>
          <li>
            <Link to={'/'}>Order Online</Link>
          </li>
          <li>
            <Link to={'/'}>Login</Link>
          </li>
        </ul>
      </nav>
      {!mobileVisible && (
        <a href="/" onClick={showMobileMenu} className="mobile_menu">
          <img src={menuIcon} alt="menu" />{" "}
        </a>
      )}
      {mobileVisible && (
        <a href="/" onClick={hideMobileMenu} className="mobile_menu close">
          <img src={menuCloseIcon} alt="menu" />{" "}
        </a>
      )}
    </>
  );
}
