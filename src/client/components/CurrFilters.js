import React, { Component } from "react";
import styled from 'styled-components';
import _ from 'lodash';

const CurrFiltersWrapper = styled.div`
`

const CurrActiveFilter = styled.div`
    display: inline-block;
    border-radius: 10px;
    border: 1px solid ${props=>props.theme.lightGray};
    padding: 0.1rem 1rem;
    margin: 0.25rem 0.25rem;
    cursor: pointer;
    background-color: ${props=>props.blueBackground ? props.theme.columbiaBlue : "transparent"};
    color: ${props=>props.blueBackground ? props.theme.white : "inherit"};
    &:hover {
        background-color: ${props=>props.theme.lightGray};
        &>span {
            color: ${props=>props.theme.mediumGray};
        }
    }
`

const Close = styled.span`
    position: absolute;
    margin-left: 0.2rem;
    z-index: 0;
    color: ${props=>props.theme.lightGray};
`

const CurrFilters = (props) => {
    const filterKeyToName = _.invert(props.filterNameToKey)
    const activeFilters = []
    Object.keys(props.filters).map((filterKey, i)=>{
        if (typeof props.filters[filterKey] === "number" && !!props.filters[filterKey]){
            activeFilters.push(<CurrActiveFilter key={i+1} onClick={()=>props.removeFilter(filterKeyToName[filterKey])}>
                {filterKeyToName[filterKey]}
                <Close>&times;</Close>
            </CurrActiveFilter>)
        }
    })
    if (activeFilters.length > 0){
        activeFilters.unshift(<CurrActiveFilter key={0} blueBackground onClick={props.removeAll}>
        {"Clear Filters"}
        </CurrActiveFilter>)
    }
    return <CurrFiltersWrapper>
        {activeFilters}
    </CurrFiltersWrapper>
}
export default CurrFilters