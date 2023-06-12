import React, { useState } from "react";
import "./styleMain.css";
import { Link, useLocation } from "react-router-dom";
function Nav() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <img
        src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/bg-opa.png"
        alt="BitsoftLogo"
        className="xl:w-[10rem] xl:h-[4rem] xl:ml-0 ml-5 w-[5.5rem] h-[2.5rem] z-"
      />
      {/* <span className="nav-logo">BitSoft Logo</span> */}
      <nav className={`nav-items ${isOpen && "open"}`}>
        <Link
          href="/#"
          style={
            location.pathname === "/"
              ? { background: "#3366f3", color: "white", borderRadius: "8px" }
              : {}
          }
        >
          Home
        </Link>
        <Link
          href="/Product"
          style={
            location.pathname === "/Product"
              ? { background: "#3366f3", color: "white", borderRadius: "8px" }
              : {}
          }
        >
          Product
        </Link>
        <Link
          href="/Service"
          style={
            location.pathname === "/Service"
              ? { background: "#3366f3", color: "white", borderRadius: "8px" }
              : {}
          }
        >
          Service
        </Link>
        <Link
          href="/AboutUs"
          style={
            location.pathname === "/AboutUs"
              ? { background: "#3366f3", color: "white", borderRadius: "8px" }
              : {}
          }
        >
          About
        </Link>
        <Link
          href="/Contact"
          style={
            location.pathname === "/Contact"
              ? { background: "#3366f3", color: "white", borderRadius: "8px" }
              : {}
          }
        >
          Contact
        </Link>
      </nav>
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
