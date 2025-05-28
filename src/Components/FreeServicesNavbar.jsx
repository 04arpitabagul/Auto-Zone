import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FreeServicesNavbar.css";

const FreeServicesNavbar = () => {
  return (
    <Navbar expand="lg" className="free-navbar" variant="dark">
      <Container>
        <Nav className="me-auto free-nav">
          <Nav.Link as={Link} to="/">
            <span className="bold-white">FREE</span> SERVICES
          </Nav.Link>
          <Nav.Link as={Link} to="/BatteryTesting">
            BATTERY TESTING & CHARGING*
          </Nav.Link>
          <Nav.Link as={Link} to="/LoanTool">
            LOAN-A-TOOL®
          </Nav.Link>
          <Nav.Link as={Link} to="/PartsTesting">
            PARTS TESTING
          </Nav.Link>
          <Nav.Link as={Link} to="/Recycling">
            RECYCLING
          </Nav.Link>
          <Nav.Link as={Link} to="/ShopReferral">
            SHOP REFERRAL
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default FreeServicesNavbar;
