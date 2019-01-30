import React, { Component } from "react";
import styled from "styled-components";

let Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 60vh;
  overflow: hidden;
`;

let PicOne = styled.div`
  display: inline-block;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 50%;
  overflow: hidden;
  justify-content: center;
  margin-right: 0px;
`;

let PicTwo = styled.div`
  display: inline-block;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;

let PicThree = styled.div`
  display: inline-block;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 0px;
`;

let PicFour = styled.div`
  display: inline-block;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 0px;
`;

let Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  width: 50%;
  height: 60vh;
  margin-left: 0px;
`;

let Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 50%;
  margin-top: 0px;
`;

let Img = styled.img`
  
  width:100%;
  border-width: 1px;
  border-style: solid;
  
`;

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
        <PicOne>
          <Img src={this.state.imageOne} />
        </PicOne>
        <Column>
          <Row>
            <PicThree>
              <Img src={this.state.imageThree} />
            </PicThree>
            <PicFour>
              <Img src={this.state.imageFour} />
            </PicFour>
          </Row>
          <Row>
            <PicThree>
              <Img src={this.state.imageThree} />
            </PicThree>
            <PicFour>
              <Img src={this.state.imageFour} />
            </PicFour>
          </Row>
        </Column>
      </Imagecontainer>
    );
  }
}
