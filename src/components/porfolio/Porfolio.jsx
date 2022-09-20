import React from "react";
import "./Porfolio.scss";
import MG1 from "../../assets/portfolio1.jpg";
import MG2 from "../../assets/portfolio2.jpg";
import MG3 from "../../assets/portfolio3.jpg";
import MG4 from "../../assets/portfolio4.jpg";
import MG5 from "../../assets/portfolio5.png";
import MG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: MG1,
    title: "Crypto Currency Dashboard & Financial visualization",
    github: "https://github.com/TynPham",
    demo: "https://www.youtube.com/",
  },
  {
    id: 2,
    image: MG2,
    title: "Crypto Currency Dashboard & Financial visualization",
    github: "https://github.com/TynPham",
    demo: "https://www.youtube.com/",
  },
  {
    id: 3,
    image: MG3,
    title: "Crypto Currency Dashboard & Financial visualization",
    github: "https://github.com/TynPham",
    demo: "https://www.youtube.com/",
  },
  {
    id: 4,
    image: MG4,
    title: "Crypto Currency Dashboard & Financial visualization",
    github: "https://github.com/TynPham",
    demo: "https://www.youtube.com/",
  },
  {
    id: 5,
    image: MG5,
    title: "Crypto Currency Dashboard & Financial visualization",
    github: "https://github.com/TynPham",
    demo: "https://www.youtube.com/",
  },
  {
    id: 6,
    image: MG6,
    title: "Crypto Currency Dashboard & Financial visualization",
    github: "https://github.com/TynPham",
    demo: "https://www.youtube.com/",
  },
];

const Porfolio = () => {
  return (
    <section>
      <h5>My Recent Wolk</h5>
      <h2>Porfolio</h2>

      <div className="container container-portfolio">
        {data.map((item) => (
          <article key={item.id} className="project">
            <div className="project-img">
              <img src={item.image} alt="portfolio" />
            </div>
            <h3 className="content">{item.title}</h3>
            <div className="demo">
              <a href={item.github} className="github btn" target="_blank">
                Github
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Porfolio;
