import React, { Component } from "react";
import styled from 'styled-components';

let Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 40vh;
  margin-bottom: 5vh;
`

let PicOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 60vw;
  height: 40vh;
  overflow: hidden;
  justify-content: center;
  margin-right: 5px;
`

let PicTwo = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 19.5vh;
  margin-right: 5px;
  margin-bottom: 5px;
`

let PicThree = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 19.5vh;
  margin-left: 5px;
  margin-bottom: 5px;
`

let PicFour = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 19.5vh;
  margin-right: 5px;
  margin-top: 5px;
`

let PicFive = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 19.5vh;
  margin-left: 5px;
  margin-top: 5px;

`

let Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  width: 39vw;
  height: 40vh;
  margin-left: 5px;
`

let Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 50%;
`


export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageOne: this.props.imageOne,
      imageTwo: this.props.imageTwo,
      imageThree: this.props.imageThree,
      imageFour: this.props.imageFour,
      imageFive: this.props.imageFive
    };
  }

  render() {
    return (
      <Imagecontainer>
        <PicOne>
          <img src={this.state.imageOne} />
        </PicOne>
        <Column>
          <Row>
            <PicTwo>
              <img src={this.state.imageTwo} />
            </PicTwo>
            <PicThree>
              <img src={this.state.imageThree} />
            </PicThree>
          </Row>
          <Row>
            <PicFour>
              <img src={this.state.imageFour} />
            </PicFour>
            <PicFive>
              <img src={this.state.imageFive} />
            </PicFive>
          </Row>
        </Column>
      </Imagecontainer>
    );
  }
}
