import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillApple,
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: "2em",
            }}
          >
            <em>Donut</em> Shop
          </h3>
          <div className="sub">
            <div>
              <b>Company</b>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <b>For Foodies</b>
              <p>Code of conduct</p>
            </div>
            <div>
              <b>For Help</b>
              <ul>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>

              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
