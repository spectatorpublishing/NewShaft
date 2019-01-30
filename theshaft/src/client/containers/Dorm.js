import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Photos from "../components/Photos";
import Amenities from "../components/Amenities";
import AtAGlance from "../components/AtAGlance";
import Maps from "../components/Maps";
import ProCon from "../components/ProCon";

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

const testPros = ["pro1", "pro2", "pro3"];
const testCons = ["con1", "con2", "con3"];
let Header = styled.div`
  color: #ffffff;
  font-size: 4vw;
  font-weight: 1000;
  position: absolute;
  z-index: 1;
  top: 30vh;
  margin-left: 15vw;
`

let Blurb = styled.div`
  background-color: #44A7FF;
  color: white;
  font-size: 1.2vw;
  font-weight: 300;
  position: absolute;
  z-index: 1;
  top: 40vh;
  margin-left: 15vw;
  padding: 0.8vw;
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
  width: 33%;
`

let ColThree = styled.div`
  display: flex;
  width: 33%;
`

let DormContainer = styled.div`
`
let CenterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  
`

export default class Dorm extends React.PureComponent {
  render() {
    return (
      <DormContainer>
        <Photos
          imageOne="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageTwo="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageThree="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageFour="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageFive="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
        />
        <Header>{this.props.match.params.dorm}</Header>
        <Blurb>This is a blurb for the dorm summary. This is just a test. Blah bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.  <br/> Hi <br/> Bye</Blurb>
        <Body>
          <ColOne/>
          <ColTwo>
            <Amenities amenities={sampleAmenities}/>
            <Maps/>
            <ProCon pros={testPros} cons={testCons}></ProCon>
            <Link to="/">Back</Link>
          </ColTwo>
          <ColThree>
            <AtAGlance location="545 W. 114th St." roomtype="Suite-style doubles" classmakeup="First-Years" numfloors="13"/>
          </ColThree>
        </Body>
      </DormContainer>
    );
  }
}
