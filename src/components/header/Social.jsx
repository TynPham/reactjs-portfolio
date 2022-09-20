import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillDribbbleCircle,
} from "react-icons/ai";

const Social = () => {
  return (
    <div className="social">
      <a target="_blank" href="https://www.linkedin.com/">
        <AiFillLinkedin />
      </a>
      <a target="_blank" href="https://github.com/">
        <AiFillGithub />
      </a>
      <a target="_blank" href="https://dribbble.com/">
        <AiFillDribbbleCircle />
      </a>
    </div>
  );
};

export default Social;
