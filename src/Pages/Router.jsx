import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import BatteryTesting from "./BatteryTesting";
import LoanTool from "./LoanTool";
import PartsTesting from "./PartsTesting";
import Recycling from "./Recycling";
import ShopReferral from "./ShopReferral";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BatteryTesting" element={<BatteryTesting />} />
      <Route path="/LoanTool" element={<LoanTool />} />
      <Route path="/PartsTesting" element={<PartsTesting />} />
      <Route path="/Recycling" element={<Recycling />} />
      <Route path="/ShopReferral" element={<ShopReferral />} />
    </Routes>
  );
};

export default AppRouter;
