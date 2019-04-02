import React, { Component } from "react";
import styled from 'styled-components';
import crisV from '../assets/chrisv_blue.svg';

let FAQBubbleContainer = styled.div`
    ${props => props.theme.grayBorder}
    padding: 3vw;
`

let Title = styled.h1`
    margin-top: -0.3vw;
    margin-bottom: 1vw;
    margin-left: 0.6vw;
    font-weight: 5000;
    width: 100%;
`

let ExpanderBox = styled.div`
  ${({ boxStyle }) => boxStyle}
`

let RowDisplay = styled.div`
    display: flex;
    flex-direction: row;
`

let ExpanderContent = styled.div`
  padding: 1rem;
  color: ${({ textColor }) => textColor}
`

let ExpanderList = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${({ textColor }) => textColor}
`

let ToggleSize = styled.button`
  background: none;
  border: none;
//   border-bottom-left-radius: ${props => props.theme.borderRadius};
//   border-bottom-right-radius: ${props => props.theme.borderRadius};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  padding: 0.1rem;
  width: 10%;

  :hover {
    background-color: ${({ color }) => color};
  }

  :hover>h3 {
    color: white;
  }

  :active {
    background-color: ${({ color }) => color};
  }
`

let ButtonText = styled.h3`
  //color: ${({ textColor }) => textColor}

  :hover {
    color: white;
  }
  :active {
    color: ${({ color }) => color};
  }
`

let ChrisV = styled.div`
    display: inline-block;
    & img {
        transform: ${ props => props.flip ? "scaleY(-1)" : "none"};
        margin: 2px 0;
    }
`


export default class FAQBubble extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            boxStyle: this.props.custom ? this.props.custom.boxStyle : "",
            color: this.props.custom ? this.props.custom.color : theme.lightGray,
            textColor: this.props.custom ? this.props.custom.textColor : theme.darkGray,
          };
          this.toggleSize = this.toggleSize.bind(this);
        
    }

    toggleSize(e) {
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        return(
            <ExpanderBox boxStyle={this.state.boxStyle} color={this.state.color}>
                <RowDisplay>
                <Title>
                    Hello World
                </Title>
                <ToggleSize color={this.state.color} onClick={this.toggleSize}>
                    <ChrisV flip={this.state.expanded}/>
                </ToggleSize>
                </RowDisplay>

                <ExpanderContent textColor={this.state.textColor}>
                    {this.props.children}
                <ExpanderList textColor={this.state.textColor}>
                    {this.state.expanded ? this.props.showAll : this.props.showSome}
                </ExpanderList>
                </ExpanderContent>
                
            </ExpanderBox>
        );
    }
}



// <FAQBubbleContainer>
//     <Title>Hello World</Title>
// </FAQBubbleContainer>