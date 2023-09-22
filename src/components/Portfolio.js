import React, { useState } from "react";

function Portfolio() {
  return (
    <div id="portfolio-container">

      <a target="_blank" href="https://dyu4848.github.io/password_gen/">
        <img id="pwGen" src="./images/pwGen.png" alt="pwGen"></img>
      </a>

      <a target="_blank" href="https://notetaker12.herokuapp.com/notes">
        <img id="notes" src="./images/notes.png" alt="notes"></img>
      </a>
      <a target="_blank" href="https://dyu4848.github.io/code_quiz/">
        <img id="quiz" src="./images/quiz.png" alt="quiz"></img>
      </a>
      <a target="_blank" href="https://dyu4848.github.io/ServerApi_weather/">
        <img id="weather" src="./images/weather.png" alt="weather"></img>
      </a>
    </div>
  );
}

export default Portfolio;
