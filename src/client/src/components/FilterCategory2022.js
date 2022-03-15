import React, { useState } from "react";
import styled from "styled-components/macro";
import { Button,  ButtonGroup, Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';
import FilterItem2022 from "./FilterItem2022.js";

let DropdownWrap = styled.div`
    float: left;
    overflow: hidden;
`;

let DropButton = styled(DropdownButton)`
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid #73A6E0;  
    height: fit-content;
    width: fit-content;
    color:"#73A6E0";
    font-family: 'Raleway';
    margin-left:0.5rem;
    margin-right:0.5rem;
    font-size:1rem;
    text-align: center;
    padding: 0.1rem .8rem;
    background-color: rgb(98, 168, 229);
    outline: none;
    margin: .3rem;
    @media only screen and (max-width: 1024px) {
        height: 3rem;
        width: 5rem;
        padding: 0 .3rem;
    }
`;

let DropdownContent = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    min-width: 8rem;
    font-family: 'Raleway';
    box-shadow: 0.5rem 0rem 1rem 0rem rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 8px;
    border: 1.5px solid rgb(98, 168, 229);
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;  
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
`;

let Row = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    justify-content: center;
    padding: 0.3rem 0rem 0.3rem 0rem;
`;

let Label = styled.label`
    font-family: 'Raleway';
    /* padding-left: 0.6rem; */
    /* padding-top: 0.2rem; */
    /* padding-right: 0.6rem; */
    color: rgb(98, 168, 229);
    font-size: 1.3rem;
    background: white;
    font-weight: normal;
    display: inline-block;
    padding-right: 10px;
    white-space: nowrap;
    span {
        vertical-align: middle;
    }
`;

let Input = styled.input`
    border: 2px solid rgb(98, 168, 229);
    border-radius: 6px;
    width: 1.2rem;
    height: 0.9rem;
    cursor: pointer;
    /* margin: 0.2rem; */
    color: white;
    font-size: 1.1rem;
    /* text-align: top; */
    padding: 0.1rem 0rem 0.4rem 0.2rem;
    background-color: transparent;
    vertical-align: middle;
    &:active{
        background-color: rgb(98, 168, 229);
    }
`;

let ButtonWrapper = styled.div`
    padding: .5rem;
`;

const SingleFilter2022 = (props) => {
    const [activeCategory, setActiveCategory] = useState(false);
    const [activeFilter, setActiveFilter] = useState(true);
    const [show, setShow] = useState(false);

    const isActive = (name) => {
        return props.payload.includes(name);
    }

    return(
        <ButtonWrapper>
            <DropdownButton
                as={ButtonGroup}
                key={props.headerTitle}
                id={`dropdown-variants-${props.headerTitle}`}
                variant={props.headerTitle}
                title={props.headerTitle}
                focusFirstItemOnShow='true'
                rootCloseEvent='click'
            >
                {props.filters.map((option, idx) => (
                    <FilterItem2022 option={option} key={idx} handleChange={props.handleChange} isActive={isActive(option)}></FilterItem2022>
                ))}
            </DropdownButton>
        </ButtonWrapper>
    )
}

export default SingleFilter2022;