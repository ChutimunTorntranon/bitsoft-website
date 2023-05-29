import React from "react";
import "../Home/Homepage.css";
import Footer from "../../layout/footer/Footer";
import { Link } from "react-router-dom";
function Product() {
  return (
    <>
      <div className="background-productpage w-full xl:h-[46.25rem] h-screen p-10">
        <div className="mx-auto text-[#ffff] container xl:relative xl:top-20 relative top-12">
          <p className="text-center xl:text-[3.625rem] text-[2rem]">
            My Product
          </p>
        </div>
        <div className="grid xl:grid-cols-2 grid-cols-1 container mx-auto xl:relative xl:top-10 relative ">
          <div className="text-[#ffff]  my-auto relative top-12">
            <div className="text-center xl:text-[2.625rem] text-[1.5rem] mt-5 leading-10">
              Suisei Production
              <br />
              Control System
            </div>
            <div className="text-center mt-5 xl:text-[1.5rem] text-[1.25rem]">
              Software ที่พัฒนาเพื่อใช้ในอุตสาหกรรมการผลิต <br />
              เพื่อพัฒนาโรงงานให้เป็น Smart Factory 4.0 <br />
              สามารถ Monitor Control สายการผลิตแบบ Real Time
            </div>
            <div className="">
              <div className="grid grid-cols-4 text-center mt-5 xl:x-28 mx-auto xl:gap-[5rem] xl:ml-0 -ml-6 gap-[3rem]">
                <div className="xl:w-[5rem] xl:h-[5rem] w-[5rem] h-[3rem]">
                  <img
                    className="w-[5rem] h-[5rem] mx-auto xl:hover:scale-110 xl:duration-1000"
                    src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/icon-productpage/erp+(3).png"
                    alt=""
                  />
                  <p>ERP</p>
                </div>
                <div className="xl:w-[5rem] xl:h-[5rem] w-[4.8rem] h-[4.8rem]">
                  <img
                    className="w-[5rem] h-[5rem] mx-auto xl:hover:scale-110 xl:duration-1000"
                    src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/icon-productpage/smartphone.png"
                    alt=""
                  />
                  <p>Mobile</p>
                </div>
                <div className="xl:w-[5rem] xl:h-[5rem] w-[4.8rem] h-[4.8rem]">
                  <img
                    className="w-[5rem] h-[5rem] mx-auto xl:hover:scale-110 xl:duration-1000"
                    src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/icon-productpage/search.png"
                    alt=""
                  />
                  <p>Browser</p>
                </div>
                <div className="xl:w-[5rem] xl:h-[5rem] w-[4.8rem] h-[4.8rem]">
                  <img
                    className="w-[5rem] h-[5rem] mx-auto xl:hover:scale-110 xl:duration-1000"
                    src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/icon-productpage/cloud-service+(1).png"
                    alt=""
                  />
                  <p>Cloud</p>
                </div>
              </div>
              <div className="mt-7 ml-20 xl:ml-0">
                <Link to="http://bitsoft.s3-website-ap-southeast-1.amazonaws.com/">
                  <button class="xl:top-[10rem] xl:ml-[16rem] m-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-[#ffff]  grid grid-cols-1 relative top-12">
            <img
              src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/icon-productpage/Dashborad+All.png"
              className="w-full h-full xl:hover:scale-110 xl:duration-1000"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Product;
