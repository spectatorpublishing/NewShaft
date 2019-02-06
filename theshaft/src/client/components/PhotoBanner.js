import React, { Component } from "react";
import styled from "styled-components";

let PhotosContainer = styled.div`
  display: flex;
  height: 40vh;
`


let MainPic = styled.div`
  border-right: white solid 4px;
  display: flex;
  min-width: 50%;
`

let Img = styled.img`
  object-fit: cover;
  width: 100%;
`

let LeftPic = styled.div`
  display: flex;
  width: 50%;
`

let RightPic = styled.div`
  display: flex;
  border-left: solid white 4px;
  width: 50%;
`

let SidePics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50%;
`

let TopRow = styled.div`
  display: flex;
  min-height: 50%;
  min-width:100%
`

let BottomRow = styled.div`
  border-top: solid white 4px;
  display: flex;
  min-height: 50%;
  min-width: 100%;
`

let PicMobile = styled.div`
  display: inline-block;
  width: 100%
  flex-wrap: nowrap;
  max-height: 30vh;
  overflow: hidden;
`

export default class PhotoBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

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
        <PhotosContainer>
          <Img src={this.props.imageOne} />
        </PhotosContainer>
      );
    } else {
      return (
        <PhotosContainer>
          <MainPic>
            <Img src={this.props.imageOne} />
          </MainPic>
          <SidePics>
            <TopRow>
              <LeftPic>
                <Img src={this.props.imageTwo} />
              </LeftPic>
              <RightPic>
                <Img src={this.props.imageThree} />
              </RightPic>
            </TopRow>
            <BottomRow>
              <LeftPic>
                <Img src={this.props.imageFour} />
              </LeftPic>
              <RightPic>
                <Img src={this.props.imageFive} />
              </RightPic>
            </BottomRow>
          </SidePics>
          
        </PhotosContainer>
      );
    }
  }
}
