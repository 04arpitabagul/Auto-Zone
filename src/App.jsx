import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Navbars from "./Components/Navbar";
import Footer from "./Components/Footer";
import CustomNavbar from "./Components/CustomNavbar";
import PagesNavbar from "./Components/PagesNavbar";
import BatteryTesting from "./Pages/BatteryTesting";
import PartsTesting from "./Pages/PartsTesting";
import Recycling from "./Pages/Recycling";
import ShopReferral from "./Pages/ShopReferral";
import LoanTool from "./Pages/LoanTool"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbars />
      <CustomNavbar />
      <PagesNavbar />
      {/* <Routes>
        <Route path="/battery-testing" element={<BatteryTesting />} />
        <Route path="/loan-a-tool" element={<LoanTool />} />
        <Route path="/parts-testing" element={<PartsTesting />} />
        <Route path="/recycling" element={<Recycling />} />
        <Route path="/shop-referral" element={<ShopReferral />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
