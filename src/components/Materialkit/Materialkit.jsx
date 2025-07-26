import React from "react";
import "./Materialkit.css";
import { GrDocumentText } from "react-icons/gr";
import { TiTabsOutline } from "react-icons/ti";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaLaptopFile } from "react-icons/fa6";

const Materialkit = () => {
  const features = [
    {
      icon: <GrDocumentText />,
      title: "Full Documentation",
      description:
        "Built by developers for developers. Check the foundation and you will find everything inside our documentation.",
    },
    {
      icon: <TiTabsOutline />,
      title: "MUI Ready",
      description:
        "The world’s most popular react components library for building user interfaces.",
    },
    {
      icon: <HiOutlineCurrencyDollar />,
      title: "Save Time & Money",
      description:
        "Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.",
    },
    {
      icon: <FaLaptopFile />,
      title: "Fully Responsive",
      description:
        "Regardless of the screen size, the website content will naturally fit the given resolution.",
    },
  ];
  return (
    <div className="material-kit">
      <div className="materialkit-left">
        <div className="card-content">
          <div className="flip-card-front">
            <h2 className="card-title">
              Feel the <br />
              Material Kit
            </h2>
            <p className="card-description">
              All the MUI components that you need in a development have been
              re0designed with the new look.
            </p>
          </div>
          <div className="flip-card-back">
            <h2 className="card-title">
              Discover More
              <br />
              Material Kit
            </h2>
            <p className="card-description">
              You will save a lot of time going from prototyping to
              full-functional code because all elements are implemented.
            </p>
          </div>
        </div>
      </div>
      <div className="material-right">
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materialkit;
