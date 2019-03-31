import React, { Component } from "react";
import styled from 'styled-components';
import { GlobalStyles } from "../util/GlobalStyles";

let Table = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    cursor: pointer;
    margin-bottom: 3vh;
    width: 50vw;
    height: 15vh;
    background-color: white;
    border-radius: 2vw;
    padding: 1.5vw 1.5vw 1.5vw 1.5vw;
`

let Span = styled.div`
    font-size: 1.5em;
    font-weight: bold;
`


let Container = styled.div`
  overflow: scroll;  
`

let Content = styled.span`
    font-size: 1em;
`



export default class FAQSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  toggle(position){
    if(this.state.active == position){
      this.setState({active: null})
    } else{
      this.setState({active: position})
    }
  }

  myColor(position){
    if(this.state.active == position){
      return "#DCDCDC";
    }
    return "";
  }

  render() {
    return (
      <Container>
          <Table style={{background: this.myColor(0)}} onClick={() => {this.toggle(0)}}> <Span>1. Time Line</Span> <Content>{this.props.content1}</Content> </Table>
          <Table style={{background: this.myColor(1)}} onClick={() => {this.toggle(1)}}> <Span>2. Housing Registration Process</Span> <Content>{this.props.content2}</Content> </Table>
          <Table style={{background: this.myColor(2)}} onClick={() => {this.toggle(2)}}> <Span>3. Special Housing Accomodations</Span> <Content>{this.props.content3}</Content> </Table>
          <Table style={{background: this.myColor(3)}} onClick={() => {this.toggle(3)}}> <Span>4. Barnard + Columbia</Span> <Content>{this.props.content4}</Content> </Table>
          <br/>
      </Container>
    );
  }
}