import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Review from "./Review.js"
import '../css/ReviewButton.css'
import styled from 'styled-components';

class PageButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: this.props.pageNumber
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(`Page Number: ${this.state.pageNumber}`)
  }

  render() {
    return(
      <button onClick={this.handleClick}>
        {this.props.pageNumber}
      </button>

    );
  }

}


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
            customPaging: function(i) {
              return (
                <a>
                  {i+1}
                  {/* <PageButton pageNumber={i + 1}/> */}
                </a>
              );
            },
            dots: true,
            infinite: false,
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
                <div>
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