import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
import digicert from "../assets/digicert@3x.avif";
import appstore from "../assets/app_store.svg";
import googleplay from "../assets/google-play.svg";

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light pt-5 pb-4">
      <Container>
        <Row>
          <Col md={2} xs={6}>
            <h6 className="footer-heading">SHOP</h6>
            <ul className="footer-list">
              <li>AutoZone Locations</li>
              <li>Vehicle Make</li>
              <li>Vehicle Model</li>
              <li>Shop All Brands</li>
              <li>Vehicle VIN Lookup</li>
              <li>Gift Cards</li>
              <li>Discounts & Coupons</li>
              <li>Local Store Ad</li>
              <li>Clearance</li>
            </ul>
          </Col>

          <Col md={2} xs={6}>
            <h6 className="footer-heading">PRODUCTS</h6>
            <ul className="footer-list">
              <li>Auto Parts</li>
              <li>Interior Accessories</li>
              <li>Exterior Accessories</li>
              <li>Truck</li>
              <li>Tools</li>
              <li>Chemicals</li>
              <li>Performance</li>
            </ul>
          </Col>

          <Col md={2} xs={6}>
            <h6 className="footer-heading">HELP</h6>
            <ul className="footer-list">
              <li>Track My Order</li>
              <li>Contact Us</li>
              <li>My Account</li>
              <li>FAQs</li>
              <li>Return Policies</li>
              <li>Product Recalls</li>
              <li>Product Ingredient Disclosures</li>
              <li>Web Accessibility</li>
            </ul>
          </Col>

          <Col md={3} xs={6}>
            <h6 className="footer-heading">ABOUT US</h6>
            <ul className="footer-list">
              <li>Careers</li>
              <li>About AutoZone</li>
              <li>Investor Relations</li>
              <li>Affiliate Program</li>
              <li>Vendor Information</li>
              <li>Corporate Responsibility</li>
              <li>National Account/Fleet</li>
            </ul>
          </Col>

          <Col md={3} xs={12}>
            <h6 className="footer-heading">SERVICES</h6>
            <ul className="footer-list">
              <li>Buy Online, Pick Up in Store</li>
              <li>Loan-A-Tool</li>
              <li>In-Store Services</li>
              <li>Repair Help</li>
              <li>Mobile App</li>
              <li>Find a Repair Shop</li>
              <li>AutoZone Rewards</li>
              <li>Sign Up for Text Messages</li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="text-center mt-3">
          <Col>
            <h6 className="footer-heading">OTHER AUTOZONE SITES</h6>
            <p className="footer-bottom-links">
              AutoZoner Services &nbsp; | &nbsp; AutoZone Pro &nbsp; | &nbsp;
              ALLDATA diy &nbsp; | &nbsp; ALLDATA Repair &nbsp; | &nbsp;
              Duralast &nbsp; | &nbsp; AutoZone MX
            </p>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="align-items-center text-center text-md-start">
          <Col md={2} className="mb-3 mb-md-0">
            <img src={digicert} alt="DigiCert Trusted" width="60" height="50" />
          </Col>

          <Col md={8}>
            <div className="footer-bottom-links d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Notice at Collection</span>
              <span>Return Policy</span>
              <span>CA Supply Chain Disclosure</span>
              <span>Your California and Other State Law Privacy Rights</span>
              <span>Insurance & Risk Management</span>
              <span>Sitemap</span>
            </div>
          </Col>

          <Col md={2} className="text-center mt-3 mt-md-0">
            <img src={appstore} alt="App Store" height="20" className="me-1" />
            <img src={googleplay} alt="Google Play" height="20" />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center footer-bottom-links">
            © 2001-2025 AutoZone, Inc. All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
