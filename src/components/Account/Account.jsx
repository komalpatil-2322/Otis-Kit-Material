import React from "react";
import "./Account.css";
import bgImage_15 from "../../assets/images/mountain-15.jpg";
import bgImage_16 from "../../assets/images/mountain-16.jpg";
import bgImage_18 from "../../assets/images/mountain-18.jpg";

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-left">
        <h1>
          Account Pages for
          <br /> beautiful webapps
        </h1>
        <p>
          We created many examples for pages like Signup, Signin, Forgot
          Password, 2FA Authentification and so on. Just choose between a Basic
          Design, an illustration or a cover and you are good to go!
        </p>
        <div className="account-child">
          <div>
            <button className="btn-view">VIEW PAGES</button>
          </div>
          <div>
            <h5>VIEW SIGNUP PAGES</h5>
          </div>
        </div>
      </div>
      <div className="account-right">
        <div className="account-first">
          <div className="card-form">
            <img src={bgImage_15} alt="" className="card-image" />
          </div>

          <div className="card-form">
            <img src={bgImage_16} alt="" className="card-image" />
          </div>
          <div className="card-form">
            <img src={bgImage_18} alt="" className="card-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
