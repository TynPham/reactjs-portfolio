import React, { useState } from "react";
import "./Nav.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageAltDetail, BiBook } from "react-icons/bi";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <nav className="nav">
      <a
        href="#"
        className={`${active === "#" ? "active" : ""}`}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={`${active === "#about" ? "active" : ""}`}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={`${active === "#experience" ? "active" : ""}`}
        onClick={() => setActive("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={`${active === "#services" ? "active" : ""}`}
        onClick={() => setActive("#services")}
      >
        <BiMessageAltDetail />
      </a>
      <a
        href="#contact"
        className={`${active === "#contact" ? "active" : ""}`}
        onClick={() => setActive("#contact")}
      >
        <RiServiceFill />
      </a>
    </nav>
  );
};

export default Nav;
