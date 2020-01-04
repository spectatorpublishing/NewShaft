import React, { Component } from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import styled from "styled-components";


let PhotosContainer = styled.div`
  height: 40vh;
  display: flex;
  width: 100%;
`

let MainPic = styled.div`
  border-right: solid ${props => props.theme.white} 4px;
  min-width: 100%;
  display:flex;
  width: 100%;
  overflow: hidden;
`

let Img = styled.img`
  width: 100vw;
  margin-top:-25%;
  object-fit: cover;
  object-position: center; 
  transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;

  :hover {
    transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`

let LeftPic = styled.div`
  display: flex;
  width: 50%;
  overflow: hidden;
`

let RightPic = styled.div`
  display: flex;
  border-left: solid ${props => props.theme.white} 4px;
  width: 50%;
  overflow: hidden;
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
  min-width: 100%;
`

let BottomRow = styled.div`
  border-top: solid ${props => props.theme.white} 4px;
  display: flex;
  min-height: 50%;
  min-width: 100%;
`

let PicMobile = styled.div`
  display: inline-block;
  width: 100%;
  flex-wrap: nowrap;
  max-height: 30vh;
  overflow: hidden;
`
let Button = styled.button`
    background: none;
    border: none;
    padding: 0;
    font-weight: bold;
    cursor: pointer;

    ${({ clicked }) => clicked && `
        background: black;
  	`}
`

let ViewButton = styled.button`
  background: ${props => props.theme.white};
  position: absolute;
  right: 0;
  margin: 1rem;
  height: 2rem;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};

  &:hover {
    background: ${props => props.theme.lightGray};
  }
`

export default class PhotoBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      photoIndex: 0,
      isOpen: false,
      images: this.props.bannerImages,
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

  componentWillReceiveProps(newProps){
    this.setState({images: newProps.bannerImages})
  }

  render() {
    const { width, photoIndex, isOpen } = this.state;
    const isMobile = width <= 700;

    if (isMobile) {
      return (
        <PhotosContainer>
          <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:0 })}>
            <Img src={this.state.images[0]} />
          </Button>
          <ViewButton type="button" onClick={() => this.setState({ isOpen: true, photoIndex:0 })}>
            <h6>View Photos</h6>
          </ViewButton>
          {isOpen && (
            <Lightbox
              mainSrc={this.state.images[photoIndex]}
              nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
              prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + this.state.images.length - 1) % this.state.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.state.images.length,
                })
              }
            />
          )}
        </PhotosContainer>
      );
    } else {
      return (
        <PhotosContainer>
          <MainPic>
            <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:0 })}>
              <Img src={this.state.images[0]}/>
            </Button>
          </MainPic>
        
         {/*<SidePics>
            <TopRow>
              <LeftPic>
                <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:1 })}>
                  <Img src={this.props.bannerImages[1]} />
                </Button>
              </LeftPic>

              <RightPic>
                <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:2 })}>
                  <Img src={this.props.bannerImages[2]} />
                </Button>
              </RightPic>
            </TopRow>

            <BottomRow>
              <LeftPic>
                <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:3 })}>
                  <Img src={this.props.bannerImages[3]} />
                </Button>
              </LeftPic>

              <RightPic>
                <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:4 })}>
                  <Img src={this.props.bannerImages[4]} />
                </Button>
              </RightPic>
            </BottomRow>
          </SidePics>   
         */}      
          <ViewButton type="button" onClick={() => this.setState({ isOpen: true, photoIndex:0 })}>
            <h6>View Photos</h6>
          </ViewButton>

          {isOpen && (
          <Lightbox
            mainSrc={this.state.images[photoIndex]}
            nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
            prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.state.images.length - 1) % this.state.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.state.images.length,
              })
            }
          />
        )}
        </PhotosContainer>
      );
    }
  }
}
