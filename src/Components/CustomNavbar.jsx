import "./CustomNavbar.css";
import React, { useState } from "react";
import STORE from "../assets/Store.jpg";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaCar,
  FaAngleRight,
  FaTools,
  FaTruck,
  FaTruckPickup,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TbBatteryAutomotiveFilled } from "react-icons/tb";
import { BsFillCollectionFill } from "react-icons/bs";
import { CgCircleci, CgPerformance } from "react-icons/cg";
import { GiChemicalDrop } from "react-icons/gi";
import { Navbar, Container, Form, FormControl, Modal } from "react-bootstrap";

const CustomNavbar = () => {
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [showSelectStore, setShowSelectStore] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const baseBtnStyle = {
    backgroundColor: "#f1f1f1",
    border: "1px solid #ccc",
    color: "#333",
    fontFamily: "Segoe UI, Roboto, sans-serif",
    fontSize: "14px",
    padding: "6px 12px",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const hoverBtnStyle = {
    backgroundColor: "#e0e0e0",
    borderColor: "#aaa",
    color: "#000",
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
        <Container fluid>
          <div className="d-flex flex-wrap align-items-center w-100 gap-2">
            {/* Hamburger Icon */}
            <Button
              style={baseBtnStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverBtnStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, baseBtnStyle)}
              onClick={handleShow}
            >
              <RxHamburgerMenu />
            </Button>

            {/* Offcanvas */}
            <Offcanvas
              show={show}
              onHide={handleClose}
              className="custom-offcanvas"
            >
              <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title className="offcanvas-title">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
                <div className="menu-section">
                  <div className="menu-item">
                    <span>Find a Store</span>
                  </div>
                  <div className="menu-item">
                    <span>Store Services</span>
                  </div>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-section">
                  <h5 className="menu-heading">Most Popular</h5>
                  <ul className="menu-list">
                    <li>Batteries</li>
                    <li>Engine Oil</li>
                    <li>Brake Pads</li>
                    <li>Oil Filter</li>
                    <li>Air Filter</li>
                    <li>Spark Plug</li>
                    <li>Wiper Blades</li>
                    <li>Headlight Bulb</li>
                    <li>Car Wash and Detailing</li>
                  </ul>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-section">
                  <h5 className="menu-heading">Shop All</h5>
                  <ul className="menu-list">
                    <li>
                      <TbBatteryAutomotiveFilled /> Auto Parts
                    </li>
                    <li>
                      <BsFillCollectionFill /> Interior Accessories
                    </li>
                    <li>
                      <FaTruckPickup /> Exterior Accessories
                    </li>
                    <li>
                      <FaTruck /> Truck and Towing
                    </li>
                    <li>
                      <FaTools /> Tools
                    </li>
                    <li>
                      <GiChemicalDrop /> Chemicals, Oil & Wash
                    </li>
                    <li>
                      <CgPerformance /> Performance
                    </li>
                  </ul>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-section">
                  <h5 className="menu-heading">Shop Deals</h5>
                  <ul className="menu-list">
                    <li>Clearance</li>
                    <li>Deals, Discounts, and Coupons</li>
                    <li>Oil Change Specials</li>
                    <li>Local Store Ad</li>
                    <li>Rebates</li>
                  </ul>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-section">
                  <h5 className="menu-heading">Shop By</h5>
                  <ul className="menu-list">
                    <li>Shop by Make</li>
                    <li>Shop by Model</li>
                    <li>Shop by Brand</li>
                  </ul>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-section">
                  <h5 className="menu-heading">Trustworthy Advice</h5>
                  <ul className="menu-list">
                    <li>Advice & How-To's</li>
                    <li>Battery Guide</li>
                    <li>Fix Finder</li>
                    <li>Loan-A-Tool</li>
                    <li>ALLDATA DIY Repair Help</li>
                    <li>Find a Repair Shop</li>
                    <li>Repair Help</li>
                    <li>Custom Accessories</li>
                  </ul>
                </div>

                <div className="menu-divider"></div>

                <div className="menu-section">
                  <div className="menu-item">
                    <span>Contact Us</span>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

            {/* Add Vehicle Button */}
            <Button
              style={baseBtnStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverBtnStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, baseBtnStyle)}
              onClick={() => setShowAddVehicle(true)}
            >
              <FaCar /> Add Vehicle <FaAngleRight />
            </Button>

            {/* Search Bar */}
            <Form className="flex-grow-1 mx-2" style={{ minWidth: "180px" }}>
              <FormControl
                type="search"
                placeholder="Search for parts, products, etc."
                style={{
                  fontSize: "14px",
                  fontFamily: "Segoe UI, Roboto, sans-serif",
                }}
              />
            </Form>

            {/* Select Store Button */}
            <Button
              style={baseBtnStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, hoverBtnStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, baseBtnStyle)}
              onClick={() => setShowSelectStore(true)}
            >
              <IoLocationOutline /> Select Store <FaAngleRight />
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Add Vehicle Modal */}
      <Modal show={showAddVehicle} onHide={() => setShowAddVehicle(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>Vehicle modal content goes here...</Modal.Body>
      </Modal>

      {/* Select Store Modal */}
      <Modal
        show={showSelectStore}
        onHide={() => setShowSelectStore(false)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>SEARCH FOR A STORE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            {/* Content Div */}
            <div className="flex-grow-1 pe-4">
              <div className="mb-3">
                <h5>Enter city, state or ZIP code</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a store..."
                />
                <p className="text-muted mt-2">
                  Search and set a store to see product prices and deals near
                  you.
                </p>
              </div>

              <hr className="my-4" />

              <div className="mb-4">
                <h5>IN-STORE SERVICES</h5>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <span className="badge bg-light text-dark p-2">
                    Loan-A-Tool Program
                  </span>
                  <span className="badge bg-light text-dark p-2">
                    Q2 Recycling
                  </span>
                  <span className="badge bg-light text-dark p-2">
                    Free Battery Charging
                  </span>
                  <span className="badge bg-light text-dark p-2">
                    Battery Recycling
                  </span>
                  <span className="badge bg-light text-dark p-2">
                    Fix Finder
                  </span>
                  <span className="badge bg-light text-dark p-2">
                    Buy Online, Pick Up In-store
                  </span>
                  <span className="badge bg-light text-dark p-2">
                    AutoZone Rewards
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold">
                  Bundle and save with an STP® oil filter
                </h6>
              </div>

              <div className="mb-4">
                <button className="btn btn-warning">
                  Join for free and earn more
                </button>
              </div>

              <div className="mb-3">
                <h6>
                  Pick up in-store today, or get it quickly with Same Day
                  Delivery
                </h6>
              </div>

              <div>
                <a href="#" className="text-primary">
                  Check out step-by-step guide and solutions
                </a>
              </div>
            </div>

            {/* Image Div - Replace with your actual image */}
            <div className="d-none d-md-block" style={{ width: "300px" }}>
              <img
                src={STORE}
                alt="Store location"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSelectStore(false)}>
            Close
          </Button>
          <Button variant="primary">Search Stores</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomNavbar;
