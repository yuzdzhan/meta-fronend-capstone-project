import { Nav } from "./Nav";
import logo from "../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="container header">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <Nav />
    </header>
  );
}
