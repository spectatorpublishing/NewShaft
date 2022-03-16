import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Button,  ButtonGroup, Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';
import FilterItem2022 from "./FilterItem2022.js";
import { theme } from "../util/GlobalStyles";


let ButtonWrapper = styled.div`
    padding: .5rem;
    .dropdown-toggle {
        background-color: ${props => props.background};
        color: ${props => props.color};
        border: 1px solid ${props => props.color};
        border-radius: 10px;
    }
`;

const SingleFilter2022 = (props) => {
    const [hasSelected, setHasSelected] = useState(false);
    const [dropdownBackColor, setBackColor] = useState("white");
    const [dropdownTextColor, setTextColor] = useState(theme.columbiaBlue);

    const isActive = (name) => {
        return props.payload.includes(name);
    }

    useEffect(() => {
        if (props.payload.length !== 0){
            setBackColor(theme.columbiaBlue)
            setTextColor("white")
        } else {
            setBackColor("white")
            setTextColor(theme.columbiaBlue)
        }
    }, [props.payload]);

    return(
        <ButtonWrapper color={dropdownTextColor} background={dropdownBackColor}>
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