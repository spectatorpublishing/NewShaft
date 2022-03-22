import React, { Component } from "react";
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import ChrisV from '../assets/chrisv_blue.svg';
import { theme } from '../util/GlobalStyles.js';


let NumberBtn = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.2rem 1rem;
    margin: 0.2rem 0;
    font-weight: bold;
    border-radius: 5px;
    font-family: Raleway, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.white};
    border: solid 1px ${props => props.theme.lightGray};    
    width: 100%;
    text-align: center;
    &:hover {
        background-color: ${props => props.theme.lightGray};
    }
    @media only screen and (max-width: 992px){
        text-align: center !important;
    }

`
let NumberSelected = styled(NumberBtn)`
   font-family: Raleway, sans-serif;
   font-weight: 400;
   font-size: 1rem;
   padding: 0.2rem 1rem;
   margin: 0.2rem 0;
   text-align: left;
   border: solid 1px ${props => props.theme.lightGray};
   color: ${props => props.theme.white};    
   background-color: ${props => props.theme.columbiaBlue};
    @media only screen and (min-width: 992px){
        background-color: ${props => props.theme.columbiaBlue};
        color: ${props => props.theme.white};
        text-shadow: ${props => props.theme.shadow};
    }
    &:hover {
        background-color: ${props => props.theme.lightGray};
    }
`
let ButtonTopText = styled.p`
    color: 	${props => props.theme.columbiaBlue};
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom:0.5rem;
    text-align: left;
`

let FloorButtonWrapper = styled.div`
    padding: 1rem 0.75rem;
    @media only screen and (min-width: 992px){
        padding: 0;
    }
`

let Buttons = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent; 
    margin: 0 1rem 0 0;
    overflow: visible;
    border-radius: 0;
    @media(max-width: 991px){
        flex-direction: row;
    }
`

let StyledToggle = styled(Dropdown.Toggle)`
   background-color: white;
   padding: 0.8rem 0.0rem 0.8rem 0.4rem;
   width: 100%
   border: none;
   border-radius: 10px;
`;

let Items = styled(Dropdown.Item)`
   background-color: white;
   width: 100%;
   
`;

let Menu = styled(Dropdown.Menu)`
   background-color: white;
   width: 90%;
   box-shadow: 2px 2px 2px lightgray;
   
`;

let StyledDropdown = styled(Dropdown)`
   background-color: white;
   width: 100%;
   border-radius: 10px;
`;

let V = styled.img`
   display: block;
   margin-left: auto;
`;


export default class FloorButton extends Component {
    constructor(props) {
        super(props)

        if (this.props.floorNums) {
            this.props.handleChange(this.props.floorNums[0]["FLOOR"]);
        }

        this.state = {
            currentFloorIndex: 0,
            width: window.innerWidth,
        }
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);

    }

    componentWillMount() {
        window.addEventListener("resize", this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowSizeChange);
    }

    handleWindowSizeChange() {
        this.setState({ width: window.innerWidth });
    }


    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps) != JSON.stringify(this.props)) {
            if (this.props.floorNums) {
                this.props.handleChange(this.props.floorNums[0]["FLOOR"]);
                // console.log("test", this.props.floorNums[0]["FLOOR"])

            }
            this.setState({ currentFloorIndex: 0 });
        }
    }

    getButtons() {
        return this.props.floorNums.map((floor, id) => {
            let floorNum = floor["FLOOR"];
            if (id == this.state.currentFloorIndex) {
                return <NumberSelected key={id} onClick={() => {
                    this.props.handleChange(floorNum);
                }}>{floorNum}</NumberSelected>
            }
            else {
                return <NumberBtn key={id} onClick={() => {
                    this.setState({ currentFloorIndex: id });
                    this.props.handleChange(floorNum);
                }}>{floorNum}</NumberBtn>
            }
        });
    }


    render() {
        const { width } = this.state;
        const isMobile = width <= 700;

        return (
            <div>
                {this.props.floorNums &&
                    (<FloorButtonWrapper>
                        <Buttons>{this.getButtons()}</Buttons>
                    </FloorButtonWrapper>
                    )}
            </div>
        );
    }
}