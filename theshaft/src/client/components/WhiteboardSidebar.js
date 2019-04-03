import React, { Component } from "react";
import styled from 'styled-components';
import ChrisV from '../assets/chrisv_blue.svg'
import {theme} from '../util/GlobalStyles.js';

let Sidebar = styled.div`
    width: 10vw;
    height: 100vh;
    margin-top:6vh;
    margin-left:5vw;
    display:flex;
    flex-direction:column;
    
`
let SidebarTitle = styled.h3`
    text-align:center;
    border-bottom:solid;
    border-color:${props => props.theme.columbiaBlue}; 
    border-width:2px;
    @media only screen and (max-width: 992px){
        color: 	${props => props.theme.white};
        padding-top: 1rem;
        padding-bottom:0.5rem;
        text-align: center;
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
                    <SidebarTitle>Dorm</SidebarTitle>
                    <DormListMobile>
                        <select 
                            value={this.props.currDorm} 
                            onChange={e => this.onClick(e.target.value)}
                        >
                            {this.getMobileDorms()} 
                        </select>
                        <img src={ChrisV}/>
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
                        </DormListDesktop>
                    </Sidebar>
                </div>
             )
        }
    }
}
