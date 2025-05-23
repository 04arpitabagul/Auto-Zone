import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LOGO from "../assets/az-logo-full.svg";
import Button from "react-bootstrap/Button";
import { FaUserAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "../Style.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbars = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-white">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">
            <img src={LOGO} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto   d-lg-block d-sm-none">
              <Nav.Link
                href="#deets"
                style={{ color: "#F26D0D", fontWeight: "bold" }}
              >
                20% off orders over $100<sup>*</sup> + Free Ground Shipping
                <sup>**</sup> <br />{" "}
                <span
                  style={{
                    color: "#5B5D5B",
                    fontSize: "12px",
                    fontWeight: "normal",
                  }}
                >
                  Eligible Ship-To-Home Items Only. Use Code: DIYSPECIAL
                </span>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="sign-in-link" href="#deets">
                <FaUserAlt /> Sign In{" "}
                <FaChevronDown style={{ fontSize: "10px" }} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <FaUserAlt /> Sign In{" "}
                <FaChevronDown style={{ fontSize: "10px" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
