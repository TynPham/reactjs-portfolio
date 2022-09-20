import React from "react";
import "./Services.scss";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container container-services">
        <article className="details">
          <div className="header">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="content">
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        <article className="details">
          <div className="header">
            <h3>Web Development</h3>
          </div>
          <ul className="content">
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        <article className="details">
          <div className="header">
            <h3>Content Creation</h3>
          </div>
          <ul className="content">
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li className="content-item">
              <BsCheck className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
