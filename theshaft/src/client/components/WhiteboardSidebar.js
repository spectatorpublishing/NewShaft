import React, { Component } from "react";
import styled from 'styled-components';

let Sidebar = styled.div`
    width: 7.5vw;
    height: 100vh;
    margin: 50% 20% 20% 20% ;
    display:flex;
    flex-direction:column;
`



let DormList = styled.div`
    display: flex;
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

export default class WhiteboardSidebar extends React.PureComponent {

    onClick(dorm) {
        console.log(dorm)
        this.props.sidebarModification(dorm)
    }

    render() {
        const dormArray = ['47 CLAREMONT', 'BROADWAY', 'CARMAN', 'EAST CAMPUS', 'FURNALD', 'HARMONY',
                       'HARTLEY', 'HOGAN', 'JOHN JAY', 'MCBAIN', 'NUSSBAUM', 'RIVER', 'RUGGLES', 
                       'SCHAPIRO', 'SYMPOSIUM', 'WALLACH', 'WATT', 'WIEN', 'WOODBRIDGE']
        return (
            <div>
                <Sidebar>
                    <div className="sidebar" style={{textAlign:"center"}}>faspdo</div>
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
            </div>
        )
    }
}
