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
  color: ${props => props.theme.black};
  margin-top: 10vh;
  margin-left: 10vw;
  justify-self: center;
`;

let Page = styled.div`
  display: flex;
  flex-direction: row;
  background-color: blue;
  padding: 2rem;
`

let ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  width: 80%;
`

let ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  padding: 2rem;
  width: 20%;
`

export default class Dorm extends React.PureComponent {
  render() {
    return (
      <div>
        <DormName> DORM NAME HERE </DormName>
        <img src="https://housing.columbia.edu/sites/default/files/content/img/Buildings/Furnald/FurnaldHall.jpg"></img>
        <Page>
          <ColumnLeft> 
            INFO HERE
          </ColumnLeft>
          <ColumnRight> 
            INFO HERE
          </ColumnRight>
        </Page>
      </div>
    );
  }
}
