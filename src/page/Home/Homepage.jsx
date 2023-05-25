import React from "react";
import "./Homepage.css";
import Servicepage from "../service/Servicepage";
import Promote from "../Promote/Promote";
import Footer from "../../layout/footer/Footer";
function Homepage() {
  return (
    <div className="background-p1 xl:bg-full md:bg-cover bg-cover xl:w-full xl:h-screen md:h-[25rem] h-[20rem]">
      <div className="text-white container mx-auto text-center xl:text-[4rem] md:text-[2.5rem] text-[1.5rem] xl:relative xl:top-48 relative top-20">
        <p className="">ยินดีต้อนรับสู่</p>
        <p>BITSOFT</p>
        <p>รับออกแบบและพัฒนา </p>
        <p>Software และ Application</p>
      </div>
      <Servicepage />
      <Promote />
      <Footer />
    </div>
  );
}

export default Homepage;
