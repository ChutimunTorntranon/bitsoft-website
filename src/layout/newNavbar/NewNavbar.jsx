import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./main.css";
function NewNavbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>logo</h3>
      <nav ref={navRef}>
        <a href="">Home</a>
        <a href="">Solution</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NewNavbar;
