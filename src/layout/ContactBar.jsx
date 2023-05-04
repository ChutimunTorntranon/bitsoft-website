import React from "react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function ContactBar() {
  <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>;
  return (
    <div className="w-full h-[35px] bg-[#3363F3] md:h-[60px]">
      <div className="flex container mx-auto justify-center">
        <div className="flex my-auto p-1 w-[350px] ">
          <lord-icon
            src="https://cdn.lordicon.com/ssvybplt.json"
            trigger="hover"
            style={{
              width: "20px",
              height: "20px",
              marginTop: "3px",
              marginRight: "5px",
            }}
          ></lord-icon>
          <span className="">083-101-8704 Mr.Nutdanai Pulkert (Few)</span>
        </div>
        <div className="flex my-auto p-1 w-[250px]">
          <lord-icon
            src="https://cdn.lordicon.com/diihvcfp.json"
            trigger="hover"
            style={{
              width: "20px",
              height: "20px",
              marginTop: "3px",
              marginRight: "5px",
            }}
          ></lord-icon>
          <span>sale.bitsoft@gmail.com</span>
        </div>
        <div className="flex my-auto p-1 w-[300px]">
          <lord-icon
            src="https://cdn.lordicon.com/rlizirgt.json"
            trigger="hover"
            style={{
              width: "20px",
              height: "20px",
              marginTop: "3px",
              marginRight: "5px",
            }}
          ></lord-icon>
          <span>sale.bitsoft</span>
        </div>
      </div>
    </div>
  );
}
export default ContactBar;
