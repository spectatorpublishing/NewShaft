import React, { Component } from 'react';
import styled from "styled-components";
import WhiteboardSidebar from "../components/WhiteboardSidebar"
import carouselimg from "./carouselimg.jpg"
import QuickReview from "../components/QuickReview";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
const ReviewsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 auto;
    overflow: hidden;
    flex-direction: row;
`

const ColOne = styled.div`
  display: flex;
  width: 20%;
  @media(max-width: 991px){
      display:flex;
      width:50vw;
  }
`

const ColTwo = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    padding-left: 2%;
    margin-right:2rem;
    width: ${({ mobile }) => (mobile ? `100%` : `40%`)};
    @media(max-width: 991px){
        display: flex;
        flex-direction: column;
        scroll-behavior: smooth;
        width: 60vw;
    }
    &>h1 {
      margin-top: 2.5rem;
      color: "64AFEC";
      font-weight: extra-bold;
    }

`

const ColThree = styled.div`
    width: 50vw;
`

const QuickReviewDisplay = styled.div`
    width: 30vw;
`
const QuickReviewBox = styled.div`
    box-shadow: 3px -4px 7px 2px rgba(0,0,0,0.1);
`

export default class Reviews extends Component{
  constructor(props){
    super(props)

    this.state = {
      dorm: "47 Claremont",
      dormRefresh: false,
      reviews: {},
      QuickReview: {dorm_name: "47 Claremont", cleanliness: 3, noise: 2, community: 2, party: 1, amenities: 3},
      width: window.innerWidth,
      init: true,
    }

    this.handleDormChange = this.handleDormChange.bind(this)
    this.fetchReviews = this.fetchReviews.bind(this)
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    document.title = "Reviews";
    this.interval = setInterval(() => this.fetchReviews(this.state.dorm), 15000);

  }

  fetchReviews(dormName){
    fetch(`/api/getReviews/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(reviewsInfo => {
        this.setState({reviews: reviewsInfo.reviews, avg_rating: reviewsInfo.avg_rating, reccomend: reviewsInfo.reccomended, ranking: reviewsInfo.ranking})
      });
  }

  /* fetch MoreDormInfo */
  
  /* fetch QuickReviews */

  handleDormChange(dorm) {

    const firstFloor = {
      "47 Claremont": "1",
      "Broadway Hall": "3",
      "Carlton Arms": "1A",
      "East Campus": "6",
      "Furnald Hall": "1",
      "Harmony Hall": "1",
      "Hogan Hall": "2",
      "McBain Hall": "1",
      "600 W 113th": "2",
      "River Hall": "1",
      "Ruggles Hall": "1",
      "Schapiro Hall": "2",
      "Watt Hall": "1",
      "Wien Hall": "2",
      "Woodbridge Hall": "1"
    }
    this.setState({
      dorm: dorm,
      init: false
    }, () => {
      this.fetchReviews(dorm);
    });
  }

  render(){
    return(
      <div>
        <ReviewsContainer>
          <ColOne>
            <WhiteboardSidebar
              sidebarModification={this.handleDormChange} />
          </ColOne>
          <ColTwo>
            <h1>{this.state.dorm}</h1>
            {/* MoreDormInfo */}
            {/* QuickReview */}
            <QuickReviewDisplay>
              <Carousel>
                <div>
                  <img src={carouselimg} width = "1px"/>
                </div>
                <div>
                  <img src={carouselimg} width = "1px"/>
                </div>
                <div>
                  <img src={carouselimg} width = "1px"/>
                </div>
              </Carousel>
              <QuickReviewBox>
                <QuickReview QuickReview={this.state.QuickReview}></QuickReview>
              </QuickReviewBox>
            </QuickReviewDisplay>
          </ColTwo>
          <ColThree>
            {/* Reviews Slider */}
          </ColThree>
        </ReviewsContainer>
      </div>
    )
  }
}

