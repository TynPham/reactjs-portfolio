import React from "react";
import Cta from "./Cta";
import "./Header.scss";
import ME from "../../assets/me.png";
import Social from "./Social";

const Header = () => {
  return (
    <header>
      <div className="container container-header">
        <h5>Hello, I'm</h5>
        <h1>Pham Tuyen</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <Cta />

        <Social />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll" target="_blank">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
