import React from "react";
import CV from "../../assets/cv.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn" target="_blank">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary" target="_blank">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
