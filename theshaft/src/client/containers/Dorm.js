import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Photos from "../components/Photos";
import Maps from "../components/Maps";
import ProCon from "../components/ProCon";
import Amenities from "../components/Amenities";

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
          imageOne="https://memegenerator.net/img/images/17438601/dat-sad-fat-cat.jpg"
          imageTwo="https://i.imgflip.com/26a82h.jpg"
          imageThree="https://i.imgflip.com/1eg7jb.jpg"
          imageFour="https://i.imgflip.com/1yt82g.jpg"
        />
        <Amenities amenities={sampleAmenities} />
        <Maps />
        <ProCon pros={testPros} cons={testCons} />
        <Link to="/">Back</Link>
      </DormContainer>
    );
  }
}
