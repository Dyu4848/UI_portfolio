import React, { useState } from "react";

const About = ({ setCurrentPage }) => {
  return (
    <div id="info">
      <div className="intro">
        <div className="name_job">
          <p>Hi! I'm David Yu</p>
          <div className="job">
            <span>UI UX</span>
            <span className="designer"> Designer</span>
          </div>
        </div>
        <br></br>

        <div className="description">
          I am an aspiring UI / UX designer, focusing on creating user friendly
          interfaces. I hope to find an opportunity that allows me to utilize my
          skillset, while growing as a designer. Thanks for stopping by!
        </div>
        <a href="mailto:dyu4848@gmail.com">
          <div className="hire_pad">
            <div className="hire">Hire me!</div>
          </div>
        </a>

        <img
          className="ux_img"
          src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=1800&t=st=1695351416~exp=1695352016~hmac=099115f9ca7fee28d164ffe648efa89c52ae5f86b48db19f3939c6c0ef8e07b9"
        />
      </div>
    </div>
  );
};

export default About;
