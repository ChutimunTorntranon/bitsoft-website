import React, { useState } from "react";
import "./styleMain.css";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">BitSoft Logo</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/Product">Product</a>
        <a href="/Service">Service</a>
        <a href="/AboutUs">About</a>
        <a href="/Contact">Contact</a>
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
