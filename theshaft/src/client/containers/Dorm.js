import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoBanner from "../components/PhotoBanner";
import Amenities from "../components/Amenities";
import AtAGlance from "../components/AtAGlance";
import Maps from "../components/Maps";
import ProCon from "../components/ProCon";
import FloorPlan from "../components/FloorPlan";
import QuickReview from "../components/QuickReview";
import FullReview from "../components/FullReview";
import RelatedDorms from "../components/RelatedDorms";

var fakedata = [
  {
      "dorm": "110",
      "adress":"601 W 110th St",
      "description": "Off-campus but not really",
      "college": "barnard",
      "thumbnail_image": "N/A",
      "suite": ["6"],
      "walkthrough": false,
      "single": true,
      "double": true,
      "triple": true,
      "pros": "",
      "cons": ""
  },

  {
      "dorm": "SIC",
      "adress":"619 W 113th St",
      "description": "Comedy House",
      "college": "columbia",
      "thumbnail_image": "N/A",
      "suite": ["5"],
      "walkthrough": false,
      "single": true,
      "double": true,
      "triple": false,
      "pros": "",
      "cons": ""
  },

  {
      "dorm": "McBain",
      "adress":"McBain Fake Address",
      "description": "On Campus",
      "college": "columbia",
      "thumbnail_image": "N/A",
      "suite": ["4","3"],
      "walkthrough": false,
      "single": true,
      "double": true,
      "triple": true,
      "pros": "",
      "cons": ""
  }

]

let sampleAmenities = [
  ["bathroom", "Semi-private"],
  ["laundry", "Laundry - in basement"],
  ["kitchen", "Kitchen - in basement"],
  ["airConditioning", "Air conditioning"],
  ["lounge", "Floor lounge"],
  ["fitness", "Fitness room"],
  ["lounge", "Sky lounge"],
  ["lounge", "Basement lounge"]
];

let sampleRelatedDorms = [
  [
    "Carman",
    "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"
  ],
  [
    "Furnald",
    "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"
  ],
  [
    "John Jay",
    "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"
  ],
  [
    "John Jay",
    "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"
  ],
  [
    "John Jay",
    "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"
  ],
  [
    "John Jay",
    "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"
  ]
];

let testPros = ["pro1", "pro2", "pro3"];
let testCons = ["con1", "con2", "con3"];

let Header = styled.div`
  display: flex;
  position: relative;
  top: -100px;
  margin: 0 15%;
  pointer-events: none;
`
let DormName = styled.div`
  color: #ffffff;
  font-size: 3rem;
  font-weight: bolder;
  pointer-events: initial;
`

let Blurb = styled.div`
  background-color: #44a7ff;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  position: relative;
  top: -100px;
  margin: 0 15% -100px 15%;
  padding: 1.8vw;
  border-radius: 1.5vw;
`

let Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem 10vw 6rem 10vw;
`

let ColOne = styled.div`
  display: flex;
  width: 15%;
`

let ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(mobile) => mobile ? `100%`: `50%`};
`

let ColThree = styled.div`
  display: flex;
  width: 35%;
  margin-left: 5vw;
`

export default class Dorm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dormInfo: {
        dorm: sampleDorm,
        address: sampleAddress,
        description: sampleDescription,
        college: sampleCollege,
        thumbnail: sampleThumbail,
        suite: sampleSuite,
        walkthrough: sampleWalkthrough,
        single: sampleSingle,
        double: sampleDouble,
        triple: sampleTriple,        
        pros: testPros,
        cons: testCons,
        amenities: sampleAmenities,
        relatedDorms: sampleRelatedDorms,
      },      
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }



  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    fetch('/api/getDormInfo')
      .then(res => res.json())
      .then(dormInfo => this.setState({dormInfo: dormInfo}));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const isMobile = this.state.width <= 700;
    return (
      <div>
        <PhotoBanner
          imageOne="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageTwo="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageThree="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageFour="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageFive="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
        />
        <Header>{this.state.dormInfo.dorm}</Header>
        <Blurb>{this.state.dormInfo.description}</Blurb>

        <Body>
          {!isMobile && (
          <ColOne />
          )}

          <ColTwo mobile={isMobile}>
            {isMobile && <AtAGlance location="545 W. 114th St." roomtype="Suite-style doubles" classmakeup="First-Years" numfloors="13"/>}
            <Amenities amenities={this.state.dormInfo.amenities}/>
            <Maps latitudes={[40.7128, 40.7129, 40.7128]} longitudes={[-74.006, -74.007, -74.008]} popupInfo={["Carman", "McBain", "John Jay"]}/>
            <ProCon pros={this.state.dormInfo.pros} cons={this.state.dormInfo.cons}></ProCon>
            <FloorPlan floorOffset={1} planArray={["https://housing.columbia.edu/files/housing/Wien%208_2018.jpg", "https://housing.columbia.edu/files/housing/Wien%208_2018.jpg","https://housing.columbia.edu/files/housing/600%209_2016_0.jpg","https://housing.columbia.edu/files/housing/Woodbridge%204_2018.jpg", "https://i.kym-cdn.com/entries/icons/original/000/026/642/kot1.jpg"]}/>
            <QuickReview/>
            <RelatedDorms relatedDorms={this.state.dormInfo.relatedDorms}/>
          </ColTwo>

          {!isMobile && (
          <ColThree>
            <AtAGlance
              location="545 W. 114th St."
              roomtype="Suite-style doubles"
              classmakeup="First-Years"
              numfloors="13"
            />
          </ColThree>
          )}
        </Body>
      </div>
    );
  }
}
