import React from "react";
import "./Footer.css";
import Apple_icon from "../../assets/images/logo-ct-dark.png";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="Footer-container">
        <div className="content-first">
          <img src={Apple_icon} alt="" />
          <h3>Otis Kit Pro</h3>
          <ul className="footer-listone">
            <li>
              <IoLogoFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <IoLogoGithub />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="content-second">
          <ul className="second-items">
            <li>
              <strong>Company</strong>
            </li>
            <li>About Us</li>
            <li>Freebies</li>
            <li>Premium Tools</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="content-third">
          <ul className="second-items">
            <li>
              <strong>Resources</strong>
            </li>
            <li>Illustrations</li>
            <li>Bits & Snippets</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
        <div className="content-four">
          <ul className="second-items">
            <li>
              <strong>Help & Support</strong>
            </li>
            <li>Contact Us</li>
            <li>Knowledge center</li>
            <li>Custom Development</li>
            <li>Sponsorships</li>
          </ul>
        </div>
        <div className="content-five">
          <ul className="second-items">
            <li>
              <strong>Legal</strong>
            </li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Licenses (EULA)</li>
          </ul>
        </div>
      </div>
      <div className="last-footer">
        <p>All rights reserved. Copyright © 2025 Otis Kit by Komal Patil.</p>
      </div>
    </footer>
  );
};

export default Footer;
