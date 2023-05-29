import React, { useState } from "react";
import "./styleMain.css";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img
        src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/bg-opa.png"
        alt="BitsoftLogo"
        className="xl:w-[10rem] xl:h-[4rem] xl:ml-0 ml-5 w-[5.5rem] h-[2.5rem]"
      />
      {/* <span className="nav-logo">BitSoft Logo</span> */}
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/#">Home</a>
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
