import React, { useState, useEffect } from "react";
import styled from "styled-components";
/* import Carousel from 're-carousel' */
import Dots from './CarouselDots'
import Buttons from './CarouselButtons'

const PhotosContainer = styled.div`
  width: 90%;
  height: 44rem;
  margin: 0rem auto 0rem auto;
  
  @media only screen and (max-width: 767px) {
		width: 100%;
    height: 40vh;
	}
`

const Img = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
  object-position: bottom; 
`

const PhotoBanner = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    setImages(props.bannerImages)
    console.log(props.bannerImages)
  }, [props.bannerImages]);

  const handleWindowSizeChange = () => {

  };

  console.log(images.length)
  const frames = (images.length === 0) ? null : images.map(image => (<Img src={image}></Img>))

  return (
    <PhotosContainer>
      {/*  To enable auto scroll: <Carousel loop={true} auto={true} frames={frames} widgets={[Dots, Buttons]}> */}
      {/* <Carousel loop={true} frames={frames} widgets={[Dots, Buttons]}>
        <div></div>
      </Carousel> */}
    </PhotosContainer>
  );
};

export default PhotoBanner;
