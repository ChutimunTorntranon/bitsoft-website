import React from "react";

function FooterAbout() {
  return (
    <div className="bg-[#F5F5F5] xl:w-[100%]">
      <div className="grid xl:grid-cols-2 grid-cols-1 mx-auto p-5 gap-3 container">
        <div className="xl:text-[1rem] text-[0.75rem]">
          <img
            src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/logo+remove+bg.png"
            alt=""
            className="xl:w-56 w-24 m-1"
          />
          <p>Develop by bitsoft</p>
          <p>Address : 10/1 Soi Ramintra 117, Minburi , Bangkok 10510</p>
        </div>
        <div className="xl:my-auto xl:text-[1rem] text-[0.75rem]">
          <h3 className="xl:text-[1rem] text-[1.5rem] font-bold">Contact</h3>
          <p>083-101-8704 Mr.Nutdanai Pulkert (Few)</p>
          <p>Email : sale.bitsoft@gmail.com</p>
          <p>Line : sale.bitsoft</p>
        </div>
      </div>
    </div>
  );
}

export default FooterAbout;
