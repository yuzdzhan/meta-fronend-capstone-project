export function Highlights() {
  return <section className="hero">
    <header className="header">
      <h2>Specials</h2>
      <input type="button" value="Online Menu" />
    </header>
    <div className="main">

      <a href="#">
        <section className="dish">
          <img src="" className="dish_image" />
          <div className="dish_first_row">
            <div className="dish_name">Greek salad</div>
            <div className="dish_price">$12.99</div>
          </div>
          <p className="dish_description">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <span>Order a delivery</span>
        </section>
      </a>

      <a href="#">
        <section className="dish">
          <img src="" className="dish_image" />
          <div className="dish_first_row">
            <div className="dish_name">Brucheta</div>
            <div className="dish_price">$5.99</div>
          </div>
          <p className="dish_description">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <span>Order a delivery</span>
        </section>
      </a>

      <a href="#">
        <section className="dish">
          <img src="" className="dish_image" />
          <div className="dish_first_row">
            <div className="dish_name">Lemon desert</div>
            <div className="dish_price">$12.99</div>
          </div>
          <p className="dish_description">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <span>Order a delivery</span>
        </section>
      </a>
    </div>
  </section>;
}

