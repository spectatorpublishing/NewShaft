import React, { useState } from "react";
import styled from 'styled-components';
import SingleFilter from "./FilterCategory";
import { FILTER_NAME_TO_KEY } from "../../util/DormFilter.js";

let FilterRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
	flex-direction: row;
	align-items: center;
    margin-top: .5rem;
	padding: 0rem 1.2rem 0.6rem 0rem;
	//background-color: ${props => props.theme.columbiaBlue};
	//background-color: #999CCC;
    @media only screen and (max-width: 769px) {
        justify-content: center;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        display: flex;
		flex-direction: column;
		padding: 0rem;
    }
`;

const Filters = styled.div`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 769px) {
		display: flex;
		flex-wrap: wrap;
	}
`;


let Textbox = styled.div`
    font-family: 'Raleway';
    font-size: 1rem;
    color: #73A6E0;
    padding-right: 1rem;
	height: fit-content;
	margin: auto 0rem;
`;

let ClearButton = styled.a`
    cursor: pointer;
    text-decoration: underline;
    padding-left: 1rem;
`;

const FilterBar = (props) => {
    const [openFilters, setOpenFilters] = useState([0, 0, 0, 0]);
    const [selectedFilters, setSelectedFilters] = useState([0, 0, 0, 0]);


    const clear = () => {
        setOpenFilters([0, 0, 0, 0]);
        setSelectedFilters([0, 0, 0, 0]);
        props.reset();
    }

    const getFilters = () => {
		return Object.keys(props.filterElements).map((filterName, i) => {
			// Create an array of the filters within the category that are selected
			let categoryFilters = props.filterElements[filterName];
			let categoryPayload = categoryFilters.filter(filter => 
				!!props.payload[FILTER_NAME_TO_KEY[filter]]
			);
            console.log("filters: ", categoryFilters);
            console.log("payload: ", categoryPayload);

			
			return <SingleFilter 
				key={i}
				i={i}
				open={openFilters[i]}
				selected={selectedFilters[i]}
				handleChange={props.handleChange}
				headerTitle={filterName}
				filters={categoryFilters}
				payload={categoryPayload}
			/>
		});
	}

    return(
        <FilterRow>
            <Textbox>Filters:</Textbox>
			<Filters>
				{getFilters()}
				<Textbox>
					<ClearButton onClick={() => clear()}>Clear</ClearButton>
				</Textbox>
			</Filters>
        </FilterRow>
    );
}

export default FilterBar;