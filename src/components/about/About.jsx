import React from "react";
import "./About.scss";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-light">Get To Know</h5>
      <h2>About Me</h2>
      <div className="container container-about">
        <div className="me">
          <div className="me-bg">
            <img src={ME} alt="" className="me-image" />
          </div>
        </div>

        <div className="content">
          <div className="content-cards">
            <article className="card">
              <FaAward className="icon" />
              <h5>Experience</h5>
              <small className="text-light">3+ Years Working</small>
            </article>
            <article className="card">
              <HiUsers className="icon" />
              <h5>Clients</h5>
              <small className="text-light">200+ Workwide</small>
            </article>
            <article className="card">
              <VscFolderLibrary className="icon" />
              <h5>Projects</h5>
              <small className="text-light">80+ Completed</small>
            </article>
          </div>

          <p className="text-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing edit. Lorem
            ipsum, dolor sit amet consectetur adipisicing edit. Lorem ipsum,
            dolor sit amet consectetur adipisicing edit. Lorem ipsum, dolor sit
            amet consectetur adipisicing edit.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
