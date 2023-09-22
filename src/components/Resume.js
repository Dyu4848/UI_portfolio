import React, { useState } from "react";

function Resume() {
  return (
    <div id="container">
      <header id="header">
        <p>
          <strong id="resume-name">David Yu</strong>
          <p>Dyu4848@gmail.com | 201-744-9150</p>
        </p>
      </header>
      <br />
      <div id="education">
        <p>
          <strong>Education</strong>
        </p>
        <hr />
        <strong>University of Colorado, Boulder</strong>
        <br />
        <br />
        <span>School of Arts and Sciences, Economics</span>
        <span id="boulder-date">May, 2022</span>
        <br />
        <br />
        <strong>Rutgers University Full Stack Coding Bootcamp</strong>
        <br />
        <br />
        <span>Graduated with Certificate</span>
        <span id="rutgers-date">February, 2023</span>
      </div>

      <br />
      <br />

      <div className="skills">
        <p>
          <strong>Skills</strong>
        </p>
        <hr />
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>React.JS</li>
          <li>API Interactions</li>
          <li>Github</li>
          <li>Git</li>
          <li>Microsoft Excel</li>
        </ul>
      </div>

      <br />
      <br />

      <div className="experience">
        <p>
          <strong>Experience</strong>
        </p>
        <hr />
        <span>
          <strong>LG Electronics</strong>
        </span>
        <span id="lg-town">Englewood Cliffs</span>
        <br />
        <br />
        <span id="claims">
          <i>B2B Claims Coordinator</i>
        </span>
        <span id="lg-date">August, 2022 - November, 2022</span>
        <ul>
          <li>Entering new claims for customers and salesmen.</li>
          <li>
            Validating SPIFF, ADV, Tax, and Damage Allowance claims for
            approval.
          </li>
          <li>Communicating with salesmen for supporting documentation.</li>
          <li>
            Creating Excel summaries and pivot tables for weekly/quarterly
            reports.
          </li>
        </ul>
        <br />
        <span>
          <strong>White Stone Cleaners</strong>
        </span>
        <span id="cleaners-town">Lake Hiawatha</span>
        <br />
        <br />
        <span id="customer-service">
          <i>Customer Service</i>
        </span>
        <span id="cleaners-date">March, 2019 - November, 2021</span>
        <ul>
          <li>Creating general spreadesheets on Excel</li>
          <li>Answering customer phone calls and assisting in needs</li>
          <li>Cataloging clothing items in relation with customer IDs.</li>
        </ul>
      </div>

      <br />
      <br />

      <div className="certificates">
        <strong>Certificates</strong>
        <hr />
        <ul>
          <li>
            <span>Rutgers Full Stack Coding Bootcamp</span>
            <span id="bootcamp-date">February, 2023</span>
          </li>
          <br />
          <li>
            <span>FRCC Business Certificate</span>
            <span id="frcc-date">November, 2018</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
