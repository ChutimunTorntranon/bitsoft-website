import React from "react";

function Navbar2() {
  return (
    <div className="bg-[#FFFFFF] w-full shadow-xl h-24 ">
      <div className="container mx-auto h-24 flex justify-between">
        <div className="my-auto">
          <img
            className=""
            src="https://bae-image-video.s3.ap-southeast-1.amazonaws.com/bitsoft/Logo-row+1.png"
            alt="logoBitsoft"
          />
        </div>
        <div className="my-auto">
          <ul className="flex gap-10 ">
            <li>Home</li>
            <li>Solution</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
