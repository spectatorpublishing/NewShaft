import React, { Component } from 'react';
import styled from "styled-components";
import MoreDormInfoBlock from "../components/MoreDormInfoBlock";
import WhiteboardSidebar from "../components/ReviewsWhiteboardSidebar"
import ReviewsBox from "../components/ReviewsBox"
import Review from "../components/Review"
import ReviewPageReview from "../components/ReviewPageReview"
import carouselimg from "./carouselimg.jpg"
import QuickReview from "../components/QuickReview";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

//import WhiteboardSidebar from "../components/ReviewsWhiteboardSidebar"
//import Review from "../components/Review"

const Star = styled.span`
  color: white;
`

const Space = styled.div`
  width: 5px;
`

const AllReviews = styled.div`
  width: 90%;
  height: 150vh;
  @media(max-width: 700px){
      height: 65vh;
  }
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const GrayFooter = styled.div`
  postion: fixed;
  bottom: 0;
  background-color: gray;
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MobileButton = styled.a`
  background-color: white;
  border-radius: 10px;
  width: 80%;
  padding: 15px 5px;
  margin: 10px;
  text-decoration: none;

  &>div {
    font-color: gray;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
`

const DesktopButton = styled.a`
  background-color: white;
  border-radius: 10px;
  border: 3px solid ${props => props.theme.columbiaBlue};
  width: 10vw;
  padding: 15px 5px;
  margin: 10px 30px;
  margin-left:4vw;
  text-decoration: none;
  color: ${props => props.theme.columbiaBlue};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 10px;
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
    width: 100%;
    height: 100%;
    padding: 0 auto;
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
  flex-direction: column;
  justify-content: flex-start;
`

const ColTwo = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    padding-left: 2%;
    margin-right:2rem;
    margin-bottom: 2rem;
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
    width: 60vw;
    height: 100%;
    overflow-y: scroll;
    padding: 4rem 0 2rem 1rem;
`

const QuickReviewDisplay = styled.div`
    width: 100%;
    padding-top: 1rem;
`
const QuickReviewBox = styled.div`
    margin-top: 1rem;
    box-shadow: 3px -4px 7px 2px rgba(0,0,0,0.1);
    padding-right: 1rem;
