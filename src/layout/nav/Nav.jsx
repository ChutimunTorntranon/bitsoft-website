import React, { useState } from "react";
import "./styleMain.css";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">BitSoft Logo</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Nav;
