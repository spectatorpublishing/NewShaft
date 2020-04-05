import React, { Component } from 'react';
import styled from "styled-components";
import WhiteboardSidebar from "../components/WhiteboardSidebar";
import MoreDormInfoBlock from "../components/MoreDormInfoBlock";

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

export default class Reviews extends Component{
  constructor(props){
    super(props)

    this.state = {
      dorm: "47 Claremont",
      dormRefresh: false,
      reviews: {},
      width: window.innerWidth,
      init: true,
    }

    this.handleDormChange = this.handleDormChange.bind(this)
    this.fetchReviews = this.fetchReviews.bind(this)
    //added
    this.fetchMoreDormInfo = this.fetchMoreDormInfo.bind(this)
    //this.fetchMoreDormInfo(this.state.dorm);
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
    
    this.fetchMoreDormInfo(this.state.dorm);
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
      this.fetchReviews(dorm)
      this.fetchMoreDormInfo(dorm)
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
            {this.state.moreDormInfo ? (<MoreDormInfoBlock dormInfo={this.state.moreDormInfo} ></MoreDormInfoBlock>) : (<div></div>)}
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
