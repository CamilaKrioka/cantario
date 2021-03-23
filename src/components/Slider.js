import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 max-width: 900px"
            src="images/Ilustraciones/Ilustraciones-23.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/Ilustraciones/Ilustraciones-24.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/Ilustraciones/Ilustraciones-25.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
