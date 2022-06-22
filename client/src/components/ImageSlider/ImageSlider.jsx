import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageSlider({ images }) {
  const url = process.env.REACT_APP_API_URL + "/images/";
  return (
    <div className="slider-container">
      <Carousel showThumbs={false} autoPlay={false}>
        {images.map((slideImage, index) => (
          <div className="image-container" key={index}>
            <img src={url + slideImage} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
