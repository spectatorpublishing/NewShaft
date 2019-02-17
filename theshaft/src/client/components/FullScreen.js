import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import styled from 'styled-components';
 
const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];
 
let Button = styled.button`
    background: none;
    border: none;
    padding: 5px;
    font-weight: bold;

    ${({ clicked }) => clicked && `
        background: black;
  	`}
`
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
 
    return (
      <div>
        <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:0 })}>
          Open Lightbox
        </Button>
        <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:1 })}>
          Open Lightbox 2
        </Button>
        <Button type="button" onClick={() => this.setState({ isOpen: true, photoIndex:2 })}>
          <img src="http://assets.ce.columbia.edu/i/ce/intl/intl-fp@2x.jpg" width="200px"/>
        </Button>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}