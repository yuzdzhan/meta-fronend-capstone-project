import './Testimonials.css'
import  personImg from '../images/1684242751674.jpeg';

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="testimonialsContainer">
        <h1>Testimonials</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="details">
                <img src={personImg} alt="" />
                <p>John</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="details">
                <img src={personImg} alt="" />
                <p>John</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="details">
                <img src={personImg} alt="" />
                <p>John</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="details">
                <img src={personImg} alt="" />
                <p>John</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )

}

