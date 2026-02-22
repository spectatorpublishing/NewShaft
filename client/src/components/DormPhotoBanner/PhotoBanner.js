import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PhotosContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }

  .carousel .slide {
    max-height: 45rem; 
    overflow: hidden; 
  }

  @media only screen and (max-width: 767px) {
    .carousel .slide {
      max-height: 40vh;
    }
  }

  .control-arrow {
    opacity: 1 !important;
    background: rgba(0, 0, 0, 0.5) !important;
    width: 4rem !important;
    height: 4rem !important;
    border-radius: 50% !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 10;
    transition: background 0.3s;
  }

  .control-arrow:hover {
    background: rgba(0, 0, 0, 0.8) !important;
  }

  .control-prev:before,
  .control-next:before {
    font-size: 2rem !important;
    color: white !important;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const PhotoBanner = ({ bannerImages = [] }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(bannerImages);
  }, [bannerImages]);

  return (
    <PhotosContainer>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Img src={image} alt={`banner-${index}`} />
          </div>
        ))}
      </Carousel>
    </PhotosContainer>
  );
};

export default PhotoBanner;
