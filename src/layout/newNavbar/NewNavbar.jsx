import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./main.css";
import { Link } from "react-router-dom";
function NewNavbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="">
      <h3>logo</h3>
      <nav ref={navRef}>
        <Link to="/#">Home</Link>
        <Link to="/Product">MyProduct</Link>
        <Link to="/Solution">Solution</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Contact">Contact</Link>
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
