import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
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
        <button>
          <FaTimes />
        </button>
      </nav>
      <button>
        <FaBars />
      </button>
    </header>
  );
}

export default NewNavbar;
