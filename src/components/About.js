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

        <div className="wave">
          👋
        </div>

        <div className="mba_img">
          <img src="./images/macbook.png" alt="macbook"></img>
        </div>
        
      </div>
    </div>
  );
};

export default About;
