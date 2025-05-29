import React from "react";
import "./SliderSection.css";
import img1 from "../assets/Slider2_one.webp";
import img2 from "../assets/Slider2_two.webp";
import img3 from "../assets/Slider2_three.webp";
import img4 from "../assets/Slider2_four.webp";
import img5 from "../assets/Slider2_five.webp";
import img6 from "../assets/Slider2_six.webp";
import img7 from "../assets/Slider2_seven.webp";
import img8 from "../assets/Slider2_eight.webp";

const cardData = [
  {
    title: "SHOP LOCAL STORE DEALS",
    subtitle: "View your monthly ad",
    image: `${img1}`,
  },
  {
    title: "OIL AND FILTERS DEALS",
    subtitle: "Bundle and save with an STP® oil filter",
    image: `${img2}`,
  },
  {
    title: "LIMITED-TIME DEALS",
    subtitle: "Don't miss out on savings",
    image: `${img3}`,
  },
  {
    title: "AUTOZONE REWARDS®",
    subtitle: "Join for free and earn more",
    image: `${img4}`,
  },
  {
    title: "GET IT FAST",
    subtitle:
      "Pick up in-store today, or get it quickly with Same Day Delivery",
    image: `${img5}`,
  },
  {
    title: "HAVE A JOB?",
    subtitle: "Check out step-by-step guides and solutions",
    image: `${img6}`,
  },
  {
    title: "ENGINE LIGHT ON?",
    subtitle: "We'll check it and give a free Fix Finder report",
    image: `${img7}`,
  },
  {
    title: "SHOP NGK COILS",
    subtitle: "When you buy 2 or more NGK ignition coils",
    image: `${img8}`,
  },
];

const SliderSection = () => {
  return (
    <div className="slider-section px-3 py-4">
      <div className="scroll-container">
        {cardData.map((card, index) => (
          <div key={index} className="slider-card">
            <div className="card-text">
              <h6>{card.title}</h6>
              <p>{card.subtitle}</p>
            </div>
            <img src={card.image} alt={card.title} className="card-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderSection;
