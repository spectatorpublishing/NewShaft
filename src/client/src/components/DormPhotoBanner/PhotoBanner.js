import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from 're-carousel'
import Dots from './CarouselDots'
import Buttons from './CarouselButtons'

let PhotosContainer = styled.div`
  width: 90%;
  height: 90vh;
  margin: 0rem auto 0rem auto;
  
  @media only screen and (max-width: 767px) {
		width: 100%;
    height: 40vh;
	}
`

let Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: bottom; 
`

let Button = styled.button`

`

let ViewButton = styled.button`
  
`

const PhotoBanner = (props) => {
  const [photoIndex, setPhotoIdx] = useState(0);
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
      <Carousel loop={true} auto={true} interval={3000} frames={frames} widgets={[Dots, Buttons]}>
        <div>frames</div>
      </Carousel>
    </PhotosContainer>
  );
};

export default PhotoBanner;
