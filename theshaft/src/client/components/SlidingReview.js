import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Review from "./Review.js"
import '../css/ReviewButton.css'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }

export default class SlidingReview extends Component {
    constructor(props){
        super(props);

        this.state = {
            page: 1,
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />
        };
        return (
        <div>
            <Slider {...settings}>
                <div style={""}>
                    {this.props.reviews.map((review) => <Review style={"flexDirection: column"} stars={review.stars} review={review.text} />)}                
                </div>
                <div>
                    {this.props.reviews.map((review) => <Review style={"flexDirection: column"} stars={review.stars} review={review.text} />)}                
                </div>
                <div>
                    {this.props.reviews.map((review) => <Review style={"flexDirection: column"} stars={review.stars} review={review.text} />)}                
                </div>
                <div>
                    {this.props.reviews.map((review) => <Review style={"flexDirection: column"} stars={review.stars} review={review.text} />)}                
                </div>
            </Slider>
        </div>
        );
    }
}