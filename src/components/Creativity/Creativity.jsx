import React from "react";
import "./Creativity.css";
import bgImage_1 from "../../assets/images/mountain-1.jpg";
import bgImage_2 from "../../assets/images/mountain-2.jpg";
import bgImage_3 from "../../assets/images/mountain-3.jpg";
import bgImage_4 from "../../assets/images/mountain-4.jpg";
import bgImage_5 from "../../assets/images/mountain-5.jpg";
import bgImage_6 from "../../assets/images/mountain-6.jpg";
import bgImage_7 from "../../assets/images/mountain-7.jpg";
import bgImage_8 from "../../assets/images/mountain-8.jpg";
import bgImage_9 from "../../assets/images/mountain-9.jpg";
import bgImage_10 from "../../assets/images/mountain-10.jpg";
import bgImage_11 from "../../assets/images/mountain-11.jpg";
import bgImage_12 from "../../assets/images/mountain-12.jpg";

const Creativity = () => {
  return (
    <div className="creativity-section">
      <div className="creativity-container">
        <div className="creativity-heading">
          <h5>BOOST CREATIVITY</h5>
          <h1>With our coded pages</h1>
          <p>
            The easiest way to get started is to use one of our
            <br />
            pre-built example pages.
          </p>
        </div>
      </div>
      <div className="creativity-main">
        <div className="creativity-left">
          <div className="creativity-first">
            <div className="card-form">
              <img src={bgImage_1} alt="" className="card-image" />
              <h3>Navbars</h3>
              <p>10 Examples</p>
            </div>

            <div className="card-form">
              <img src={bgImage_2} alt="" className="card-image" />
              <h3>Features</h3>
              <p>14 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_3} alt="" className="card-image" />
              <h3>Pricing</h3>
              <p>8 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_4} alt="" className="card-image" />
              <h3>FAQ</h3>
              <p>1 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_5} alt="" className="card-image" />
              <h3>Blog Posts</h3>
              <p>11 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_6} alt="" className="card-image" />
              <h3>Testimonials</h3>
              <p>11 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_7} alt="" className="card-image" />
              <h3>Teams</h3>
              <p>6 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_8} alt="" className="card-image" />
              <h3>Stats</h3>
              <p>3 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_9} alt="" className="card-image" />
              <h3>Call to Actions</h3>
              <p>8 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_10} alt="" className="card-image" />
              <h3>Applications</h3>
              <p>6 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_11} alt="" className="card-image" />
              <h3>Logo Areas</h3>
              <p>4 Examples</p>
            </div>
            <div className="card-form">
              <img src={bgImage_12} alt="" className="card-image" />
              <h3>Footers</h3>
              <p>10 Examples</p>
            </div>
          </div>
        </div>
        <div className="creativity-right">
          <h2>
            Presentation Pages for Company, Landing Pages, Blogs and Support
          </h2>
          <p>
            These is just a small selection of the multiple possibitilies you
            have. Focus on the business, not on the design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creativity;
