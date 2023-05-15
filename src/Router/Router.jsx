import React from "react";
import Product from "../page/Product/Product";
import { Route, Routes } from "react-router-dom";
import Navbar2 from "../layout/Navbar2";
import ContactBar from "../layout/ContactBar";
import Homepage from "../page/Home/Homepage";
import Servicepage from "../page/service/Servicepage";
import Promote from "../page/Promote/Promote";
import Solution from "../page/Solution/Solution";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Navbar from "../layout/Navbar";
function Router() {
  return (
    <>
      {/* <ContactBar /> */}
      {/* <Navbar2 /> */}
      <Navbar />
      {/* <Homepage /> */}
      {/* <Servicepage /> */}
      {/* <Promote /> */}
      {/* <Solution /> */}
      {/* <Product /> */}
      <About />
      <Contact />
    </>
  );
}

export default Router;
