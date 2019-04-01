import React, { Component } from "react";
import styled from 'styled-components';


let Sidebar = styled.div`
    width: auto;
    height: 100vh;
    margin-top:6vh;
    margin-left:7vw;
    display:flex;
    flex-direction:column;
    
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

let DormListMobile = styled.div`
    &>select{
        border-radius: 10px;
        background: ${props => props.theme.white};
        border: 1px solid ${props => props.theme.lightGray};
        padding: 4px;
    }
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
        this.onClick = this.onClick.bind(this)
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
                    <div>
                    <SidebarTitle>Dorms</SidebarTitle>
                    <DormListMobile>
                        <select value={this.props.currDorm} onChange={e => this.onClick(e.target.value)}>
                        { 
                                dormArray.map((dorm) =>
                                    (<option value={dorm}> 
                                    {dorm}
                                    </option>)
                                )
                        } 
                        </select>

                    </DormListMobile>
                    </div>
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
