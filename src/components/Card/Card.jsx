import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="card-container">
        <div class="card-first">
          <div class="icon">🏳️</div>
          <h2>Getting Started</h2>
          <p>
            Check the possible ways of working with our product and the
            necessary files for building your own project.
          </p>
          <a href="#">Let's start →</a>
        </div>

        <div class="card-third">
          <div class="icon">📦</div>
          <h2>Install Package</h2>
          <p>
            Learn how to install our package and set up your environment to
            start using all features smoothly.
          </p>
          <a href="#">Install now →</a>
        </div>

        <div class="card-third">
          <div class="icon">⚙️</div>
          <h2>Configure</h2>
          <p>
            Customize the configuration files to suit your project's needs and
            improve productivity improve productivity..
          </p>
          <a href="#">Configure →</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
