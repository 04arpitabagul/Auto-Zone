import React from "react";
import { FaGift, FaClipboardList, FaTools } from "react-icons/fa";

const SignInDropdown = () => {
  return (
    <div className="signin-dropdown">
      <button className="signin-button">Sign In or Create Account</button>
      <div className="dropdown-option">
        <FaGift className="me-2" /> <strong>Earn Rewards</strong>
        <div className="option-desc">Learn about our rewards program</div>
      </div>
      <div className="dropdown-option">
        <FaClipboardList className="me-2" /> <strong>Track Order</strong>
        <div className="option-desc">
          Use email and order number to track an order
        </div>
      </div>
      <div className="dropdown-option">
        <FaTools className="me-2" /> <strong>Find a Repair Shop</strong>
        <div className="option-desc">Use our Shop Referral Program</div>
      </div>
    </div>
  );
};

export default SignInDropdown;
