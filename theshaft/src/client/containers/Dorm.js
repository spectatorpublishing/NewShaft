import React, { Component } from "react";
import { Link } from "react-router-dom";
import Photos from "../components/Photos";
import Maps from "../components/Maps";
import ProCon from "../components/ProCon";
import styled from 'styled-components';


let Header = styled.div`
  color: #ffffff;
  font-size: 4vw;
  font-weight: 1000;
  position: absolute;
  z-index: 1;
  top: 23vh;
  margin-left: 15vw;
`

let Blurb = styled.div`
  background-color: #44A7FF;
  color: white;
  font-size: 1.2vw;
  font-weight: 300;
  position: absolute;
  z-index: 1;
  top: 32vh;
  margin-left: 15vw;
  padding: 0.8vw;
  border-radius: 1vw;
  width: 70vw;
`

export default class Dorm extends React.PureComponent {

  render() {
    const testPros = ["pro1", "pro2", "pro3"];
    const testCons = ["con1", "con2", "con3"];
    return (
      <div>
        <Photos
          imageOne="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageTwo="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageThree="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageFour="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
          imageFive="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/52FBXLYM2RGO3FJGK3SPD2KUEE.png"
        />
        <Header>{this.props.match.params.dorm}</Header>
        <Blurb>This is a blurb for the dorm summary. This is just a test. Blah bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.  <br/> Hi <br/> Bye</Blurb>
        <Maps/>
        <ProCon pros={testPros} cons={testCons}></ProCon>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
