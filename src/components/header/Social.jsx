import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleCircle,
} from "react-icons/ai";

const Social = () => {
  return (
    <div className="social">
      <a target="_blank" href="https://www.linkedin.com/" rel="noreferrer">
        <AiFillLinkedin />
      </a>
      <a target="_blank" href="https://github.com/" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a target="_blank" href="https://dribbble.com/" rel="noreferrer">
        <AiFillDribbbleCircle />
      </a>
    </div>
  );
};

export default Social;
