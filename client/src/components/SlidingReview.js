import React, { Component } from "react";
import Slider from "react-slick";
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

let StyledContainer = styled.div`
  .slick-slide {
    display: block;
    float: left;
  }

  .slick-slider.slick-initialized {
      overflow: hidden;
      position: relative;
      /* display: block; */
      padding-bottom: 3rem;
  }

  .slick-dots {
    text-align: center;
    bottom: 0;
    list-style: none;
    justify-content: center;
    width: 100%;
    padding: 0;
    position: absolute;
  }

  .slick-dots li, .slick-dots li * {
      display: inline-block;
      min-width: 2rem;
  }
  .slick-dots li {
      padding: 0 0.2rem;
      cursor: pointer;
  }
`

let NumberBlue = styled.p`
  border: 1px ${props => props.theme.columbiaBlue} solid;
  border-radius: 3px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.columbiaBlue};  
  text-align: center;
`
let NumberBlack = styled.p`
  border: 1px ${props => props.theme.columbiaBlue} solid;
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
                  return <a><NumberBlue>{i + 1}</NumberBlue></a>
                }
                else{
                  return <a><NumberBlack>{i + 1}</NumberBlack></a>
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
        
        if(numReviews == 0){
          return(
            <h2>No Reviews :(</h2>
          );
        }
        else{
          let numPages = Math.ceil(numReviews / reviews_per_page)
          for(let i = 0; i < numPages; i++){
            let reviews = []
            for(let j = i * reviews_per_page; j < (i * reviews_per_page) + reviews_per_page && j < numReviews; j++){
              reviews.push(this.props.reviews[j])
            }
            reviewsByPage.push(reviews)
          }
        }
        
        
        return (
          <StyledContainer>
          
            <Slider {...settings}>
                {reviewsByPage.map((reviews, i) => (
                  <div key={"" + i}>
                    {reviews.map((review, j) => (
                      <Review
                        key={""+j}
                        stars={review.NUM_STARS}
                        review={review.REVIEW_TXT} 
                        room={review.ROOM_NUM} 
                        year={years_map[review.YEAR]} 
                        timestamp={review.TIMESTAMP}
                        />
                    ))}
                  </div>
                ))}
            </Slider>
          </StyledContainer>
        );
    }
}