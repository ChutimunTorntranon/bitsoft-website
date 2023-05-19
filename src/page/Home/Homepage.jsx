import React from "react";
import "./Homepage.css";
import Servicepage from "../service/Servicepage";
import Promote from "../Promote/Promote";
function Homepage() {
  return (
    <div className="background-p1 w-full h-screen">
      <div className="text-white grid grid-cols-2 h-screen mx-auto">
        <div className="mx-auto my-auto "></div>
        <div className="mx-auto my-auto w-full bg-[#3363F3] opacity-[65%] h-full">
          <div className="mx-10 mt-[20%]">
            <div className="text-[3.563rem]">ยินดีต้อนรับสู่</div>
            <div className="xl:text-[7rem] text-[3.563rem]">BITSOFT</div>
            <div className="text-[3.563rem]">รับออกแบบและพัฒนา</div>
            <div className="text-[3.563rem]">SoftwareและApplication</div>
          </div>
        </div>
      </div>
      <Servicepage />
      <Promote />
    </div>
  );
}

export default Homepage;
