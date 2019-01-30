import React, { Component } from "react";
import styled from 'styled-components';

let Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 40vh;
  overflow: hidden;
`

let PicOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 66%;
  overflow: hidden;
  justify-content: center;
  margin-right: 5px;
`

let PicTwo = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`

let PicThree = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 5px;
`

let PicFour = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 5px;
`

let Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  width: 33%;
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
  margin-top: 5px;
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
        <PicOne>
          <img src={this.state.imageOne} />
        </PicOne>
        <Column>
          <PicTwo>
            <img src={this.state.imageTwo} />
          </PicTwo>
          <Row>
            <PicThree>
              <img src={this.state.imageThree} />
            </PicThree>
            <PicFour>
              <img src={this.state.imageFour} />
            </PicFour>
          </Row>
        </Column>
      </Imagecontainer>
    );
  }
}
