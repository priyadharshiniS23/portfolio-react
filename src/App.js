import React, { useEffect } from "react";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {

  useEffect(() => {
    const move = (e) => {
      const fog = document.querySelector(".fog");

      if (fog) {
        fog.style.left = e.clientX + "px";
        fog.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="app">

      {/* 🔥 BACKGROUND FOG ONLY */}
      <div className="fog"></div>

      {/* CONTENT ABOVE */}
      <div className="content">
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>

      <Navbar />

    </div>
  );
}

export default App;