import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import BatteryTesting from "./BatteryTesting";
import LoanTool from "./LoanTool";
import PartsTesting from "./PartsTesting";
import Recycling from "./Recycling";
import ShopReferral from "./ShopReferral";
import ServiceLinksPage from "./ServiceLinksPage";
import BannerAdPage from "./BannerAdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/BatteryTesting" element={<BatteryTesting />} />
      <Route path="/LoanTool" element={<LoanTool />} />
      <Route path="/PartsTesting" element={<PartsTesting />} />
      <Route path="/Recycling" element={<Recycling />} />
      <Route path="/ShopReferral" element={<ShopReferral />} />
      <Route path="/services" element={<ServiceLinksPage />} />     
      <Route path="/promo-banner" element={<BannerAdPage />} />
    </Routes>
  );
};

export default AppRouter;
