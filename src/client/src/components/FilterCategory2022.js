import React, { useState } from "react";
import styled from "styled-components/macro";
import { Button,  ButtonGroup, Dropdown, DropdownButton, MenuItem } from 'react-bootstrap';
import FilterItem2022 from "./FilterItem2022.js";

let ButtonWrapper = styled.div`
    padding: .5rem;
`;

const SingleFilter2022 = (props) => {

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