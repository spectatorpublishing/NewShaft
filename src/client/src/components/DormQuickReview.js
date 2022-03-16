import React, { Component } from "react";
import "../css/Reviews.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {
//  faStar
//} from "@fortawesome/free-brands-svg-icons";
import Review from "./Review.js";
import styled from 'styled-components';

const Face = styled.span`
  align-self: left;
`

const Speaker = styled.span`
  align-self: left;
`

const Shake = styled.span`
  align-self: left;
`

const Dancer = styled.span`
  align-self: left;
`

const Thumb = styled.span`
  align-self: left;
`

const QuickReviewDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font-size: 1rem;
`



export default class QuickReview extends Component {
  constructor(props) {
    super(props);
  }
  createClean(score) {
    let wrapper = [];
    let cleanScore= [];
    let k = 0
    for(let i = 0; i < score; i++) {
      //cleanScore.push(<FontAwesomeIcon icon={faStar}color ={"#73A6E0"} />);
    }
    for (let i = score; i<=5; i++){
        //cleanScore.push(<FontAwesomeIcon icon={faStar} color ={"white"}/>); 
        
    }
    wrapper.push(cleanScore);
    return wrapper;
  }

  createNoise(score) {
    let wrapper = [];
    let noiseScore = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      //noiseScore.push(<FontAwesomeIcon icon={faStar} color ={"#73A6E0"} />);
    }
    for (let i = score; i<=5; i++){
        //noiseScore.push(<FontAwesomeIcon icon={faStar} color ={"white"}/>); 
        }
    wrapper.push(noiseScore);
    return wrapper;
  }

  createComm(score) {
    let wrapper = [];
    let commScore = [];
    let k = 0
    for(let i = 0; i < score; i++) {
        //commScore.push(<FontAwesomeIcon icon={faStar} color ={"#73A6E0"} />);
    }
    for (let i = score; i<=5; i++){
        //commScore.push(<FontAwesomeIcon icon={faStar} color ={"white"}/>); 
        }
    wrapper.push(commScore);
    return wrapper;
  }

  createParty(score) {
    let wrapper = [];
    let partyScore = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      //partyScore.push(<FontAwesomeIcon icon={faStar} color ={"#73A6E0"} />);
    }
    for (let i = score; i<=5; i++){
        //partyScore.push(<FontAwesomeIcon icon={faStar} color ={"white"}/>); 
        }
    wrapper.push(partyScore);
    return wrapper;
  }

  createAmenities(score) {
    let wrapper = [];
    let amenitiesScore= [];
    let k = 0
    for(let i = 0; i < score; i++) {
      //amenitiesScore.push(<FontAwesomeIcon icon={faStar} color ={"#73A6E0"}/>);
    }
    for (let i = score; i<=5; i++){
        //amenitiesScore.push(<FontAwesomeIcon icon={faStar} color ={"white"}/>); 
    }
    wrapper.push(amenitiesScore);
    return wrapper;
  }

 

  render() {
    return (
      <div id="parent" >
        <div id="reviewQuickView">
          <QuickReviewDisplay>
            <div id="criteriaQuickReview" display="flex" >Cleanliness</div><div display = "flex" > {this.createClean(this.props.QuickReview.cleanliness)}</div>
          </QuickReviewDisplay>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview" display="flex">Noise Level </div><div display = "flex" > {this.createNoise(this.props.QuickReview.noise)}</div>
          </QuickReviewDisplay>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview" display="flex">Community </div><div display = "flex" > {this.createComm(this.props.QuickReview.community)}</div>
          </QuickReviewDisplay>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview" display="flex">Party Scene</div><div display = "flex" > {this.createParty(this.props.QuickReview.party)}</div>
          </QuickReviewDisplay>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview"display="flex">Amenities </div><div display = "flex" > {this.createAmenities(this.props.QuickReview.amenities)}</div>
          </QuickReviewDisplay>
        </div>
      </div>
    );
  }
}

