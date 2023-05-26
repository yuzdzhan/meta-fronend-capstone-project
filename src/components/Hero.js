import heroImage from "../images/restauranfood.png";
import "./Hero.css";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
  return (
    <section id="heroSection">
      <div className="heroContainer">
        <div className="row">
          <div className="col">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              we are a family owned Mediterranean restuarant, focused on
              traditional recipes served with a modern twist.
            </p>
            <PrimaryButton
              onClick={() => (window.location = "/book")}
              type="button"
              value="Reserve a Table"
            />
          </div>
          <div className="col">
            <img src={heroImage} alt="heroImage" className="heroImage" />
          </div>
        </div>
      </div>
    </section>
  );
}
