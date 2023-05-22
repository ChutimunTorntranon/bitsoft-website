import React from "react";
import "./Homepage.css";
// import Servicepage from "../service/Servicepage";
// import Promote from "../Promote/Promote";
function Homepage() {
  return (
    <div className="background-p1 bg-cover bg-center xl:w-full xl:h-screen w-screen h-[20rem]">
      <div className="text-white grid grid-cols-2 h-[20rem] mx-auto">
        <div className="grid grid-cols-2 mx-[60%] xl:mx-[60%] xl:w-full xl:h-screen h-[15rem]">
          <div className="w-full"></div>
          <div className="xl:ml-[-6rem] ml-[5rem] xl:mx-10 xl:mt-[40%] mt-[100px] text-white my-auto w-[10rem] xl:w-[35rem]">
            <div className="xl:text-[3.563rem] text-[1rem]">
              ยินดีต้อนรับสู่
            </div>
            <div className="xl:text-[3.563rem] text-[1.5rem]">BITSOFT</div>
            <div className="xl:text-[3.563rem] text-[1rem]">
              รับออกแบบและพัฒนา
            </div>
            <div className="xl:text-[3.563rem] text-[1rem]">
              SoftwareและApplication
            </div>
          </div>
        </div>
      </div>
      {/* <Servicepage /> */}
      {/* <Promote /> */}
    </div>
  );
}

export default Homepage;
