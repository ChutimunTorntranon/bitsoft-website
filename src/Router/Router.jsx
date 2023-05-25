import React from "react";
import Product from "../page/Product/Product";
import { Route, Routes } from "react-router-dom";
import ContactBar from "../layout/ContactBar";
import Homepage from "../page/Home/Homepage";
import Servicepage from "../page/service/Servicepage";
import Promote from "../page/Promote/Promote";
// import Solution from "../page/Solution/Solution";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Navbar from "../layout/Navbar";
import NewNavbar from "../layout/newNavbar/NewNavbar";
import Footer from "../layout/footer/Footer";
import ServiceMobile from "../page/service/ServiceMobile";
import Nav from "../layout/nav/Nav";
import Team from "../page/About/Team";
function Router() {
  return (
    <>
      {/* <NewNavbar /> */}
      <Nav />
      <Routes>
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Service" element={<ServiceMobile />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </>
      </Routes>
    </>
  );
}

export default Router;
