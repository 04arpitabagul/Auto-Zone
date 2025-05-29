import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceLinks.css";
import LOGOPEN from "../assets/Pennzoil_logo.png";

const BannerAd = () => {
  const navigate = useNavigate();

  return (
    <div className="banner-ad" onClick={() => navigate("/pennzoil-offer")}>
      <div className="banner-content">
        <img src={LOGOPEN} alt="Pennzoil" className="banner-logo" />
        <div className="banner-text">
          <h5>
            UP TO $30 IN <strong>MASTERCARD</strong>{" "}
            <em>virtual rewards cards</em>
          </h5>
          <p>
            When you buy 10 qts. of qualifying Pennzoil® full synthetic motor
            oils*
          </p>
        </div>
        <button className="shop-btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default BannerAd;
