import React, { Component } from 'react';
import styled from "styled-components";
import WhiteboardSidebar from "../components/ReviewsWhiteboardSidebar"
import Review from "../components/Review"
import StickyFooter from 'react-sticky-footer';

const Star = styled.span`
  color: white;
`

const Space = styled.div`
  width: 5px;
`

const AllReviews = styled.div`
  width: 90%;
  height: 65vh;
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const GrayFooter = styled.div`
  postion: fixed;
  bottom: 0;
  background-color: gray;
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MobileButton = styled.div`
  background-color: white;
  font-color: gray;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 15px 5px;
  border-radius: 10px;
  width: 80%;
  margin: 10px;
`

const ReviewSummary = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &>p{
    color: white;
  }
`

const ReviewsContainer = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: row;
`

const ReviewsContainerMobile = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BlueHeader = styled.div`
    background-color: ${props => props.theme.columbiaBlue};
    padding: 2rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>h1 {
      color: white;
    }
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

export default class Reviews extends Component{
  constructor(props){
    super(props)

    this.state = {
      dorm: "47 Claremont",
      dormRefresh: false,
      reviews: [],
      width: window.innerWidth,
      init: true,
    }

    this.handleDormChange = this.handleDormChange.bind(this)
    this.fetchReviews = this.fetchReviews.bind(this)
    this.createStars = this.createStars.bind(this)

    this.fetchReviews(this.state.dorm);
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
    this.fetchReviews(this.state.dorm);
    this.interval = setInterval(() => this.fetchReviews(this.state.dorm), 15000);

  }

  createStars(score) {
    let wrapper = [];
    let stars = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      stars.push(<Star key={k++}>&#x2605;</Star>);
    }
    for(let j = 0; j < 5 - score; j++) {
      stars.push(<Star key={k++}>&#x2606;</Star>);
    }
    wrapper.push(<div key={k++}>{stars}</div>);
    return wrapper;
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

  /* fetch QuickReview */

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
    const isMobile = this.state.width <= 700
    const years_map = {
      "first-years": "Freshman",
      "sophomores": "Sophomore",
      "juniors": "Junior",
      "seniors": "Senior"
    }
    // TODO: change the review component here to the updated one
    if (isMobile){
      let hasNoReviews = (this.state.reviews.length === 0)
      console.log(this.state.reviews)
      return (
        <ReviewsContainerMobile>
          <BlueHeader>
            <h1>DORM REVIEWS</h1>
            <WhiteboardSidebar isMobile = {isMobile}
                               sidebarModification={this.handleDormChange}
                               currDorm={this.state.dorm} />
            <ReviewSummary>
                {hasNoReviews ? "No review" : this.createStars(Math.round(Number(this.state.avg_rating)))}<Space /><p>{this.state.reccomend} Recommended</p>
            </ReviewSummary>
          </BlueHeader>
          <AllReviews>
            {this.state.reviews.map((review, j) => (
                <Review
                  key={""+j}
                  stars={review.NUM_STARS}
                  review={review.REVIEW_TXT}
                  room={review.ROOM_NUM}
                  year={years_map[review.YEAR]}
                  timestamp={review.TIMESTAMP}
                />
            ))}
          </AllReviews>
          <GrayFooter>
              <MobileButton>SUBMIT A REVIEW</MobileButton>
              <MobileButton>COMPARE DORMS</MobileButton>
          </GrayFooter>
        </ReviewsContainerMobile>
      )
    }
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
          </ColTwo>
          <ColThree>
            {/* Reviews Slider */}
          </ColThree>
        </ReviewsContainer>
      </div>
    )
  }
}
