import React from "react";
import "./Material.css";
import Materialkit from "../Materialkit/Materialkit";
import Collection from "../Collection/Collection";
import Account from "../Account/Account";
import Creativity from "../Creativity/Creativity";
import Complex from "../Complex/Complex";
import Card from "../Card/Card";
import Trusted from "../Trusted/Trusted";
import Pricing from "../Pricing/Pricing";

const Material = () => {
  return (
    <>
      <div className="material-wrapper">
        <div className="material">
          <div className="card">
            <h1>300+</h1>
            <h3>Coded Elements</h3>
            <span>
              From buttons, to inputs, navbars, alerts or cards, you are covered
            </span>
          </div>
          <div className="line"></div>
          <div className="card">
            <h1>100+</h1>
            <h3>Design Blocks</h3>
            <span>
              Mix the sections, change the colors and unleash your creativity
            </span>
          </div>
          <div className="line"></div>
          <div className="card">
            <h1>41</h1>
            <h3>Pages</h3>
            <span>
              Save 3-4 weeks of work when you use our pre-made pages for your
              website
            </span>
          </div>
        </div>

        <Materialkit />

        <Collection />

        <Account />

        <Creativity />

        <Complex />

        <Card />

        <Trusted />

        <Pricing />
      </div>
    </>
  );
};

export default Material;
