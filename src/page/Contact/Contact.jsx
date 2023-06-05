import React, { useRef } from "react";
import Footer2 from "../../layout/footer/Footer2";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_95gfugy",
        "template_6e2l2e8",
        form.current,
        "0ND-VzLArtpZ5GyqT"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message_sent");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
    <div className="background-p5-about xl:w-full xl:h-full p-16 ">
      <div className="container mx-auto"></div>
      <div className="grid xl:grid-cols-2 grid-cols-1 container mx-auto relative top-12">
        <div className="text-[#FFFFFF] my-auto text-left xl:ml-14">
          <p className="xl:text-[2.625rem] text-[1.5rem] font-extrabold">
            {" "}
            Contact Us
          </p>
          <p className="xl:text-[1.5rem] text-0.75 xl:p-0 p-3">
            Address : 10/1 Soi Ramintra 117 Ramintra Rd. <br />
            Minburi , Bangkok 10510
          </p>
          <p className="xl:text-[1.5rem] text-0.75 xl:p-0 p-3">
            Mobile : 083-101-8704 Mr.Nutdanai Pulkert (Few)
          </p>
          <p className="xl:text-[1.5rem] text-0.75 xl:p-0 p-3">
            ID Line : sale.bitsoft
          </p>
          <p className="xl:text-[1.5rem] text-0.75 xl:p-0 p-3">
            E-mail : sale.bitsoft@gmail.com
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
      <div className="grid xl:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="text-[#FFFFFF]">
          <img
            src="https://bitsoft-image-video.s3.ap-southeast-1.amazonaws.com/img-bitsoft/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A+bitsoft/Email+campaign-amico.png"
            className="xl:w-[30rem] xl:h-[30rem] w-[20rem] h-[18rem] p-3 mx-auto"
            alt=""
          />
        </div>
        <form ref={form} onSubmit={sendEmail} className="my-auto text-center">
          <div className="text-center p-2 text-[#ffffff]">
            สนใจติดต่อเพิ่มเติม
          </div>
          <div className="NameInput">
            <div className="w-[10rem] mx-auto text-[#FFFFFF] p-2">Name</div>
            <input
              type="text"
              placeholder="ใส่ชื่อของคุณ"
              name="user_name"
              className="rounded-xl w-[20rem] bg-slate-100 xl:-ml-[0rem] -ml-[1.75rem]"
            />
          </div>
          <div className="CompanyInput">
            <div className=" w-[10rem]  text-[#FFFFFF] p-2 mx-auto">
              Company
            </div>
            <input
              type="text"
              placeholder="ใส่ชื่อบริษัทของคุณ"
              name="company_name"
              className="rounded-xl w-[20rem] bg-slate-100 xl:-ml-[0rem] -ml-[1.75rem]"
            />
          </div>
          <div className="PhoneInput">
            <div className=" w-[10rem] text-[#FFFFFF] p-2 mx-auto">Mobile</div>
            <input
              type="tel"
              placeholder="ใส่เบอร์ของคุณ"
              name="phone_number"
              className="rounded-xl w-[20rem] bg-slate-100 xl:-ml-[0rem] -ml-[1.75rem]"
            />
          </div>
          <div className="EmailInput">
            <div className=" w-[10rem] text-[#FFFFFF] p-2 mx-auto">Email</div>
            <input
              type="email"
              placeholder="ใส่ E-mail ของคุณ"
              name="user_email"
              className="rounded-xl w-[20rem] bg-slate-100 xl:-ml-[0rem] -ml-[1.75rem]"
            />
          </div>
          <div className="DescriptionInput">
            <div className=" w-[10rem] text-[#FFFFFF] p-2 mx-auto">Message</div>
            <textarea
              rows="5"
              cols="50"
              name="message"
              type="text"
              className="rounded-xl w-[20rem] h-[6rem] bg-slate-100 text-[0.75rem] xl:-ml-[0rem] -ml-[1.75rem]"
            />
          </div>
          <button class="m-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
      <div>
        <Footer2/>
      </div>
    </>
  );
}

export default Contact;
