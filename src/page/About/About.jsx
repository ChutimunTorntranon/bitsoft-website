import React from "react";
import "../Home/Homepage.css";
import Team from "./Team";
import Footer from "../../layout/footer/Footer";
import FooterAbout from "../../layout/footer/FooterAbout";
function About() {
  return (
    <>
      <div className="background-p5-about xl:w-full w-full xl:h-full h-[110rem] xl:p-16 p-5">
        <div className="container mx-auto h-[0rem]"></div>
        <div className="grid grid-cols-2 container gap-5 mx-auto mt-6">
          <div className="text-[#fefefe]">
            <p className="text-center xl:text-[2.625rem] text-[1.25rem] xl:mt-[8rem]">
              We are <span className="text-[#F9CC07]">BitSoft</span>
            </p>
            <p className="text-center xl:text-[1.5rem] text-[0.5rem]">
              {" "}
              เราคือผู้พัฒนาด้าน <br />
              <span className="text-[#F9CC07] xl:text-[0.5rem]">
                Software Development
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
        <Team />
      </div>
      <FooterAbout />
    </>
  );
}

export default About;
