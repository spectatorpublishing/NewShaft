import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Button,  ButtonGroup, Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';
import FilterItem from "./FilterItem.js";
import { theme } from "../../util/GlobalStyles";


let ButtonWrapper = styled.div`
    padding: .5rem;
    position: relative;

    .dropdown.show {
        z-index: 2000;
    }

    .dropdown-toggle {
        background-color: ${props => props.background};
        color: ${props => props.color};
        border: 1px solid ${props => props.color};
        border-radius: 10px;
    }

    .dropdown-menu {
        z-index: 2100;
        min-width: 100%;
        max-height: min(60vh, 460px);
        overflow-y: auto;
        overflow-x: hidden;
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

const RoomTypeDivider = styled.hr`
    border: 0;
    border-top: 1px solid #d9d9d9;
    margin: 0.45rem 0.8rem 0.35rem 0.8rem;
`;

const RoomTypeHint = styled.div`
    color: ${theme.columbiaBlue};
    font-family: 'Raleway';
    font-size: 0.85rem;
    line-height: 1.2;
    max-width: 15.5rem;
    white-space: normal;
    padding: 0.35rem 0.9rem 0.75rem 0.9rem;

    .asterisk {
        font-size: 1.15rem;
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
                    <React.Fragment key={idx}>
                        <FilterItem
                            option={option}
                            handleChange={props.handleChange}
                            isActive={isActive(option)}
                            filterCategory={props.headerTitle}
                        ></FilterItem>
                        {props.headerTitle === "Room Type" && option === "Suite Style" && (
                            <RoomTypeDivider />
                        )}
                    </React.Fragment>
                ))}
                {props.headerTitle === "Group Size" && (
                    <GroupSizeHint><span className="asterisk">*</span> # of Persons</GroupSizeHint>
                )}
                {props.headerTitle === "Room Type" && (
                    <RoomTypeHint>
                        <span className="asterisk">*</span>The Apartment category applies to Columbia's privacy-based definitions
                    </RoomTypeHint>
                )}
            </DropdownButton>
        </ButtonWrapper>
    )
}

export default SingleFilter;