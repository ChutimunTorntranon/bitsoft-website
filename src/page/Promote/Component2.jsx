import React from "react";

function Component2() {
  return (
    <div>
      <div className="grid grid-cols-2 container mx-auto mt-[-5rem]">
        <div className="xl:mx-8 mx-0 xl:my-20 mt-[6rem] w-full">
          <div className="">
            <img
              className="mx-auto xl:hover:scale-110 xl:duration-1000"
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Bug+fixing-amico+1.png"
              alt=""
            />
          </div>
        </div>
        <div className="ipad:mr-10 xl:mx-auto xl:my-auto mt-24 marker:container text-right font-extrabold xl:text-[2.625rem] md:text-[1.40rem] text-[1rem] text-[#14357E] md:mt-[13rem]">
          แก้ไขปัญหาต่างๆที่เกิดจาก
          <br />
          <span className="text-[#FF4C4C]">Software</span> และ{" "}
          <span className="text-[#FF4C4C]">Custom</span>ได้ทันที
          <p className="text-[#14357E] text-right xl:text-[1.5rem] md:text-[0.9rem] text-[0.75rem]">
            <span className="text-[#FF4C4C]">Customization</span> and{" "}
            <span className="text-[#FF4C4C]">Solution</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component2;
