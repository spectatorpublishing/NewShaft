import React, { Component } from "react";
import FilterButton from "./FilterButton.js";
import FilterCategory from "./FilterCategory.js";
import styled from 'styled-components';

let Filter = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 33%);
	@media(max-width: 768px){
		position: relative; // So that the filter list will position itself relative to this div
	}
`

let FilterLabel = styled.div`
    color: ${props => props.theme.columbiaBlue};
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
		"Accessibility",
		"Gym",
		"Bathroom"
	]
}

export default class FilterComponent extends React.PureComponent {

	constructor(props) {
	    super(props);

	    this.state = {
				type: this.props.type,
				openFilters: 0,
			};
			this.setfilter = this.setfilter.bind(this)
	}

	// Sets the single active filter
	setfilter(key, val){
		this.setState({openFilters: 0})
		// val is the value we are setting (1 or 0) and
		// key is the index of the filter we are setting. 
		// If key is 2 and value is 1, we set openFilters 
		// to 1<<2, which is 0100. We then know that the 
		// second filter is active. 
		this.setState({openFilters: val<<key})
		console.log(this.state.openFilters)
	}

	render() {
		// The open prop bitshifts this.state.open over i values. For example, if the 
		// state is 0010, we want the second filter to be active. 
		// If i is 1, open is bitshifted to 0001. We then mask it with 1, which
		// makes only take the rightmost bit signficant. Then we apply the ! operator
		// twice which just casts 1 to true. 
		// If i is not 1, then it is either bitshifted to 0000 or something greater than
		// 1, which is then masked out by our AND 1 operation to 0. We then cast 0 to false. 
		const Filters = Object.keys(filterElements).map((filterName, i)=>{
			return <FilterCategory 
				key={i}
				i={i}
				open={!!(1 & this.state.openFilters>>i)}
				setfilter={this.setfilter}
				handleChange={this.props.handleChange}
				headerTitle={filterName}
				filters={filterElements[filterName]}>
			</FilterCategory>
		})

		return(
			<Filter>
				<FilterLabel><h4>Filters</h4></FilterLabel>
				{Filters}
			</Filter>
		)
		}
		
	}
