import React, { Component } from "react";
import styled from 'styled-components';


let Sidebar = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`

let DormListDesktop = styled.div`
    flex-direction: column;
    text-align: left;
    width: 20%;
`
let DormListMobile = styled.div`
    flex-direction: row;
    text-align: left;
    
`
let Dorm = styled.button`
    padding: .5em;
    background-color: #FFFFFF;
    border: none;
    color: #000;
    font-size: 1rem;
    background: none;
    text-align: left;

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
                    <DormListMobile>
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
