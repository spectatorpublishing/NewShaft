import React, { useState } from "react";
import styled from 'styled-components';
import SingleFilter2022 from "./FilterCategory2022";
import { FILTER_NAME_TO_KEY } from "../util/DormFilter.js";

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
        margin-left: 5%;
        display: flex;
    }
`;


let Textbox = styled.div`
    font-family: 'Raleway';
    font-size: 1rem;
    color: #73A6E0;
    padding-right: 1rem;
`;

let ClearButton = styled.a`
    cursor: pointer;
    text-decoration: underline;
    padding-left: 1rem;
`;

const white = 'white';
const blue = 'rgb(98, 168, 229)';

const filterElements = {
	"School": [
		"Columbia",
		"Barnard"
	],
	"Group Size": [
		"2 Person",
		"3 Person",
		"4 Person",
		"5 Person",
		"6 Person",
		"7 Person",
		"8 Person",
		"9 Person",
		"10 Person"
	],
	"Room Type": [
        "Corridor Style",
        "Suite Style",
		"Single",
		"Double",
		"Triple",
	],
	"Typical Residents": [
		"First Year",
		"Sophomore",
		"Junior",
		"Senior"
	],
	// "Amenities": [
	// 	"A/C",
	// 	"Private Kitchen",
	// 	"Gym",
	// 	"Single-Use Bathroom"
	// ]
}


const FilterBar = (props) => {
    const [openFilters, setOpenFilters] = useState([0, 0, 0, 0]);
    const [selectedFilters, setSelectedFilters] = useState([0, 0, 0, 0]);


    const clear = () => {
        setOpenFilters([0, 0, 0, 0]);
        setSelectedFilters([0, 0, 0, 0]);
        props.reset();
    }

    const setfilter = (key, val) => {
		// this.setState({openFilters: 0})
		// val is the value we are setting (1 or 0) and
		// key is the index of the filter we are setting. 
		// If key is 2 and value is 1, we set openFilters 
		// to 1<<2, which is 0100. We then know that the 
		// second filter is active. 
		const new_open = [...openFilters]
		new_open[key] = val
        setOpenFilters(new_open)
	}


    const getFilters = () => {
		return Object.keys(filterElements).map((filterName, i) => {
			// Create an array of the filters within the category that are selected
			let categoryFilters = filterElements[filterName];
			let categoryPayload = categoryFilters.filter(filter => 
				!!props.payload[FILTER_NAME_TO_KEY[filter]]
			);
            console.log("filters: ", categoryFilters);
            console.log("payload: ", categoryPayload);

			
			return <SingleFilter2022 
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
            {getFilters()}
            <Textbox>
                <ClearButton onClick={() => clear()}>Clear</ClearButton>
            </Textbox>
        </FilterRow>
    );
}

export default FilterBar;