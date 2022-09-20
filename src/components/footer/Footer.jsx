import React from "react";
import "./Footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <a href="/" className="footer-logo">
        EGATOR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">
        <a href="http://facebook.com">
          <FaFacebookF />
        </a>
        <a href="http://facebook.com">
          <FiInstagram />
        </a>
        <a href="http://facebook.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; EGATOR Tutorials. All rigth reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
