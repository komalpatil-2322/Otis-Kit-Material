import React from "react";
import "./Pricing.css";
import { IoMdLock } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-heading">
        <h5>PRICING</h5>
        <h1>Ready to get Material Kit?</h1>
        <p>
          Based on the license you get, you will have direct access to our team
          <br />
          of developers who built the product.
        </p>
      </div>
      <div className="pricing-card">
        <div className="pricingfirst-card">
          <h2>Freelancer</h2>
          <p>Good for a personal or client web app.</p>
          <div className="price">$79</div>
          <button className="btn">Buy Now</button>
          <ul className="features">
            <li>Complete documentation</li>
            <li>Full code</li>
            <li>Projects - 1</li>
            <li>Team Size - 1</li>
            <li>Support</li>
            <li>Free Updates - 6 months</li>
          </ul>
        </div>
        <div className="pricingfirst-card">
          <h2>Freelancer</h2>
          <p>Good for a personal or client web app.</p>
          <div className="price">$79</div>
          <button className="btn">Buy Now</button>
          <ul className="features">
            <li>Complete documentation</li>
            <li>Full code</li>
            <li>Projects - 1</li>
            <li>Team Size - 1</li>
            <li>Support</li>
            <li>Free Updates - 6 months</li>
          </ul>
        </div>
        <div className="pricingthird-card">
          <h2>Freelancer</h2>
          <p>Good for a personal or client web app.</p>
          <div className="pricingfirst-price">$79</div>
          <button className="pricingfirst-btn">Buy Now</button>
          <ul className="pricingfirst-features">
            <li>Complete documentation</li>
            <li>Full code</li>
            <li>Projects - 1</li>
            <li>Team Size - 1</li>
            <li>Support</li>
            <li>Free Updates - 6 months</li>
          </ul>
        </div>
        <div className="pricingfirst-card">
          <h2>Freelancer</h2>
          <p>Good for a personal or client web app.</p>
          <div className="price">$79</div>
          <button className="btn">Buy Now</button>
          <ul className="features">
            <li>Complete documentation</li>
            <li>Full code</li>
            <li>Projects - 1</li>
            <li>Team Size - 1</li>
            <li>Support</li>
            <li>Free Updates - 6 months</li>
          </ul>
        </div>
      </div>
      <div className="pricing-text">
        <IoMdLock />
        Secured Payment by <strong>2Checkout</strong> with:
      </div>
      <div className="pricing-info">
        <strong>Info:</strong> If you are a Registered Company inside the
        European Union you will
        <br /> be able to add your VAT ID after your Press "Buy Now"
      </div>

      <div className="pricing-last">
        <div className="pricinglast-left">
          <div className="text-head">
            <b>Thank you for your support!</b>
          </div>
          <div className="text-bot">We deliver the best web products</div>
        </div>
        <div className="pricinglast-right">
          <button className="btnn-tweet">TWITT</button>
          <button className="btnn-share">SHARE</button>
          <button className="btnn-pin">TRY IT</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
