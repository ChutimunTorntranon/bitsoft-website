import React from "react";
function Servicepage() {
  return (
    <div className="2xl:background-p2 xl:background-p2 bg-mobile bg-cover w-full xl:h-screen h-[18rem] p-16 xl:mt-[25rem] 2xl:mt-[35rem] mt-36">
      <div className="mx-auto container text-center font-extrabold text-[2.625rem] text-[#14357E] -mt-10">
        SERVICES
      </div>
      <div className="h-full grid xl:grid-cols-3 grid-cols-3 xl:gap-0 gap-12 -ml-10 xl:my-20 xl:mx-auto w-auto xl:container">
        <div className="mx-auto my-auto mt-3 xl:mt-0">
          <div
            trigger="hover"
            className="xl:mt-10 bg-gray-100 xl:w-[19.375rem] xl:h-[31.125rem] w-[5.75rem] h-[10rem] rounded-3xl p-3 stroke-slate-300 xl:hover:shadow-2xl xl:duration-1000 xl:hover:scale-110 xl:hover:shadow-[#3363F3]"
          >
            <img
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Static+website-amico.png"
              alt="imgWeb"
              className="my-10 mt-[10px] xl:mt-[40px]"
            ></img>
            <div className="flex">
              <p className="text-[#14357E] mx-auto text-center xl:text-[1.5rem] text-[0.25rem] font-bold xl:my-8 mt-[-30%]">
                Website Design
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-auto mt-3 xl:mt-0">
          {" "}
          <div
            trigger="hover"
            className="xl:mt-10 bg-gray-100  xl:w-[19.375rem] xl:h-[31.125rem]  w-[5.75rem] h-[10rem] rounded-3xl p-3 stroke-slate-300 xl:hover:shadow-2xl xl:duration-1000 xl:hover:scale-110 xl:hover:shadow-[#3363F3]"
          >
            <img
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/New+notifications-amico.png"
              alt="imgWeb"
              className="my-10 mt-[10px] xl:mt-[40px]"
            ></img>
            <div className="flex">
              <p className="text-[#14357E] mx-auto text-center xl:text-[1.5rem] text-[0.25rem] font-bold xl:my-8 mt-[-30%]">
                Mobile Application
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-auto mt-3 xl:mt-0">
          {" "}
          <div
            trigger="hover"
            className="xl:mt-10 bg-gray-100 xl:w-[19.375rem] xl:h-[31.125rem] w-[5.75rem] h-[10rem] rounded-3xl p-3 stroke-slate-300 xl:hover:shadow-2xl xl:duration-1000 xl:hover:scale-110 xl:hover:shadow-[#3363F3]"
          >
            <img
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Online+report-amico.png"
              alt="imgWeb"
              className="my-10 mt-[10px] xl:mt-[40px]"
            ></img>
            <div className="flex">
              <p className="text-[#14357E] mx-auto text-center xl:text-[1.5rem] text-[0.25rem] font-bold xl:my-8 mt-[-30%]">
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
