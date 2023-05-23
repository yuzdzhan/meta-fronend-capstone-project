import { useState } from "react";
import menuIcon from "../images/menu_icon.png";
import menuCloseIcon from "../images/x_icon.png";
import "./Nav.css";

export function Nav() {
  const [mobileVisible, setMobileVisible] = useState(false);

  return (
    <>
      <nav className={`nav ${mobileVisible && "mobile_visible"}`}>
        <ul>
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
      {!mobileVisible && (
        <a onClick={() => setMobileVisible(true)} className="mobile_menu">
          <img src={menuIcon} alt="menu" />{" "}
        </a>
      )}
      {mobileVisible && (
        <a onClick={() => setMobileVisible(false)} className="mobile_menu close">
          <img src={menuCloseIcon} alt="menu" />{" "}
        </a>
      )}
    </>
  );
}
