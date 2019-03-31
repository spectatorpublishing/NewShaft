import React, { Component } from "react";
import styled from 'styled-components';

let Sidebar = styled.div`
    width: 20%;
    height: 100%;
`

let DormList = styled.div`
    display: flex;
    flex-direction: column;
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

export default class WhiteboardSidebar extends React.PureComponent {

    onClick(dorm) {
        console.log(dorm)
        this.props.sidebarModification(dorm)
    }

    render() {
        const dormArray = ['47 Claremont', 'Broadway Hall', 'Carman Hall', 'East Campus', 'Furnald Hall', 'Harmony Hall',
                       'Hartley Hall', 'Hogan Hall', 'John Jay Hall', 'McBain Hall', 'NUSSBAUM', 'RIVER', 'RUGGLES', 
                       'SCHAPIRO', 'SYMPOSIUM', 'WALLACH', 'WATT', 'WIEN', 'WOODBRIDGE']
        return (
            <div>
                <Sidebar>
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
