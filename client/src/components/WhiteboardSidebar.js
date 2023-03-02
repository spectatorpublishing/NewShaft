import React, { Component } from "react";
import styled from 'styled-components';
import ChrisV from '../assets/chrisv_blue.svg';
import {theme} from '../util/GlobalStyles.js';

let Sidebar = styled.div`
    width: 80%;
    height: 100vh;
    margin-top:6vh;
    margin-left:5vw;
    color: green;
    display:flex;
    flex-direction:column;
    
`
let SidebarTitle = styled.div`
    text-align: center;
    font-weight: bold;
    border-bottom: solid 1px ${props => props.theme.lightGray} !Important;
    color: ${props => props.theme.darkGray} !Important;
    margin-bottom: 2px;
    @media only screen and (max-width: 992px){
        color: 	${props => props.theme.white} !Important;
        padding-top: 1rem;
        padding-bottom: 0.5rem;
        text-align: left;
        border-bottom: none !Important;
        text-transform: uppercase;
        padding-left: 0.7rem;
        border: none;
        font-size: 1rem;
    }
`

let DormListDesktop = styled.div`
    display:flex;
    justify-content:column;
    flex-direction: column;
    button:nth-child(${props => props.selectedId + 1}){
        background-color: ${props => props.theme.columbiaBlue};
        border-radius: ${props => props.theme.borderRadius};
        color: ${props => props.theme.white};
        text-shadow: ${props => props.theme.shadow};
    }
`

let DormListMobile = styled.div`
    display: flex;
    align-items: center;
    &>select{
        border-radius: 10px;
        border: none;
        background: ${props => props.theme.white};
        height: 2.5rem;
        font-family: Raleway, sans-serif;
        font-size: 0.8rem;
        color: ${props => props.theme.darkGray};
        width: 95%;
        margin: 0 2.5%;
        padding: 0 5px;
    }
    &>select+img{
        margin-left: -30px;
        pointer-events: none;
    }
`

let Dorm = styled.button`
    padding: .5em;
    margin: 2px 0;
    background-color: ${props => props.theme.white};
    border: none;
    color: ${props => props.theme.black};
    font-size: 1rem;
    background: none;
    text-align: left;
    font-family: Raleway, sans-serif;
    &:hover {
        background-color: ${props => props.theme.lightGray};
        border-radius: ${props => props.theme.borderRadius};
    }
`

let Compare = styled.a`
    padding: .5em;
    margin: 2px 0;
    background-color: ${props => props.theme.white};
    border: none;
    color: ${props => props.theme.columbiaBlue};
    border: solid 2px ${props => props.theme.columbiaBlue};
    font-size: 1.2rem;
    border-radius: 8px;
    background: none;
    text-align: left;
    font-weight: bold;
    text-decoration: none;
    font-family: Raleway, sans-serif;
    &:hover {
        background-color: ${props => props.theme.columbiaBlue};
        color: ${props => props.theme.white};
    }
    display: none;
`;

let V = styled.img`
   display: flex;
   margin-left: 2rem;
   border-right: solid 6px white;
   background-color: white;
`;

const DORM_ARRAY = [
    '47 Claremont', 
    'Broadway Hall', 
    'East Campus', 
    'Furnald Hall', 
    'Harmony Hall', 
    'Hogan Hall', 
    'McBain Hall', 
    '600 W 113th', 
    'River Hall', 
    'Ruggles Hall', 
    'Schapiro Hall', 
    'Watt Hall', 
    'Wien Hall', 
    'Woodbridge Hall'
];

export default class WhiteboardSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dormId: 0,
            width: window.innerWidth,
        }
        this.onClick = this.onClick.bind(this);
        this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
        this.getDesktopDorms = this.getDesktopDorms.bind(this);
    }

    onClick(dorm) {
        this.props.sidebarModification(dorm);
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

    getMobileDorms() {
        return DORM_ARRAY.map((dorm, id) => {
            return <option key={id} value={dorm}>{dorm}</option>;
        });
    }

    getDesktopDorms() {
        return DORM_ARRAY.map((dorm, id) => {
            return <Dorm key={id} onClick={() => {this.onClick(dorm);
                if (this.state.dormId != id) {
                    this.setState({dormId: id});
                }
            }}>{dorm}</Dorm>;
        });   
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 700;

        if (isMobile) {
            return (
                <div>
                    <SidebarTitle>Dorm and Floor</SidebarTitle>
                    <DormListMobile>
                        <select 
                            value={this.props.currDorm} 
                            onChange={e => this.onClick(e.target.value)}
                        >
                            {this.getMobileDorms()} 
                        </select>
                        <V src={ChrisV}/>
                    </DormListMobile>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Sidebar>
                        <SidebarTitle>DORMS</SidebarTitle>
                        <DormListDesktop selectedId={this.state.dormId}>
                            {this.getDesktopDorms()}
                            <Compare href="/compare/">Compare Dorms</Compare>
                        </DormListDesktop>
                    </Sidebar>
                </div>
             )
        }
    }
}
