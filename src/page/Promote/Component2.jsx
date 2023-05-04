import React from "react";

function Component2() {
  return (
    <div>
      <div className="grid grid-cols-2 container mx-auto mt-[-5rem]">
        <div className="mx-8 my-20">
          <div>
            <img
              className="mx-auto hover:scale-110 duration-1000"
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Bug+fixing-amico+1.png"
              alt=""
            />
          </div>
        </div>
        <div className="mx-auto my-auto marker:container text-right font-extrabold text-[2.625rem] text-[#14357E]">
          แก้ไขปัญหาต่างๆที่เกิดจาก
          <br />
          <span className="text-[#FF4C4C]">Software</span> และ{" "}
          <span className="text-[#FF4C4C]">Custom</span>ได้ทันที
          <p className="text-[#14357E] text-right text-[1.5rem]">
            <span className="text-[#FF4C4C]">Proficient</span> and{" "}
            <span className="text-[#FF4C4C]">Experienced</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component2;
