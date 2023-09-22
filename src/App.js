import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Resume from "./components/Resume";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
