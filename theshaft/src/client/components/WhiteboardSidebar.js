import React, { Component } from "react";
import styled from 'styled-components';


let Sidebar = styled.div`
<<<<<<< HEAD
    width: 7.5vw;
    height: 100vh;
    margin: 30% 40% 20% 70% ;
    display:flex;
    flex-direction:column;
=======
    height: 100%;
    display: flex;
    flex-wrap: wrap;
>>>>>>> 8cf08f9aa8270987cca7dcae69fac5068a5ed39a
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
    flex-direction: column;
<<<<<<< HEAD
=======
    text-align: left;
    width: 20%;
`
let DormListMobile = styled.div`
    flex-direction: row;
    text-align: left;
    
>>>>>>> 8cf08f9aa8270987cca7dcae69fac5068a5ed39a
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

        const dormArray = ['47 CLAREMONT', 'BROADWAY', 'CARMAN', 'EAST CAMPUS', 'FURNALD', 'HARMONY',
                       'HARTLEY', 'HOGAN', 'JOHN JAY', 'MCBAIN', 'NUSSBAUM', 'RIVER', 'RUGGLES', 
                       'SCHAPIRO', 'SYMPOSIUM', 'WALLACH', 'WATT', 'WIEN', 'WOODBRIDGE'];
        const { width } = this.state;
        const isMobile = width <= 700;

        if (isMobile) {
            return (
                <Sidebar>
<<<<<<< HEAD
                    <SidebarTitle>Dorms</SidebarTitle>
                    <DormList>
=======
                    <DormListMobile>
>>>>>>> 8cf08f9aa8270987cca7dcae69fac5068a5ed39a
                        { 
                                dormArray.map((dorm) =>
                                    (<Dorm onClick = {() => this.onClick(dorm)}> 
                                    {dorm}
                                </Dorm>)
                                )
                        } 
                        

                    </DormListMobile>
                </Sidebar>
            );
        }
        else {
            return (
                <div>
                    <Sidebar>
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
