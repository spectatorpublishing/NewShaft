import React, { Component, useEffect } from "react";
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';


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

let FloorButtonWrapper = styled.div`
    padding: 1rem 0.75rem;
    @media only screen and (min-width: 992px){
        padding: 0;
    }

    @media only screen and (max-width: 992px){
        overflow: scroll;
        padding: 0;
        margin: 1rem 1rem 1rem 0.75rem;
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

const FloorButton = (props) => {
    return (
        <>
            {props.floorNums &&
                <FloorButtonWrapper>
                    <Buttons>
                        {props.floorNums.map((floor, id) => {
                            if (floor === props.curFloor) {
                                return (
                                    <NumberSelected key={id} onClick={() => {
                                        props.handleChange(floor);
                                    }}>{floor}</NumberSelected>
                                );     
                            } else {
                                return (
                                    <NumberBtn key={id} onClick={() => {
                                        props.handleChange(floor);
                                    }}>{floor}</NumberBtn>
                                );
                            }
                        })}
                    </Buttons>
                </FloorButtonWrapper>
            }
        </>
    )

};

export default FloorButton;