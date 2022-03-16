import React, { Component, useState, useEffect } from "react";
import "../css/Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Review from "./Review.js";
import styled from 'styled-components';


const Wrapper = styled.div`
  margin-top: 0.5rem;
`;

const QuickReviewDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font-size: 1rem;
  margin: 0.75rem 0rem;
`

const CategoryText = styled.div`
  display: flex;

`

const CategoryRating = styled.div`
  display: flex;

`


const QuickReview = (props) => {
  const [cleanScore, setCleanScore] = useState([]);
  const [noiseScore, setNoiseScore] = useState([]);
  const [commScore, setCommScore] = useState([]);
  const [partyScore, setPartyScore] = useState([]);
  const [amenitiesScore, setAmenitiesScore] = useState([]);

  useEffect(() => {
    setCleanScore(createClean(props.QuickReview["cleanliness"]));
    setNoiseScore(createNoise(props.QuickReview["noise"]));
    setCommScore(createComm(props.QuickReview["community"]));
    setPartyScore(createParty(props.QuickReview["party"]));
    setAmenitiesScore(createAmenities(props.QuickReview["amenities"]));
  }, [props]);

  const createClean = (score) => {
    let wrapper = [];
    let cleanScore = [];
    let k = 0
    for (let i = 0; i < score; i++) {
      cleanScore.push(<FontAwesomeIcon icon={faStar} color={"#73A6E0"} />);
    }
    for (let i = score; i < 5; i++) {
      cleanScore.push(<FontAwesomeIcon icon={faStar} color={"#f2f2f2"} />);

    }
    wrapper.push(cleanScore);
    return wrapper;
  }

  const createNoise = (score) => {
    let wrapper = [];
    let noiseScore = [];
    let k = 0
    for (let i = 0; i < score; i++) {
      noiseScore.push(<FontAwesomeIcon icon={faStar} color={"#73A6E0"} />);
    }
    for (let i = score; i < 5; i++) {
      noiseScore.push(<FontAwesomeIcon icon={faStar} color={"#f2f2f2"} />);
    }
    wrapper.push(noiseScore);
    return wrapper;
  }

  const createComm = (score) => {
    let wrapper = [];
    let commScore = [];
    let k = 0
    for (let i = 0; i < score; i++) {
      commScore.push(<FontAwesomeIcon icon={faStar} color={"#73A6E0"} />);
    }
    for (let i = score; i < 5; i++) {
      commScore.push(<FontAwesomeIcon icon={faStar} color={"#f2f2f2"} />);
    }
    wrapper.push(commScore);
    return wrapper;
  }

  const createParty = (score) => {
    let wrapper = [];
    let partyScore = [];
    let k = 0
    for (let i = 0; i < score; i++) {
      partyScore.push(<FontAwesomeIcon icon={faStar} color={"#73A6E0"} />);
    }
    for (let i = score; i < 5; i++) {
      partyScore.push(<FontAwesomeIcon icon={faStar} color={"#f2f2f2"} />);
    }
    wrapper.push(partyScore);
    return wrapper;
  }

  const createAmenities = (score) => {
    let wrapper = [];
    let amenitiesScore = [];
    let k = 0
    for (let i = 0; i < score; i++) {
      amenitiesScore.push(<FontAwesomeIcon icon={faStar} color={"#73A6E0"} />);
    }
    for (let i = score; i < 5; i++) {
      amenitiesScore.push(<FontAwesomeIcon icon={faStar} color={"#f2f2f2"} />);
    }
    wrapper.push(amenitiesScore);
    return wrapper;
  }


  return (
      <Wrapper>
        <QuickReviewDisplay>
          <CategoryText>Cleanliness</CategoryText>
          <CategoryRating>{cleanScore}</CategoryRating>
        </QuickReviewDisplay>
        <QuickReviewDisplay>
          <CategoryText>Noise Level</CategoryText>
          <CategoryRating>{noiseScore}</CategoryRating>
        </QuickReviewDisplay>
        <QuickReviewDisplay>
          <CategoryText>Community</CategoryText>
          <CategoryRating>{commScore}</CategoryRating>
        </QuickReviewDisplay>
        <QuickReviewDisplay>
          <CategoryText>Party Scene</CategoryText>
          <CategoryRating>{partyScore}</CategoryRating>
        </QuickReviewDisplay>
        <QuickReviewDisplay>
          <CategoryText>Amenities</CategoryText>
          <CategoryRating>{amenitiesScore}</CategoryRating>
        </QuickReviewDisplay>
      </Wrapper>
  );
}

export default QuickReview;

