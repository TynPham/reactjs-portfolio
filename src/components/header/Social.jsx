import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleCircle,
} from "react-icons/ai";

const Social = () => {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/">
        <AiFillGithub />
      </a>
      <a href="https://dribbble.com/">
        <AiFillDribbbleCircle />
      </a>
    </div>
  );
};

export default Social;
