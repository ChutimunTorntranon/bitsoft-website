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
import Footer from "../layout/footer/Footer";

function Router() {
  return (
    <>
      {/* <NewNavbar /> */}
      <Routes>
        <>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/Solution" element={<Solution />} /> */}
          {/* <Route path="/Product" element={<Product />} /> */}
          {/* <Route path="/AboutUs" element={<About />} /> */}
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </>
      </Routes>
    </>
  );
}

export default Router;
