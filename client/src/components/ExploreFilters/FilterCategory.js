import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Button,  ButtonGroup, Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';
import FilterItem from "./FilterItem.js";
import { theme } from "../../util/GlobalStyles";


let ButtonWrapper = styled.div`
    padding: .5rem;
    .dropdown-toggle {
        background-color: ${props => props.background};
        color: ${props => props.color};
        border: 1px solid ${props => props.color};
        border-radius: 10px;
    }
`;

const GroupSizeHint = styled.div`
    color: ${theme.columbiaBlue};
    font-family: 'Raleway';
    font-size: 0.9rem;
    padding: 0.2rem 0.9rem 0.7rem 0.9rem;

    .asterisk {
        font-size: 1.25rem;
        line-height: 0;
        vertical-align: middle;
    }
`;

const SingleFilter = (props) => {
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
                    <FilterItem
                        option={option}
                        key={idx}
                        handleChange={props.handleChange}
                        isActive={isActive(option)}
                        filterCategory={props.headerTitle}
                    ></FilterItem>
                ))}
                {props.headerTitle === "Group Size" && (
                    <GroupSizeHint><span className="asterisk">*</span> # of Persons</GroupSizeHint>
                )}
            </DropdownButton>
        </ButtonWrapper>
    )
}

export default SingleFilter;