import React, { Component } from "react";
import styled from "styled-components";
import { Z_BLOCK } from "zlib";

let Imagecontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  max-height: 60vh;
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
  margin-bottom: -5px;
  
`;

let PicTwo = styled.div`
  display: inline-block;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  
`;

let PicThree = styled.div`
  display: inline-block;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  
`;

let PicFour = styled.div`
  display: inline-block;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  max-height: 100%;
 
`;

let Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  width: 50%;
  max-height: 60vh;
  
`;

let Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  max-height: 50%;
  margin-bottom: -5px;
  
`;

let Img = styled.img`
  width: 100%;
  border-width: 2px;

  border-style: solid;
`;

let PicMobile = styled.div`
  display: inline-block;
  width: 100%
  flex-wrap: nowrap;
  max-height: 30vh;
  overflow: hidden;
`

let ImgMobile = styled.img`
background-position: center center;
  background-repeat: no-repeat;

`

export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageOne: this.props.imageOne,
      imageTwo: this.props.imageTwo,
      imageThree: this.props.imageThree,
      imageFour: this.props.imageFour,
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;
    if (isMobile) {
      return (
        <PicMobile>
          <ImgMobile src={this.state.imageOne} />
        </PicMobile>
      );
    } else {
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
}
