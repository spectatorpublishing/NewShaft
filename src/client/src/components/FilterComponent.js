import React, { Component } from "react";
import FilterCategory from "./FilterCategory.js";
import styled from 'styled-components';
import { FILTER_NAME_TO_KEY } from "../util/DormFilter.js";

let Filter = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 33%);
	@media(max-width: 768px){
		position: relative; 
	}
	margin-top: 0;
	padding: 2% 0 2% 2%;
	grid-row-gap: 10%;
	background-color: ${props => props.theme.columbiaBlue};
`

let FilterLabel = styled.div`
    color: ${props => props.theme.columbiaBlue};
`
let FilterTitle = styled.h4`
	color: ${props => props.theme.white};
`

const filterElements = {
	"School": [
		"Columbia",
		"Barnard"
	],

	"Room Type": [
		"Single",
		"Double",
		"Triple",
	],

	"Suite Size": [
		"2 Person",
		"3 Person",
		"4 Person",
		"5 Person",
		"6 Person",
		"7 Person",
		"8 Person",
		"9 Person"
	],

	"Year": [
		"First Year",
		"Sophomore",
		"Junior",
		"Senior"
	],

	"Amenities": [
		"A/C",
		"Private Kitchen",
		"Gym",
		"Single-Use Bathroom"
	]
}

export default class FilterComponent extends React.PureComponent {
	constructor(props) {
	    super(props);

	    this.state = {
				type: this.props.type,
				openFilters: 0,
			};
			this.setfilter = this.setfilter.bind(this);
			this.closeAllFilters = this.closeAllFilters.bind(this);
			this.handleClickChange = this.handleClickChange.bind(this);
	}

    componentDidMount() {
        document.addEventListener("click", this.handleClickChange);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickChange);
    }

	// Sets the single active filter
	setfilter(key, val){
		// this.setState({openFilters: 0})
		// val is the value we are setting (1 or 0) and
		// key is the index of the filter we are setting. 
		// If key is 2 and value is 1, we set openFilters 
		// to 1<<2, which is 0100. We then know that the 
		// second filter is active. 
		this.setState({openFilters: val << key})
	}

	closeAllFilters() {
		this.setState({openFilters: 0});
	}

    handleClickChange(e) {
		let filterList = document.getElementById("filterList");
		if (filterList) {
			// Close filter list if we click outside of the filter list
			// And we don't click a different filter header title
			if (!filterList.contains(e.target) && !e.target.className.includes("DDHeaderTitle")) {
				this.closeAllFilters();
			}
		}
	}
	
	getFilters() {
		return Object.keys(filterElements).map((filterName, i) => {
			// Create an array of the filters within the category that are selected
			let categoryFilters = filterElements[filterName];
			let categoryPayload = categoryFilters.filter(filter => 
				!!this.props.payload[FILTER_NAME_TO_KEY[filter]]
			);

			// The open prop bitshifts this.state.open over i values. For example, if the 
			// state is 0010, we want the second filter to be active. 
			// If i is 1, open is bitshifted to 0001. We then mask it with 1, which
			// makes only take the rightmost bit signficant. Then we apply the ! operator
			// twice which just casts 1 to true. 
			// If i is not 1, then it is either bitshifted to 0000 or something greater than
			// 1, which is then masked out by our AND 1 operation to 0. We then cast 0 to false. 
			
			return <FilterCategory 
				key={i}
				i={i}
				open={!!(1 & this.state.openFilters >> i)}
				setfilter={this.setfilter}
				handleChange={this.props.handleChange}
				headerTitle={filterName}
				filters={categoryFilters}
				payload={categoryPayload}
			/>
		});
	}

	render() {

		return(
			<Filter>
				<FilterLabel><FilterTitle>Filters</FilterTitle></FilterLabel>
				{this.getFilters()}
			</Filter>
		)
		}
		
	}
