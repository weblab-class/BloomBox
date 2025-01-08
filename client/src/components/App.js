import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound.js";
import Landing from "./pages/Landing.js";


import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component
 */
const App = () => {
  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
        <div className="gradient-4"></div>
        <div className="gradient-5"></div>
        <div className="interactive"></div>
      </div>
      <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
};

export default App;
