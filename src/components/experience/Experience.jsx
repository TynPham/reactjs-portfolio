import React from "react";
import "./Experience.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container container-experience">
        <div className="dev front-end">
          <h3>Frontend Developer</h3>
          <div className="content">
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">HTML</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">CSS</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">Javascript</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">Bootstrap</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">Tailwind</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">React</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="dev back-end">
          <h3>Backend Developer</h3>
          <div className="content">
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">Node Js</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">MongoDB</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">PHP</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">My SQL</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4 className="skill">Python</h4>
                <small className="level">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
