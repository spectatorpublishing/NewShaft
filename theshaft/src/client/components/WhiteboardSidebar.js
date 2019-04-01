import React, { Component } from "react";
import styled from 'styled-components';


let Sidebar = styled.div`
    width: 7.5vw;
    height: 100vh;
    margin: 40% 50% 20% 70%;
    display:flex;
    flex-direction:column;

    @media(max-width:991)
    {
        display:flex;
        width:auto;
        height:100vh;
        flex-direction:column;
    }
`
let SidebarTitle = styled.div`
    text-align:center;
    font-size:1.5rem;
    border-bottom:solid;
    border-color:${props => props.theme.columbiaBlue}; 
    border-width:2px;
    font-weight: bold;
`


let DormListDesktop = styled.div`
    display:flex;
    justify-content:column;
    flex-direction: column;
`
let Dorm = styled.button`
    padding: .5em;
    background-color: #FFFFFF;
    border: none;
    color: #000;
    font-size: 1rem;
    background: none;
    text-align: center;

    &:hover {
        background-color: #9a9c9e;
        border-radius: 25px;
    }
`

export default class WhiteboardSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        }
    }

    onClick(dorm) {
        console.log(dorm)
        this.props.sidebarModification(dorm)
    }

    componentWillMount() {
        window.addEventListener("resize", this.handleWindowSizeChange);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowSizeChange);
      }
    
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      }

    render() {

       

      
        const dormArray = ['47 Claremont', 'Broadway Hall', 'East Campus', 'Furnald Hall', 'Harmony Hall',
                        'Hogan Hall', 'McBain Hall', '600 W 113th', 'River Hall', 'Ruggles Hall', 
                       'Schapiro Hall', 'Watt Hall', 'Wien Hall', 'Woodbridge Hall'];
        const { width } = this.state;
        const isMobile = width <= 700;

        if (isMobile) {
            return (
                <Sidebar>
                    <SidebarTitle>Dorms</SidebarTitle>
                    <DormList>
                        { 
                                dormArray.map((dorm) =>
                                    (<Dorm onClick = {() => this.onClick(dorm)}> 
                                    {dorm}
                                </Dorm>)
                                )
                        } 
                        

                    </DormList>
                </Sidebar>
            );
        }
        else {
            return (
                <div>
                    <Sidebar>
                    <SidebarTitle>Dorms</SidebarTitle>
                        <DormListDesktop>
                            { 
                                dormArray.map((dorm) =>
                                    (<Dorm onClick = {() => this.onClick(dorm)}> 
                                    {dorm}
                                </Dorm>)
                                )
                            }
                        </DormListDesktop>
                     </Sidebar>
                </div>
             )
        }
    }
}
