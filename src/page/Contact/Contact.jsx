import React from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  return (
    <div className="background-p4 xl:w-full xl:h-full p-16">
      <div className="container mx-auto"></div>
      <div className="grid xl:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="text-[#FFFFFF] my-auto">
          <p className="text-center xl:text-[2.625rem] text-[1.5rem]">
            {" "}
            Contact Us
          </p>
          <p className="text-center xl:text-[1.5rem] text-0.75 xl:p-0 p-3">
            10/1 Soi Ramintra 117 Ramintra Rd. Minburi , Bangkok 10510
          </p>
          <p className="text-center xl:text-[1.5rem] text-0.75 xl:p-0 p-3">
            083-101-8704 Mr.Nutdanai Pulkert (Few)
          </p>
          <p className="text-center xl:text-[1.5rem] text-0.75 xl:p-0 p-3">
            sale.bitsoft
          </p>
          <p className="text-center xl:text-[1.5rem] text-0.75 xl:p-0 p-3">
            sale.bitsoft@gmail.com
          </p>
        </div>
        <div className="">
          <img
            src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Calling-amico+(1).png"
            className="xl:w-[30rem] xl:h-[30rem] w-[20rem] h-[18rem] p-3 mx-auto"
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto h-[10rem]"></div>
      <div className="grid grid-cols-2 container mx-auto">
        <div className="text-[#FFFFFF] grid grid-cols-1">
          <img
            src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Email+campaign-amico.png"
            className="w-[30rem] h-[30rem] mx-auto"
            alt=""
          />
        </div>
        <div className="my-auto text-center">
          <div className="text-center p-2 text-[#ffffff]">
            ส่งอีเมลที่นี่ได้เลย!
          </div>
          <div className="NameInput">
            <div className="w-[10rem] ml-[6.5rem] text-[#FFFFFF] p-2">Name</div>
            <input
              type="text"
              placeholder="ใส่ชื่อของคุณ"
              label="Name"
              className="rounded-xl w-[20rem] bg-slate-100"
            />
          </div>
          <div className="CompanyInput">
            <div className=" w-[10rem] ml-[7rem] text-[#FFFFFF] p-2">
              Company
            </div>
            <input
              type="text"
              placeholder="ใส่ชื่อบริษัทของคุณ"
              label="Company"
              className="rounded-xl w-[20rem] bg-slate-100"
            />
          </div>
          <div className="PhoneInput">
            <div className=" w-[10rem] ml-[6.5rem] text-[#FFFFFF] p-2">
              Mobile
            </div>
            <input
              type="tel"
              placeholder="ใส่เบอร์ของคุณ"
              label="mobile"
              className="rounded-xl w-[20rem] bg-slate-100"
            />
          </div>
          <div className="EmailInput">
            <div className=" w-[10rem] ml-[6.5rem] text-[#FFFFFF] p-2">
              Email
            </div>
            <input
              type="text"
              placeholder="ใส่ E-mail ของคุณ"
              label="Company"
              className="rounded-xl w-[20rem] bg-slate-100"
            />
          </div>
          <div className="DescriptionInput">
            <div className=" w-[10rem] ml-[7.75rem] text-[#FFFFFF] p-2">
              Description
            </div>
            <textarea
              rows="5"
              cols="50"
              name="description"
              type="text"
              className="rounded-xl w-[20rem] h-[6rem] bg-slate-100 text-[0.75rem]"
            />
          </div>
          <button className="bg-yellow-200 p-[1rem] m-3">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
