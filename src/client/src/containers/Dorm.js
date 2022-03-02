import styled from "styled-components";
import React, { Component } from "react";
import PhotoBanner from "../components/PhotoBanner";
import Amenities from "../components/Amenities";
import AtAGlance from "../components/AtAGlance";
import Maps from "../components/Maps";
import ProCon from "../components/ProCon";
import FloorPlan from "../components/FloorPlan";
import RelatedDorms from "../components/RelatedDorms";
import ReviewsBox from "../components/ReviewsBox";
import Scroller from "../components/Scroller";
import SpectrumSidebar from "../components/SpectrumSidebar";
import ScrollToTop from "../components/ScrollToTop";
import AdManager from "../components/AdManager";
import BlurbExpander from "../components/BlurbExpander";
import { theme } from "../util/GlobalStyles";
import {NavLink} from "react-router-dom";
import ReviewPageReview from "../components/ReviewPageReview"
import PhotoGallery from "../components/PhotoGallery";

let DormName = styled.h1`
  display: flex;
  color: ${props => props.theme.darkGray};
  margin: 4rem 0 2rem 0;
  align-self: center;
`;

let DormImage = styled.div`
  display: flex;
  align-self: center;
`;

let Page = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.darkGray};
  padding: 2rem;
`

let Info = styled.div`
  display: flex;
  flex-direction: row;
`

let ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  width: 75%;
`

let ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 25%;
`
let Sticky = styled.div`
  display: flex;
  padding: 2rem;
  border: 1px solid ${props => props.theme.lightGray};
  margin-bottom: 2rem;
`

let InfoSection = styled.div`
  display: flex;
  padding: 2rem;
  border-bottom: 1px solid ${props => props.theme.lightGray};
`

export default class Dorm extends React.PureComponent {
  render() {
    return (
      <Page>
        <DormName> DORM NAME </DormName>
        <DormImage>
          <img src="https://housing.columbia.edu/sites/default/files/content/img/Buildings/Furnald/FurnaldHall.jpg"></img>
        </DormImage>
        <Info>
          <ColumnLeft> 
            <InfoSection>
              INTRO 
            </InfoSection>
            <InfoSection>
              AMENITIES 
            </InfoSection>
            <InfoSection>
              PROS & CONS
            </InfoSection>
            <InfoSection>
              FLOOR PLANS
            </InfoSection>
            <InfoSection>
              LOCATION
            </InfoSection>
            <InfoSection>
              PHOTO GALLERY
            </InfoSection>
            <InfoSection>
              SPECTRUM ON HOUSING
            </InfoSection>
          </ColumnLeft>
          <ColumnRight> 
            <Sticky>
              AT-A-GLANCE
            </Sticky>
            <Sticky>
              QUICK REVIEW
            </Sticky>
          </ColumnRight>
        </Info>
      </Page>
    );
  }
}
