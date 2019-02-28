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
            oldSlide: undefined,
            activeSlide_: undefined,
            activeSlide: undefined
        }
    }

    render() {
        var activeSlide = this.state.activeSlide
        const settings = {
            customPaging: function(i) {
                console.log("activeslide: " + activeSlide)

                if(activeSlide && activeSlide + 1 === i + 1){
                  console.log("blue button: "  + (i + 1))
                  return <a><p style={{color: 'blue'}}>{i + 1}</p></a>  //p tag needs to be replaced with styled.div
                }
                else{
                  console.log("black button: " + (i + 1))
                  return <a>{i + 1}</a>
                }
            },
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            beforeChange: (current, next) =>
              this.setState({ oldSlide: current, activeSlide_: next }),
            afterChange: current => this.setState({ activeSlide: current })
            // nextArrow: <NextArrow />,
            // prevArrow: <PrevArrow />
        };
        return (
          <div>
            <Slider {...settings}>
                <div id="1">
                    {this.props.reviews.map((review) => <Review style={"flexDirection: column"} stars={review.stars} review={review.text} />)}                
                </div>
                <div id="2">
                    {this.props.reviews.map((review) => <Review style={"flexDirection: column"} stars={review.stars} review={review.text} />)}                
                </div>
                <div id="3">
                    {this.props.reviews.map((review) => <Review style={"flexDirection: column"} stars={review.stars} review={review.text} />)}                
                </div>
                <div id="4">
                    {this.props.reviews.map((review) => <Review style={"flexDirection: column"} stars={review.stars} review={review.text} />)}                
                </div>
            </Slider>
          </div>
        );
    }
}