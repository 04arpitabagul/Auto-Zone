import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css';

const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Sponsored') 
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, 
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600, 
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="product-slider-wrapper p-4 bg-white">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="slider-card px-2">
            <div className="bg-gray-100 p-4 rounded shadow h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h5 className="text-lg font-bold mb-2">{product.title}</h5>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
