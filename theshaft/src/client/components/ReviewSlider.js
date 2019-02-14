import React, { Component } from "react";
import Slider from "react-slick";
import Review from "./Review.js";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black"  }}
      onClick={onClick}
    />
  );
}

const SliderStyle = {
  width: '600px',
  margin: 'auto'
};

export default class ReviewSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <div>
        <center style={SliderStyle}>
            <h2> Single Item</h2>
            <Slider {...settings}>
              <Review stars="2" review="FUCK" thumbsUp="2" thumbsDown="15" />
              <Review stars="3" review="SHIT" thumbsUp="100" thumbsDown="1" />
              <Review stars="5" review="BITCH" thumbsUp="7" thumbsDown="1" />
            </Slider>
        </center>
      </div>
    );
  }
}
