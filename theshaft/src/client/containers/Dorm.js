import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoBanner from "../components/PhotoBanner";
import Amenities from "../components/Amenities";
import AtAGlance from "../components/AtAGlance";
import Maps from "../components/Maps";
import ProCon from "../components/ProCon";
import FloorPlan from "../components/FloorPlan";
import Reviews from "../components/Reviews";
import RelatedDorms from "../components/RelatedDorms";



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
  ["Carman", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"],
  ["Furnald", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"],
  ["John Jay", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"],
  ["John Jay", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"],
  ["John Jay", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"],
  ["John Jay", "https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"]
];



const testPros = ["pro1", "pro2", "pro3"];
const testCons = ["con1", "con2", "con3"];
let Header = styled.div`
  color: #ffffff;
  font-size: 4vw;
  font-weight: 1000;
  position: absolute;
  z-index: 1;
  top: 45vh;
  margin-left: 15vw;
`

let Blurb = styled.div`
  background-color: #44A7FF;
  color: white;
  font-size: 1.2vw;
  font-weight: 300;
  position: absolute;
  z-index: 1;
  top: 55vh;
  margin-left: 15vw;
  padding: 1.8vw;
  border-radius: 1.5vw;
  width: 70vw;
`

let Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

let ColOne = styled.div`
  display: flex;
  width: 33%;
`

let ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 50px;
`

let ColThree = styled.div`
  display: flex;
  width: 33%;
`

let DormContainer = styled.div`
`


export default class Dorm extends React.PureComponent {
  render() {
    return (
      <DormContainer>
        <PhotoBanner
          imageOne="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageTwo="https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"
          imageThree="https://i.imgflip.com/1yt82g.jpg"
          imageFour="https://i.imgflip.com/26a82h.jpg"
          imageFive="https://i.imgflip.com/1eg7jb.jpg"
        />
        <Header>{this.props.match.params.dorm}</Header>
        <Blurb>This is a blurb for the dorm summary. This is just a test. Blah bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.  <br/> Hi <br/> Bye</Blurb>
        <Body>
          <ColOne/>
          <ColTwo>
            <Amenities amenities={sampleAmenities}/>
            <Maps/>
            <ProCon pros={testPros} cons={testCons}></ProCon>
            <FloorPlan floorOffset={1} planArray={["https://housing.columbia.edu/files/housing/Wien%208_2018.jpg", "https://housing.columbia.edu/files/housing/Wien%208_2018.jpg","https://housing.columbia.edu/files/housing/600%209_2016_0.jpg","https://housing.columbia.edu/files/housing/Woodbridge%204_2018.jpg", "https://i.kym-cdn.com/entries/icons/original/000/026/642/kot1.jpg"]}/>
            <Reviews/>
            <RelatedDorms relatedDorms={sampleRelatedDorms}/>
          </ColTwo>
          <ColThree>
            <AtAGlance location="545 W. 114th St." roomtype="Suite-style doubles" classmakeup="First-Years" numfloors="13"/>
          </ColThree>
        </Body>
      </DormContainer>
    );
  }
}
