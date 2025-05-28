import Carousel from "react-bootstrap/Carousel";
import ione from "../assets/Slider1_one.webp";
import itwo from "../assets/Slider1_two.jpg";
import ithree from "../assets/Slider1_three.jpg";
import ifour from "../assets/Slider1_four.webp";
import ifive from "../assets/Slider1_five.webp";
import isix from "../assets/Slider1_six.webp";

import "./Slider1.css";

function Slider1() {
  return (
    <div className="slider-container">
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img src={ione} alt="First slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={itwo} alt="Second slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={ithree} alt="Third slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={ifour} alt="Fourth slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={ifive} alt="Fifth slide" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={isix} alt="Sixth slide" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider1;
