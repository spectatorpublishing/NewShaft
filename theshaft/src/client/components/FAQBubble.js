import React, { Component } from "react";
import styled from 'styled-components';
import chris_v from '../assets/chrisv_blue.svg';
import { theme } from "../util/GlobalStyles";

let Title = styled.h3`
    margin-top: 0vw;
    margin-bottom: 1vw;
    margin-left: 1vw;
    font-weight: 5000;
    width: 100%;
    @media only screen and (max-width: 767px) {
        margin-top: 1vw;
        margin-left: 3vw;
    }
`

let ExpanderBox = styled.div`
    background-color: white;
    position: relative;
    top: 50px;
    min-height: 100px;
    margin: 0 8% 30px 8%;
    padding: 1.8vw;
    padding-bottom: 0.5vh;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (max-width: 767px) {
        margin: 0 2% 25px 2%;
        min-height: 80px;
        padding: 10px;
    }
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
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  padding: 0.1rem;
  width: 10%;
`

let Subtitle = styled.h4`
color: ${props => props.theme.columbiaBlue};
margin-right: 0.5rem;
`

let Body = styled.div`
margin-bottom: 1rem;
`

let Content = styled.div`

`

let ChrisV = styled.div`
    & img {
        transform: ${ props => props.flip ? "scale(4,-3)" : "scale(4, 3) "};
        margin: 2px 0;
    }

    @media only screen and (max-width: 767px) {
        & img {
            transform: ${ props => props.flip ? "scale(2.5,-2)" : "scale(2.5, 2) "};
            margin: 2px 0;
        }
    }
`


export default class FAQBubble extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            textColor: theme.darkGray,
          };
          this.toggleSize = this.toggleSize.bind(this);
        
    }

    toggleSize(e) {
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        const showSome = this.props.showSome.map((el, i) =>{
            return (<Subtitle>{el["subtitle"]}</Subtitle>)
        })

        const showAll = this.props.showAll.map((el,i) => {
            const showAllContent = el["body"].split('<br/>').map(text=><p>{text}</p>)
            return(<Content><Subtitle>{el["subtitle"]}</Subtitle><Body>{showAllContent}</Body></Content>)
        })
        return(
            <ExpanderBox onClick={this.toggleSize}>
                <RowDisplay>
                <Title>
                    {this.props.titleText}
                </Title>
                <ToggleSize>
                    <ChrisV flip={this.state.expanded}><img src={chris_v}></img></ChrisV>
                </ToggleSize>
                </RowDisplay>

                <ExpanderContent textColor={this.state.textColor}>
                    {this.props.children}
                <ExpanderList textColor={this.state.textColor}>
                    {this.state.expanded ? showAll : showSome}
                </ExpanderList>
                </ExpanderContent>
                
            </ExpanderBox>
        );
    }
}