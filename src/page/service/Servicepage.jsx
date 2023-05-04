import React from "react";
function Servicepage() {
  return (
    <div className="background-p2 w-full h-screen p-16">
      <div className="mx-auto container text-center font-extrabold text-[2.625rem] text-[#14357E]">
        SERVICES
      </div>
      <div className="w-full h-full grid-cols-3 grid container mx-auto">
        <div className="mx-auto my-auto">
          <div
            trigger="hover"
            className="bg-gray-100 w-[19.375rem] h-[31.125rem] rounded-3xl p-3 stroke-slate-300 hover:shadow-2xl duration-1000 hover:scale-110 hover:shadow-[#3363F3]"
          >
            <img
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Static+website-amico.png"
              alt="imgWeb"
              className="my-10"
            ></img>
            <div className="flex">
              <p className="text-[#14357E] mx-auto text-center text-[1.5rem] font-bold my-8">
                Website Design
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-auto">
          {" "}
          <div
            trigger="hover"
            className="bg-gray-100 w-[19.375rem] h-[31.125rem] rounded-3xl p-3 stroke-slate-300 hover:shadow-2xl duration-1000 hover:scale-110 hover:shadow-[#3363F3]"
          >
            <img
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/New+notifications-amico.png"
              alt="imgWeb"
              className="my-10"
            ></img>
            <div className="flex">
              <p className="text-[#14357E] mx-auto text-center text-[1.5rem] font-bold my-8">
                Mobile Application
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-auto">
          {" "}
          <div
            trigger="hover"
            className="bg-gray-100 w-[19.375rem] h-[31.125rem] rounded-3xl p-3 stroke-slate-300 hover:shadow-2xl duration-1000 hover:scale-110 hover:shadow-[#3363F3]"
          >
            <img
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Online+report-amico.png"
              alt="imgWeb"
              className="my-10"
            ></img>
            <div className="flex">
              <p className="text-[#14357E] mx-auto text-center text-[1.5rem] font-bold my-8">
                Software System
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicepage;
