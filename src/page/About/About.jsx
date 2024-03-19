import React from "react";
import "../Home/Homepage.css";
import NewTeam from "./setTeam/NewTeam";
import Footer from "../../layout/footer/Footer";
function About() {
  return (
    <>
      <div className="background-p5-about xl:w-full w-full xl:h-full xl:p-16 p-5 bg-no-repeat ">
        <div className="container mx-auto h-[0rem]"></div>
        <div className="grid grid-cols-2 container gap-5 mx-auto mt-6 xl:relative xl:top-24 relative top-10">
          <div className="text-[#fefefe] ipad:mt-20 ipad:p-5">
            <p className="text-center xl:text-[2.625rem] ipad:text-[2rem] text-[1.25rem] xl:mt-[8rem]">
              We are <span className="text-[#F9CC07]">BITSOFT</span>
            </p>
            <p className="text-center xl:text-[1.5rem] ipad:text-[1rem] text-[0.5rem]">
              {" "}
              เราคือผู้พัฒนาด้าน
              <span className="text-[#F9CC07] xl:text-[1.5rem]  ipad:text-[1rem] text-[0.5rem]">
                &nbsp;Software Development
              </span>
              <br />
              ที่สร้างเทคโนโลยีใหม่ๆ เพื่อมาพัฒนาคุณภาพ และ
              เปลี่ยนแปลงธุรกิจของคุณให้ดียิ่งขึ้นกว่าเดิม
              ตั้งแต่นำความต้องการและปัญหาของธุรกิจมาวิเคราะห์ ก่อนเริ่มพัฒนา
              Software เพื่อตอบโจทย์ ความต้องการของลูกค้าได้อย่างแม่นยำที่สุด
            </p>
          </div>
          <div className="">
            <img
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Developer+activity-amico.png"
              className="mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-[#F9CC07] text-[3rem] p-5 text-center">
            BITSOFT Team
          </h3>
          <NewTeam />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
