import React from "react";
import "./Homepage.css";
function Homepage() {
  return (
    <div className="background-p1 w-full h-screen">
      <div className="text-white grid grid-cols-2 h-screen mx-auto">
        <div className="mx-auto my-auto "></div>
        <div className="mx-auto my-auto w-full bg-[#3363F3] opacity-[65%] h-full">
          <div className="mx-10 mt-[20%] ">
            <div className="text-[3.563rem]">ยินดีต้อนรับสู่</div>
            <div className="text-[7rem]">BITSOFT</div>
            <div className="text-[3.563rem]">รับออกแบบและพัฒนา</div>
            <div className="text-[3.563rem]">SoftwareและApplication</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
