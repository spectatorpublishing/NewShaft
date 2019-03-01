import React, { Component } from "react";
import styled from 'styled-components';

let ScrollButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: ${props => props.theme.darkGray};
  display: flex;
  margin-bottom: 15px;
  padding: 0 0 0 25px;
  text-align: left;
`

let Label = styled.p`
  &:hover {
    color: ${props => props.theme.columbiaBlue};
  }
`

let ActiveLabel = styled.b`
  color: ${props => props.theme.columbiaBlue};
`

let Dot = styled.span`
  background-color: ${props => props.theme.columbiaBlue};
  border-radius: 50%;
  display: inline-block;
  height: 5px;
  margin-left: -10px;
  position: absolute;
  width: 5px;
`

export default class Scroller extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.scrollToRef = this.scrollToRef.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  isActive(scrollPosition) {
    // Subtract 60 from the offset value to account for the navbar height (60px).
    let top = this.props.compRef.current.offsetTop - 60;
    let bottom = this.props.compRef.current.offsetHeight + top;
    return (scrollPosition >= top && scrollPosition < bottom);
  }

  scrollToRef() {
    window.scrollTo({
      // 1px less than the 20px buffer we set in handleScroll() to avoid overlap
      top: this.props.compRef.current.offsetTop - 79, 
      left: 0,
      behavior: 'smooth'
    });
  }

  handleScroll(e) {
    // Give a 20px buffer so the component doesn't have to be flush with the bottom of
    // the navbar to trigger the scroll change. Now the change happens when the top of
    // the component is within 10px of the bottom of the navbar.
    if (this.state.active != this.isActive(e.target.scrollingElement.scrollTop + 20)) {
      this.setState({ active: !this.state.active });
    }
  }

  render() {
    return (
      <ScrollButton onClick={this.scrollToRef} highlight={this.state.active}>
        {this.state.active ? 
          <React.Fragment>
            <Dot></Dot>
            <ActiveLabel>{this.props.label}</ActiveLabel>
          </React.Fragment>
        :
          <Label>{this.props.label}</Label>
        }
      </ScrollButton>
    );
  }
}
