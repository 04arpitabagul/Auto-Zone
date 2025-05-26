import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBatteryThreeQuarters,
  FaTools,
  FaRecycle,
  FaStore,
} from "react-icons/fa";

const PagesNavbar = () => {
  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>FREE SERVICES</h2>

        <div style={servicesContainerStyle}>
          <NavLink
            to="/BatteryTesting"
            style={navLinkStyle}
            activeStyle={activeNavStyle}
          >
            <div style={serviceItemStyle}>
              <FaBatteryThreeQuarters style={iconStyle} />
              <span>BATTERY TESTING & CHARGING*</span>
            </div>
          </NavLink>

          <NavLink
            to="/loan-a-tool"
            style={navLinkStyle}
            activeStyle={activeNavStyle}
          >
            <div style={serviceItemStyle}>
              <FaTools style={iconStyle} />
              <span>LOAN-A-TOOL*</span>
            </div>
          </NavLink>

          <NavLink
            to="/parts-testing"
            style={navLinkStyle}
            activeStyle={activeNavStyle}
          >
            <div style={serviceItemStyle}>
              <FaTools style={iconStyle} />
              <span>PARTS TESTING</span>
            </div>
          </NavLink>

          <NavLink
            to="/recycling"
            style={navLinkStyle}
            activeStyle={activeNavStyle}
          >
            <div style={serviceItemStyle}>
              <FaRecycle style={iconStyle} />
              <span>RECYCLING</span>
            </div>
          </NavLink>

          <NavLink
            to="/shop-referral"
            style={navLinkStyle}
            activeStyle={activeNavStyle}
          >
            <div style={serviceItemStyle}>
              <FaStore style={iconStyle} />
              <span>SHOP REFERRAL</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// Styles
const outerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f2f2f2",
  borderBottom: "1px solid #ddd",
};

const containerStyle = {
  backgroundColor: "#f2f2f2",
  padding: "15px 20px",
  fontFamily: '"Arial Black", Arial, sans-serif',
  maxWidth: "1200px",
  width: "100%",
};

const headingStyle = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  textAlign: "center",
};

const servicesContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "15px 30px",
};

const serviceItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.3px",
  padding: "5px 10px",
};

const iconStyle = {
  fontSize: "14px",
};

const navLinkStyle = {
  textDecoration: "none",
  color: "#006bb7",
  ":hover": {
    textDecoration: "underline",
  },
};

const activeNavStyle = {
  color: "#004080",
  fontWeight: "bolder",
};

export default PagesNavbar;
