import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Review from "./Review.js"
import '../css/Review.css'
import styled from 'styled-components';

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

const years_map = {
  "first-years": "Freshman",
  "sophomores": "Sophomore",
  "juniors": "Junior",
  "seniors": "Senior"
}

const reviews_per_page = 4

let PageNumberBlue = styled.p`
  border: 1px grey solid;
  border-radius: 3px;
  color: white;
  background-color: ${props => props.theme.columbiaBlue};  
  text-align: center;
`
let PageNumberBlack = styled.p`
  border: 1px grey solid;
  border-radius: 3px;
  text-align: center;
`

export default class SlidingReview extends Component {
    constructor(props){
        super(props);

        this.state = {
            page: 1,
            oldSlide: undefined,
            activeSlide_: undefined,
            activeSlide: 0
        }
    }

    render() {
        var activeSlide = this.state.activeSlide
        const settings = {
            customPaging: function(i) {
                if(activeSlide !== "undefined" && activeSlide + 1 === i + 1){
                  return <a><PageNumberBlue>{i + 1}</PageNumberBlue></a>
                }
                else{
                  return <a><PageNumberBlack>{i + 1}</PageNumberBlack></a>
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

        let reviewsByPage = []
        let numReviews = this.props.reviews.length
        let numPages = Math.ceil(numReviews / reviews_per_page)
        for(let i = 0; i < numPages; i++){
          let reviews = []
          for(let j = i * reviews_per_page; j < (i * reviews_per_page) + reviews_per_page && j < numReviews; j++){
            reviews.push(this.props.reviews[j])
          }
          reviewsByPage.push(reviews)
        }
        
        return (
          <div>
            <Slider {...settings}>
                {reviewsByPage.map((reviews, i) => (
                  <div id={"" + i}>
                    {reviews.map((review) => (
                      <Review
                              stars={review.NUM_STARS}
                              review={review.REVIEW_TXT} 
                              room={review.ROOM_NUM} 
                              year={years_map[review.YEAR]} 
                              timestamp={review.TIME_STAMP.substring(0, 10)}/>
                    ))}
                  </div>
                ))}
            </Slider>
          </div>
        );
    }
}