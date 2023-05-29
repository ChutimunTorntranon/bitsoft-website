import React from "react";
import Footer from "../../layout/footer/Footer";
function ServiceMobile() {
  return (
    <>
      <div className="2xl:background-p2 xl:background-p2 bg-mobile bg-contain w-full xl:h-[46rem]">
        <div className="mx-auto container text-center font-extrabold xl:text-[2.5rem] text-[1.625rem] text-[#14357E] xl:mt-0  xl:relative xl:top-24 relative top-16">
          SERVICES
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-1 xl:gap-0 xl:mx-auto xl:container xl:relative xl:top-20  relative top-12 mb-8 p-8">
          <div className="mx-auto my-auto mt-3 xl:mt-0">
            <div
              trigger="hover"
              className="xl:mt-10 bg-gray-100 xl:w-[19.375rem] xl:h-[31.125rem] w-[12rem] h-[17rem] rounded-3xl p-3 stroke-slate-300 xl:hover:shadow-2xl xl:duration-1000 xl:hover:scale-110 xl:hover:shadow-[#3363F3]"
            >
              <img
                src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Software+engineer-amico.png"
                alt="imgWeb"
                className="my-10 mt-[10px] xl:mt-[40px]"
              ></img>
              <div className="flex">
                <p className="text-[#14357E] mx-auto text-center xl:text-[1.5rem] text-[1.25rem] font-bold xl:my-8 -mt-3">
                  Website Design
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-auto mt-3 xl:mt-0">
            {" "}
            <div
              trigger="hover"
              className="xl:mt-10 bg-gray-100  xl:w-[19.375rem] xl:h-[31.125rem] w-[12rem] h-[17rem] rounded-3xl p-3 stroke-slate-300 xl:hover:shadow-2xl xl:duration-1000 xl:hover:scale-110 xl:hover:shadow-[#3363F3]"
            >
              <img
                src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/App+development-amico.png"
                alt="imgWeb"
                className="my-10 mt-[10px] xl:mt-[40px]"
              ></img>
              <div className="flex">
                <p className="text-[#14357E] mx-auto text-center xl:text-[1.5rem] text-[1.25rem] font-bold xl:my-8 -mt-3">
                  Mobile Application
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-auto mt-3 xl:mt-0">
            {" "}
            <div
              trigger="hover"
              className="xl:mt-10 bg-gray-100 xl:w-[19.375rem] xl:h-[31.125rem] w-[12rem] h-[17rem] rounded-3xl p-3 stroke-slate-300 xl:hover:shadow-2xl xl:duration-1000 xl:hover:scale-110 xl:hover:shadow-[#3363F3]"
            >
              <img
                src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Software+integration-amico.png"
                alt="imgWeb"
                className="my-10 mt-[10px] xl:mt-[40px]"
              ></img>
              <div className="flex">
                <p className="text-[#14357E] mx-auto text-center xl:text-[1.5rem] text-[1.25rem] font-bold xl:my-8 -mt-3">
                  Software System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default ServiceMobile;
