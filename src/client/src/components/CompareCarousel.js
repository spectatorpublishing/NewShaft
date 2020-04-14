import React, { Component } from 'react';
import styled from 'styled-components';

const ImageSlide = ({ url }) => {

  
    return (
        <img src={ url }/>
    );
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
);

let Carousel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center; 
`

export default class CompareCarousel extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            currentImageIndex: 0,
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        if (this.state.currentImageIndex == 0) {
            this.setState({ currentImageIndex: this.props.img.length - 1 });
        } else {
            this.setState({ currentImageIndex: this.state.currentImageIndex - 1 });
        }
    }
    
    nextSlide () {
        if (this.state.currentImageIndex == this.props.img.length - 1) {
            this.setState({ currentImageIndex: 0 });
        } else {
            this.setState({ currentImageIndex: this.state.currentImageIndex + 1 });
        }
    }

    render () {
        return (
          <Carousel style= {{marginLeft: 100, marginRight: 100}}>
                <Arrow
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />

                <ImageSlide url={this.props.img[this.state.currentImageIndex]} />

                <Arrow
                    direction="right"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;" />
            </Carousel>
        );
      }

}