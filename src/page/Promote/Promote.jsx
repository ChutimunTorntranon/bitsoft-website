import React from "react";
import "../Home/Homepage.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
function Promote() {
  return (
    <div className="xl:bg-mobile bg-mobile w-full p-16">
      <div className="mx-auto container text-center font-extrabold xl:text-[2.625rem] text-[1rem] text-[#14357E] p-5 md:mt-[2rem] mt-[-30px]">
        ครบจบ<span className="text-[#FF4C4C]">Software</span>ในที่เดียว
        <div className="text-[1.375rem] md:w-80 w-72 xl:mx-[34rem] md:mx-[9rem] -ml-10">
          All-in-One <span className="text-[#FF4C4C]">Software Solution</span>
        </div>
      </div>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

export default Promote;
