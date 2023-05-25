import React from "react";

function Component1() {
  return (
    <div className="background-p2 mt-[-3rem] xl:mt-0">
      <div className="grid grid-cols-2 container mx-auto mt-[5rem]">
        <div className="xl:mx-8 xl:my-20 mt-5 w-full xl:w-full ">
          <div className="xl:mx-auto container xl:text-left font-extrabold xl:text-[2.625rem] md:text-[1.5rem] text-[1rem] text-[#14357E] md:mt-[5rem]">
            ทีมงานที่<span className="text-[#FF4C4C]">เชี่ยวชาญ</span>และ
            <br />
            เต็มไปด้วย<span className="text-[#FF4C4C]">ประสบการณ์</span>
            <div className="xl:text-[1.375rem] md:text-[0.9rem] text-[0.5rem] xl:w-96 xl:mx-[9rem] text-[#FF4C4C]">
              <p className="">
                Proficient <span className="text-[#14357E]">and</span>{" "}
                experienced
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="mx-auto xl:hover:scale-110 xl:duration-1000"
            src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Design+team-amico+1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Component1;
