import React from "react";
import "./Homepage.css";
import Servicepage from "../service/Servicepage";
import Promote from "../Promote/Promote";
function Homepage() {
  return (
    <div className="background-p1 xl:bg-full bg-cover xl:w-full xl:h-screen h-[20rem]">
      <div className="text-white container mx-auto text-center text-[4rem]">
        <p className="">ยินดีต้อนรับสู่</p>
        <p>BITSOFT</p>
        <p>รับออกแบบและพัฒนา </p>
        <p>Software และ Application</p>
      </div>
      {/* <Servicepage /> */}
      {/* <Promote /> */}
    </div>
  );
}

export default Homepage;
