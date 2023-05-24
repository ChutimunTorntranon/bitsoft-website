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
      <img
        src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/logo+remove+bg.png"
        alt=""
        className="xl:w-44 w-36"
      />

      <nav ref={navRef}>
        <Link to="/#">Home</Link>
        <Link to="/Product">MyProduct</Link>
        <Link to="/Service">Service</Link>
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
