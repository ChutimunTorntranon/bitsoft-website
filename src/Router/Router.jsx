import React from "react";
import Product from "../page/Product/Product";
import { Route, Routes } from "react-router-dom";
import Homepage from "../page/Home/Homepage";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import ServiceMobile from "../page/service/ServiceMobile";
import Nav from "../layout/nav/Nav";

function Router() {
  return (
    <>
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
