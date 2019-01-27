import React, { Component } from "react";
import styled from 'styled-components';

let Imagecontainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40vh;
  width: 100%;
  overflow: hidden;
  align-items: center;
`

let PicsBig = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  height: 100%;
  overflow: hidden;
  align-items: center;
`

let PicsMid = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 33%;
  overflow: hidden;
`

let PicsLow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  overflow: hidden;
`

let Pinky = styled.img`
  height: 50%;
`

let Inky = styled.img`
  height: 100%;
  width: 50%;
`

let Clyde = styled.img`
  height: 100%;
  width: 50%;
`


export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageOne: this.props.imageOne,
      imageTwo: this.props.imageTwo,
      imageThree: this.props.imageThree,
      imageFour: this.props.imageFour
    };
  }

  render() {
    return (
      <Imagecontainer>
        <PicsBig>
          <img src={this.state.imageOne} />
        </PicsBig>
        <PicsMid>
          <Pinky src={this.state.imageTwo} />
          <PicsLow>
            <Inky src={this.state.imageThree} />
            <Clyde src={this.state.imageFour} />
          </PicsLow>
        </PicsMid> 
      </Imagecontainer>
    );
  }
}
