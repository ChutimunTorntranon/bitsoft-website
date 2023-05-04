import React from "react";

function Component1() {
  return (
    <div className="background-p2">
      <div className="grid grid-cols-2 container mx-auto mt-[5rem]">
        <div className="mx-8 my-20">
          <div className="mx-auto container text-left font-extrabold text-[2.625rem] text-[#14357E]">
            ทีมงานที่<span className="text-[#FF4C4C]">เชี่ยวชาญ</span>และ
            <br />
            เต็มไปด้วย<span className="text-[#FF4C4C]">ประสบการณ์</span>
            <div className="text-[1.375rem] w-96 mx-[9rem]">
              <p className="text-[#FF4C4C]">Proficient and experienced</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="mx-auto hover:scale-110 duration-1000"
            src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Design+team-amico+1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Component1;