`

export default class Reviews extends Component{
  constructor(props){
    super(props)

    this.state = {
      dorm: "47 Claremont",
      dormRefresh: false,
      reviews: [],
      dorm_photos: [],
      QuickReview: {dorm_name: "47 Claremont", cleanliness: 4, noise: 1, community: 2, party: 1, amenities: 3},
      width: window.innerWidth,
      init: true,
    };

    this.handleDormChange = this.handleDormChange.bind(this)
    this.fetchMoreDormInfo = this.fetchMoreDormInfo.bind(this)
    this.handleDormChange = this.handleDormChange.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
    this.fetchQuickReview = this.fetchQuickReview.bind(this);
    this.createStars = this.createStars.bind(this);
    this.fetchDormPhotos = this.fetchDormPhotos.bind(this);

    this.fetchReviews(this.state.dorm);
    this.fetchQuickReview(this.state.dorm);
    this.fetchDormPhotos(this.state.dorm);
    this.fetchMoreDormInfo(this.state.dorm)
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
    this.fetchQuickReview(this.state.dorm);
    this.fetchDormPhotos(this.state.dorm);
    this.fetchMoreDormInfo(this.state.dorm);
    this.interval = setInterval(() => this.fetchReviews(this.state.dorm), 15000);
    this.interval = setInterval(() => this.fetchQuickReview(this.state.dorm), 15000);
    this.interval = setInterval(() => this.fetchDormPhotos(this.state.dorm), 15000);
    this.interval = setInterval(() => this.fetchMoreDormInfo(this.state.dorm), 15000);
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
        //console.log("Reviews data is: " + reviewsInfo.reviews[0].THUMBS_UP)
        this.setState({reviews: reviewsInfo.reviews, avg_rating: reviewsInfo.avg_rating, recommend: reviewsInfo.recommended, ranking: reviewsInfo.ranking})
      });
  }

  /* fetch MoreDormInfo */
  /* makes calls to getMoreDormInfo.js (passing dorm name as argument).
  Store the result in this.state.moreDormInfo.*/
  fetchMoreDormInfo(dormName){
    fetch(`/api/getMoreDormInfo/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(moreDormInfo => {
        this.setState({moreDormInfo: moreDormInfo})
    });
  }

  fetchQuickReview(dormName){
    fetch(`/api/getQuickReview/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(reviewsInfo => {
        this.setState({QuickReview : {cleanliness: reviewsInfo.clean, noise: reviewsInfo.noise, community: reviewsInfo.community, party: reviewsInfo.party, amenities: reviewsInfo.amenities}});
    });
  }

  fetchDormPhotos(dormName){
    fetch(`/api/getDormPhotos/${dormName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json"},
    })
      .then(res => res.json())
      .then(dormPhotos => {
        this.setState({dorm_photos: Object.values(dormPhotos)})
      });

  }

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
      this.fetchQuickReview(dorm);
      this.fetchDormPhotos(dorm);
      this.fetchMoreDormInfo(dorm)
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
                <ReviewPageReview
                  key={""+j}
                  stars={review.NUM_STARS}
                  review={review.REVIEW_TXT}
                  room={review.ROOM_NUM}
                  year={years_map[review.YEAR]}
                  timestamp={review.TIMESTAMP}
                  dorm={this.state.dorm}
                  recommended = {review.RECOMMEND}
                  thumbs_up = {review.THUMBS_UP}
                  thumbs_down = {review.THUMBS_DOWN}
                />
            ))}
          </AllReviews>
          <GrayFooter>
              <MobileButton href = {"http://www.google.com"}><div>SUBMIT A REVIEW</div></MobileButton>
              {/* TODO: update link here to point to actual comparison page */}
              {/*<MobileButton href = {"/compare-dorms"}><div>COMPARE DORMS</div></MobileButton>*/}
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
            <DesktopButton href = {"http://www.google.com"}>Submit a Review</DesktopButton>
            {/* TODO: update link here to point to actual comparison page */}
            {/*<DesktopButton href = {"/compare-dorms"}>Compare Dorms</DesktopButton>*/}
          </ColOne>
          <ColTwo>
            <h1>{this.state.dorm}</h1>
            {this.state.moreDormInfo ? (<MoreDormInfoBlock dormInfo={this.state.moreDormInfo} ></MoreDormInfoBlock>) : (<div></div>)}
            <QuickReviewDisplay>
              <Carousel showThumbs={false} infiniteLoop={true}>
                {this.state.dorm_photos.filter(function (img) {
                  if (img == 'N/A'){ return false; }
                  return true;
                }).map((dorm_photo, j) => (
                  <div key={"div"+j}>
                    <img src={dorm_photo} width = "1px" key={"img"+j}/>
                  </div>
                ))}
              </Carousel>
              <QuickReviewBox>
                <QuickReview QuickReview={this.state.QuickReview}></QuickReview>
              </QuickReviewBox>
            </QuickReviewDisplay>
          </ColTwo>
          <ColThree>
            <AllReviews>
              {this.state.reviews.map((review, j) => (
                  <ReviewPageReview
                    key={""+j}
                    stars={review.NUM_STARS}
                    review={review.REVIEW_TXT}
                    room={review.ROOM_NUM}
                    year={years_map[review.YEAR]}
                    timestamp={review.TIMESTAMP}
                    dorm = {this.state.dorm}
                    recommended = {review.RECOMMEND}
                    thumbs_up = {review.THUMBS_UP}
                    thumbs_down = {review.THUMBS_DOWN}
                  />
              ))}
            </AllReviews>
          </ColThree>
        </ReviewsContainer>
      </div>
    )
  }
}
