import React, { Component } from 'react';
import styled from "styled-components";
import QuickGlanceCompare from '../components/QuickGlanceCompare';
import ReviewsCompare from '../components/ReviewsCompare';
import AmenitiesCompare from '../components/AmenitiesCompare';

const CompareContainer = styled.div`
  display: flex;
  width: 100%;
  heigth: 100%;
  padding: 0 auto;
  overflow: hidden;
  flex-direction: column;
`

const SectionDesktop = styled.div`
  width: 60%;
  margin: 0 20% 5%; 
  overflow: visible;
`

const SectionMobile = styled.div`
  width: 80%;
  margin: 0 10% 5%; 
  overflow: visible;
`

const SectionTitle = styled.div`
  width: 100%
  padding: 0.5em 0;
  border-bottom: solid 0.15em #555555;
`

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
  justify-content: space-between;
  align-items: center;
`

export default class CompareColumns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width : window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {

    const { width } = this.state;
    const isMobile = width <= 700;

    if (isMobile) {
      return (
        <CompareContainer>
          <SectionMobile>
            <SectionTitle><p>Quick Glance</p></SectionTitle>
            <FeatureContainer>
              <QuickGlanceCompare></QuickGlanceCompare>
              <QuickGlanceCompare></QuickGlanceCompare>
            </FeatureContainer>
          </SectionMobile>

          <SectionMobile>
            <SectionTitle><p>Amenities</p></SectionTitle>
            <FeatureContainer>
              <AmenitiesCompare></AmenitiesCompare>
              <AmenitiesCompare></AmenitiesCompare>
            </FeatureContainer>
          </SectionMobile>

          <SectionMobile>
            <SectionTitle><p>Reviews</p></SectionTitle>
            <FeatureContainer>
              <ReviewsCompare></ReviewsCompare>
              <ReviewsCompare></ReviewsCompare>
            </FeatureContainer>
          </SectionMobile>
        </CompareContainer>
      )
    }

    return (
      <CompareContainer>
        <SectionDesktop>
          <SectionTitle><h2>Quick Glance</h2></SectionTitle>
          <FeatureContainer>
            <QuickGlanceCompare></QuickGlanceCompare>
            <QuickGlanceCompare></QuickGlanceCompare>
            <QuickGlanceCompare></QuickGlanceCompare>
          </FeatureContainer>
        </SectionDesktop>

        <SectionDesktop>
          <SectionTitle><h2>Amenities</h2></SectionTitle>
          <FeatureContainer>
            <AmenitiesCompare></AmenitiesCompare>
            <AmenitiesCompare></AmenitiesCompare>
            <AmenitiesCompare></AmenitiesCompare>
          </FeatureContainer>
        </SectionDesktop>
          
        <SectionDesktop>
          <SectionTitle><h2>Reviews</h2></SectionTitle>
          <FeatureContainer>
            <ReviewsCompare></ReviewsCompare>
            <ReviewsCompare></ReviewsCompare>
            <ReviewsCompare></ReviewsCompare>
          </FeatureContainer>
        </SectionDesktop>
          
      </CompareContainer>
    )
  }
}