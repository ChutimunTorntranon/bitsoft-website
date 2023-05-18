import React from "react";
import Product from "../page/Product/Product";
import { Route, Routes } from "react-router-dom";
import ContactBar from "../layout/ContactBar";
import Homepage from "../page/Home/Homepage";
import Servicepage from "../page/service/Servicepage";
import Promote from "../page/Promote/Promote";
import Solution from "../page/Solution/Solution";
import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import Navbar from "../layout/Navbar";
import NewNavbar from "../layout/newNavbar/NewNavbar";
function Router() {
  return (
    <>
      <NewNavbar />
      {/* <ContactBar /> */}
      {/* <Navbar2 /> */}
      {/* <Navbar /> */}
      {/* <Homepage /> */}
      {/* <Servicepage /> */}
      {/* <Promote /> */}
      {/* <Solution /> */}
      {/* <Product /> */}
      {/* <About /> */}
      {/* <Contact /> */}
    </>
  );
}

export default Router;
