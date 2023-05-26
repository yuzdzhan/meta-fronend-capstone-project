import greekSalad from "../images/greek salad.png";
import bruchetta from "../images/Bruchetta.png";
import lemonDesert from "../images/lemon dessert.png";
import bikeIcon from "../images/ic_sharp-pedal-bike.svg";
import "./Highlights.css";
import { PrimaryButton } from "./PrimaryButton";

export function Highlights() {
  return (
    <section id="weekSpecial">
      <div className="weekSpecialContainer">
        <div className="head">
          <h2>This weeks specials!</h2>
          <PrimaryButton
            onClick={() => (window.location = "/book")}
            type="button"
            value="Reserve a Table"
          />
        </div>
        <div className="content">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={greekSalad} alt="cardImage" className="cardImage" />
                <div className="cardContent">
                  <div className="cardHeading">
                    <h3 className="title">Greek Salad</h3>
                    <p className="price">$12.99</p>
                  </div>

                  <p className="description">
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>

                  <div className="order">
                    <p>Order a delivery </p>
                    <img src={bikeIcon} alt="bikeIcon" className="bikeIcon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={bruchetta} alt="cardImage" className="cardImage" />
                <div className="cardContent">
                  <div className="cardHeading">
                    <h3 className="title">Bruchetta</h3>
                    <p className="price">$5.99</p>
                  </div>

                  <p className="description">
                    Our Bruchetta is made from grilled bread that has been
                    smeared with garlic and seasoned with salt and olive oil.
                  </p>

                  <div className="order">
                    <p>Order a delivery </p>
                    <img src={bikeIcon} alt="bikeIcon" className="bikeIcon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={lemonDesert} alt="cardImage" className="cardImage" />
                <div className="cardContent">
                  <div className="cardHeading">
                    <h3 className="title">Lemon Dessert</h3>
                    <p className="price">$5.00</p>
                  </div>

                  <p className="description">
                    This comes straight from grandma's recipe book, every last
                    ingredient has been sourced and is as authentic as can be
                    imagined.
                  </p>

                  <div className="order">
                    <p>Order a delivery </p>
                    <img src={bikeIcon} alt="bikeIcon" className="bikeIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
