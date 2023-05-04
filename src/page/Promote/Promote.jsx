import React from "react";
import "../Home/Homepage.css";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
function Promote() {
  return (
    <div className="background-p2 w-full p-16">
      <div className="mx-auto container text-center font-extrabold text-[2.625rem] text-[#14357E] p-5">
        ครบจบ<span className="text-[#FF4C4C]">Software</span>ในที่เดียว
        <div className="text-[1.375rem] w-96 mx-[34rem]">
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