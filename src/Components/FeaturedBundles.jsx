import React from "react";
import "./FeaturedBundles.css";
import ignitionCoilImg from "../assets/2s-duralast-d.webp";
import fuelTreatmentImg from "../assets/2s-griots-d.webp";
import cleaningWipesImg from "../assets/lucas-d.webp";
import garageItemsImg from "../assets/armor-all-d.webp";
import airFreshenersImg from "../assets/little-trees-d.webp";

const FeaturedBundles = () => {
  return (
    <div className="featured-bundles-container">
      <h1 className="featured-heading">FEATURED BUNDLE DEALS</h1>

      {/* First Deal */}
      <div className="deal-section">
        <div className="deal-header">
          <strong>BUNDLE DEAL DAYS - 20% OFF</strong>
        </div>
        <div className="deal-content">
          <p>When you buy 4 Duralast Ignition Coils</p>
          <img
            src={ignitionCoilImg}
            alt="Duralast Ignition Coils"
            className="deal-image"
          />
          <p className="disclaimer">Sales fees not included</p>
        </div>
      </div>

      {/* Two Column Deals */}
      <div className="two-column-deals">
        <div className="column-deal">
          <div className="deal-price">2 FOR ₹8</div>
          <img
            src={fuelTreatmentImg}
            alt="Lucas Fuel Treatment"
            className="deal-image"
          />
          <p>Lucas Complete Fuel System Treatment</p>
        </div>
        <div className="column-deal">
          <div className="deal-price">2 FOR ₹8</div>
          <img
            src={garageItemsImg}
            alt="Armor All Wipes"
            className="deal-image"
          />
          <p>Armor All Cleaning Wipes</p>
        </div>
      </div>

      {/* Second Deal */}
      <div className="deal-section">
        <div className="deal-header">
          <strong>BUNDLE DEAL DAYS - BUY 1, GET 1 50% OFF</strong>
        </div>
        <div className="deal-content">
          <p>Select Griot's Garage Items</p>
          <img
            src={garageItemsImg}
            alt="Griot's Garage Items"
            className="deal-image"
          />
        </div>
      </div>

      {/* Two Column Deals */}
      <div className="two-column-deals">
        <div className="column-deal">
          <div className="deal-price">2 FOR ₹5</div>
          <img
            src={airFreshenersImg}
            alt="Little Trees Air Fresheners"
            className="deal-image"
          />
          <p>Select Little Trees 3-Pack Paper Off of Pack Vent</p>
        </div>
      </div>

      {/* Simple Text Lines */}
      <div className="text-lines">
        <p>Next line: 2</p>
        <p>Next line: 2</p>
        <p>Next line: 2</p>
      </div>
    </div>
  );
};

export default FeaturedBundles;
