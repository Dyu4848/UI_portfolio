import React, { useState } from "react";

function Portfolio() {
  return (
    <div id="portfolio-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="weather"
              src="../images/weather.png"
              alt="Avatar"
            ></img>
            <p>HOVER</p>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="weather"
              src="../images/weather.png"
              alt="Avatar"
            ></img>
            <p>HOVER</p>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="weather"
              src="../images/weather.png"
              alt="Avatar"
            ></img>
            <p>HOVER</p>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="weather"
              src="../images/weather.png"
              alt="Avatar"
            ></img>
            <p>HOVER</p>
          </div>
          <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
