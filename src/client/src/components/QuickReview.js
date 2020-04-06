import React, { Component } from "react";
import "../css/Reviews.css";
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
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-left: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 1.875rem;
`

const QuickReviewTitle = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 0.5rem;
  margin-left: 1.5rem;
  text-align: left;
  font-size: 2.1875rem;
  font-weight: bold;
`

export default class QuickReview extends Component {
  constructor(props) {
    super(props);
  }

  createClean(score) {
    let wrapper = [];
    let faces = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      faces.push(<Face key={k++}>&#x1f929;</Face>);
    }
    wrapper.push(faces);
    return wrapper;
  }

  createNoise(score) {
    let wrapper = [];
    let speakers = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      speakers.push(<Speaker key={k++}>&#x1f508;</Speaker>);
    }
    wrapper.push(speakers);
    return wrapper;
  }

  createComm(score) {
    let wrapper = [];
    let shakes = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      shakes.push(<Shake key={k++}>&#x1f91d;</Shake>);
    }
    wrapper.push(shakes);
    return wrapper;
  }

  createParty(score) {
    let wrapper = [];
    let dancers = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      dancers.push(<Dancer key={k++}>&#x1f57a;</Dancer>);
    }
    wrapper.push(dancers);
    return wrapper;
  }

  createAmenities(score) {
    let wrapper = [];
    let thumbs = [];
    let k = 0
    for(let i = 0; i < score; i++) {
      thumbs.push(<Thumb key={k++}>&#x1f44d;</Thumb>);
    }
    wrapper.push(thumbs);
    return wrapper;
  }

  render() {
    return (
      <div id="parent">
        <div id="reviewQuickView">
          <QuickReviewTitle>
            QUICK REVIEW
          </QuickReviewTitle>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview">Cleanliness {this.createClean(this.props.QuickReview.cleanliness)}</div>
          </QuickReviewDisplay>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview">Noise Level {this.createNoise(this.props.QuickReview.noise)}</div>
          </QuickReviewDisplay>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview">Community {this.createComm(this.props.QuickReview.community)}</div>
          </QuickReviewDisplay>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview">Party Scene{this.createParty(this.props.QuickReview.party)}</div>
          </QuickReviewDisplay>
          <QuickReviewDisplay>
            <div id="criteriaQuickReview">Amenities {this.createAmenities(this.props.QuickReview.amenities)}</div>
          </QuickReviewDisplay>
        </div>
      </div>
    );
  }
}