import styled from "styled-components/macro";
import React, {useState} from "react";
import PhotoBanner from "./DormPhotoBanner/PhotoBanner";


let LeftArrowDivider = styled.div`
    transform:rotate(-225deg);
`;
let RightArrowDivier = styled.div`
    transform:rotate(-45deg);
`;
let Preview = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;
let PreviewImg = styled.img`
  /* height: 200px; */
  width: 22%;
  object-fit: cover;
  padding: 2% 0;
  cursor:pointer;
`;

let ArrowContainer = styled.div`
    div{
        height:12px;
        width:12px;
        margin-left:-6px;
        border-right:2px solid black;
        border-bottom:2px solid black;
        top: 50%;
        position: absolute;
        cursor: pointer;
    }
`;
let Modal = styled.div`
    background-color: rgba(0,0,0,0.85);
    height: 100vh;
    width: 100vw;
    z-index: 100;
    display: inline-block;
    /* padding-top: 100px; */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .photoBanner{
        position: absolute;
        bottom: 0;
        /* left: 50%; */
        /* transform: translate(-50%, -50%); */
    }

`;

const NewPhotoGallery = ({images, updateModal}) =>{
    let numOfImages = images.length
    const [currentIndex, setCurrentIndex] = useState(0);
    const [popUpIndex, setPopUpIndex] = useState(0)
    const [showCarousel, setShowCarousel] = useState(false)

    const prevSlide = () =>{
        console.log("prev slide")
        setCurrentIndex(currentIndex === 0 ? numOfImages-1: currentIndex-1);
    }
    const nextSlide = () =>{
        console.log("next slide")
        setCurrentIndex(currentIndex === numOfImages-1 ? 0: currentIndex+1);
    }
    const setSlide = (index) =>{
        setPopUpIndex(index)
        // setShowCarousel(!showCarousel)
        // console.log(index)
    }
    
    return (
        <>
            <Preview>            
                <ArrowContainer>
                    <LeftArrowDivider onClick={prevSlide}/>
                </ArrowContainer>
                <PreviewImg key = {currentIndex} src = {images[currentIndex]} alt = {`${currentIndex}-img`} onClick={()=> setSlide(currentIndex)}/>
                <PreviewImg key = {currentIndex+1} src = {images[(currentIndex+1)%numOfImages]} alt = {`${currentIndex+1}-img`} onClick={()=> setSlide((currentIndex+1)%numOfImages)}/>
                <PreviewImg key = {currentIndex+2} src = {images[(currentIndex+2)%numOfImages]} alt = {`${currentIndex+2}-img`} onClick={()=> setSlide((currentIndex+2)%numOfImages)}/>
                <PreviewImg key = {currentIndex+3} src = {images[(currentIndex+3)%numOfImages]} alt = {`${currentIndex+3}-img`} onClick={()=> setSlide((currentIndex+3)%numOfImages)}/>
                <ArrowContainer>
                    <RightArrowDivier onClick={nextSlide}/>
                </ArrowContainer>
            </Preview>
            
            {/* {showCarousel ? 
                <Modal>
                    <PhotoBanner bannerImages={images} className="photoBanner"/>
                </Modal>
                :<></>
            } */}
            
            
        </>
    )
    
}

export default NewPhotoGallery;