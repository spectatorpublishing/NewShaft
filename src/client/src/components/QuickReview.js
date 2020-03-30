import React, { Component } from "react";
import "../css/Reviews.css";
import Review from "./Review.js";
import styled from 'styled-components';

let Face = styled.span`
  align-self: left;
`

let Speaker = styled.span`
  align-self: left;
`

let Shake = styled.span`
  align-self: left;
`

let Dancer = styled.span`
  align-self: left;
`

let Thumb = styled.span`
  align-self: left;
`

export default class QuickReview extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      cleanliness: this.props.cleanliness,
      noiseLevel: this.props.noiseLevel,
      community: this.props.community,
      partyScene: this.props.partyScene,
      amenities: this.props.amenities
    };
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
          <div>
            <div id="criteriaQuickReview">Cleanliness {this.createClean(3)}</div>
            <div id="criteriaQuickReview">Noise Level {this.createNoise(2)}</div>
            <div id="criteriaQuickReview">Community {this.createComm(2)}</div>
            <div id="criteriaQuickReview">Party Scene{this.createParty(1)}</div>
            <div id="criteriaQuickReview">Amenities {this.createAmenities(3)}</div>
          </div>
        </div>
      </div>
    );
  }
}