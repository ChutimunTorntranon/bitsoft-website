import React from "react";
import "../Home/Homepage.css";
function Product() {
  return (
    <div className="background-p3 w-full h-screen p-16">
      <div className="mx-auto text-[#FFFFFF] container">
        <p className="text-center text-[3.625rem]">Product</p>
      </div>
      <div className="grid grid-cols-2 container mx-auto">
        <div className="text-[#FFFFFF] my-auto">
          <div className="text-center text-[2.625rem] leading-10">
            Suisei Production
            <br />
            Control System
          </div>
          <div className="text-center mt-5 text-[1.5rem] ">
            Software ที่พัฒนาเพื่อใช้ในอุตสาหกรรมการผลิต <br />
            เพื่อพัฒนาโรงงานให้เป็น Smart Factory 4.0 <br />
            สามารถ Monitor Control สายการผลิตแบบ Real Time
          </div>
          <div className="">
            <div className="grid grid-cols-4 text-center mt-5 mx-28">
              <div className="w-[5rem] h-[5rem]">
                <img
                  className="w-[5rem] h-[5rem] mx-auto hover:scale-110 duration-1000"
                  src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/erp.png"
                  alt=""
                />
                <p>erp</p>
              </div>
              <div className="w-[5rem] h-[5rem]">
                <img
                  className="w-[5rem] h-[5rem] mx-auto hover:scale-110 duration-1000"
                  src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/test.png"
                  alt=""
                />
                <p>Mobile</p>
              </div>
              <div className="w-[5rem] h-[5rem] ">
                <img
                  className="w-[5rem] h-[5rem] mx-auto hover:scale-110 duration-1000"
                  src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/website.png"
                  alt=""
                />
                <p>Browser</p>
              </div>
              <div className="w-[5rem] h-[5rem] ">
                <img
                  className="w-[5rem] h-[5rem] mx-auto hover:scale-110 duration-1000"
                  src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/cloud-service.png"
                  alt=""
                />
                <p>Cloud</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#FFFFFF] grid grid-cols-1">
          <img
            src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/res.png"
            className="w-full h-full hover:scale-125 duration-1000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
