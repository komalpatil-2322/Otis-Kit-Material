import React from "react";
import "./Complex.css";
import bgImage from "../../assets/images/background-img.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const Complex = () => {
  return (
    <div className="complex-container">
      <img src={bgImage} alt="" />
      <div className="complex-content">
        <h3>Built by developers</h3>
        <h1>Complex Documentation</h1>
        <p>
          From colors, cards, typography to complex elements, you will find the
          <br />
          full documentation. Play with the utility classes and you will create
          <br />
          unlimited combinations for our components.
        </p>
        <p>
          Read docs
          <BsArrowRightShort />
        </p>
      </div>
    </div>
  );
};

export default Complex;
