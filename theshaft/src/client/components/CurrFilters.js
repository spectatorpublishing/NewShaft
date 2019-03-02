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
    &:hover {
        background: ${props=>props.theme.lightGray};
        & span.close {
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
    console.log(props)
    const filterKeyToName = _.invert(props.filterNameToKey)
    const activeFilters = []
    Object.keys(props.filters).map((filterKey)=>{
        if (typeof props.filters[filterKey] === "number" && !!props.filters[filterKey]){
            console.log('a')
            activeFilters.push(<CurrActiveFilter onClick={()=>props.removeFilter(filterKeyToName[filterKey])}>
                {filterKeyToName[filterKey]}
                <Close className="close">&times;</Close>
            </CurrActiveFilter>)
        }
    })
    return <CurrFiltersWrapper>
        {activeFilters}
    </CurrFiltersWrapper>
}
export default CurrFilters