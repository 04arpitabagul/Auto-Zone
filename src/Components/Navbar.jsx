import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import LOGO from "../assets/az-logo-full.svg";
import { FaUserAlt, FaChevronDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "../Style.css";
import SignInDropdown from "./SignInDropdown";

const Navbars = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      {/* Orange banner visible only on large screens */}
      <div className="orange-banner d-none d-lg-block text-center py-1">
        <span style={{ color: "#F26D0D", fontWeight: "bold" }}>
          20% off orders over $100<sup>*</sup> + Free Ground Shipping
          <sup>**</sup>
        </span>
        <br />
        <span style={{ color: "#5B5D5B", fontSize: "12px" }}>
          Eligible Ship-To-Home Items Only. Use Code: DIYSPECIAL
        </span>
      </div>

      <Navbar expand="lg" className="bg-white shadow-sm fixed-top">
        <Container className="justify-content-between">
          {/* Logo */}
          <Navbar.Brand href="#home">
            <img src={LOGO} alt="Logo" height="40" />
          </Navbar.Brand>

          {/* Sign In + Cart */}
          <div className="d-flex align-items-center gap-4 position-relative">
            {/* Sign In Dropdown */}
            <div
              className="sign-in-wrapper"
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div
                className="d-flex align-items-center gap-1 sign-in-trigger"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <FaUserAlt />
                <span className="d-none d-sm-inline">Sign In</span>
                <FaChevronDown style={{ fontSize: "10px" }} />
              </div>
              {showDropdown && <SignInDropdown />}
            </div>

            {/* Cart */}
            <div className="d-flex align-items-center cart-link">
              <FaCartShopping />
              <span className="d-none d-sm-inline ms-1">Cart</span>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
