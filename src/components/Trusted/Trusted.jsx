import React from "react";
import "./Trusted.css";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Iconimg_1 from "../../assets/images/logos/gray-logos/logo-apple.svg";
import Iconimg_2 from "../../assets/images/logos/gray-logos/logo-facebook.svg";
import Iconimg_3 from "../../assets/images/logos/gray-logos/logo-nasa.svg";
import Iconimg_4 from "../../assets/images/logos/gray-logos/logo-vodafone.svg";
import Iconimg_5 from "../../assets/images/logos/gray-logos/logo-digitalocean.svg";

const Trusted = () => {
  return (
    <div className="trusted-container">
      <div className="trusted-heading">
        <h2>TRUSTED BY OVER</h2>
        <h1>1,679,477+ web developers</h1>
        <p className="para">
          Many Fortune 500 companies, startups, universities and governmental
          <br />
          institutions love Creative Tim's products.
        </p>
      </div>
      <div className="trusted-section">
        <div className="trusted-card">
          <h3>Nick Willever</h3>
          <span>
            <MdOutlineAccessTime />1 day ago
          </span>
          <p>
            "This is an excellent product, the documentation is excellent and
            helped me get things done more efficiently."
          </p>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="trusted-second">
          <h3>Shailesh Kushwaha</h3>
          <span>
            <MdOutlineAccessTime />1 day ago
          </span>
          <p>
            "I found solution to all my design needs from Creative Tim. I use
            them as a freelancer in my hobby projects for fun! And its really
            affordable, very humble guys !!!"
          </p>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="trusted-card">
          <h3>Samuel Kamuli</h3>
          <span>
            <MdOutlineAccessTime />3 day ago
          </span>
          <p>
            "Great product. Helped me cut the time to set up a site. I used the
            components within instead of starting from scratch. I highly
            recommend for developers who want to spend more time on the
            backend!."
          </p>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
      <div className="bottom-line"></div>

      <div className="trusted-icons">
        <img src={Iconimg_1} alt="" />
        <img src={Iconimg_2} alt="" />
        <img src={Iconimg_3} alt="" />
        <img src={Iconimg_4} alt="" />
        <img src={Iconimg_5} alt="" />
      </div>
    </div>
  );
};

export default Trusted;
