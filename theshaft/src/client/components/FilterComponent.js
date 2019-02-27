import React, { Component } from "react";
import FilterButton from "./FilterButton.js";
import FilterCategory from "./FilterCategory.js";
import styled from 'styled-components';

let Filter = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	// @media (max-width: 650px) {
	// 	display: flex;
	// 	flex-direction: column;
	// 	justify-content: center;
	// }
`

let FilterLabel = styled.div`
    color: ${props => props.theme.columbiaBlue};
`

const filterElements = {
	"School": [
		"columbia",
		"barnard"
	],

	"Room Type": [
		"single",
		"double",
		"# person suite"
	],

	"Year": [
		"first year",
		"sophomore",
		"junior",
		"senior"
	],

	"Amenities": [
		"Food",
		"Toilet",
		"interior decoration by RamondLiCSS"
	]
}

export default class FilterComponent extends React.PureComponent {

	constructor(props) {
	    super(props);

	    this.state = {
				type: this.props.type,
				handleChange: this.props.handleChange,
				openFilters: 0
			};
			this.setfilter = this.setfilter.bind(this)
	}

	setfilter(key, val){
		this.setState({openFilters: 0})
		this.setState({openFilters: val<<key})
		console.log(this.state.openFilters)
	}

	render() {
		const Filters = Object.keys(filterElements).map((filterName, i)=>{
			return <FilterCategory 
				key={i}
				i={i}
				open={1 & this.state.openFilters>>i}
				setfilter={this.setfilter}
				handleChange={this.state.handleChange}
				headerTitle={filterName}
				filters={filterElements[filterName]}>
			</FilterCategory>
		})
		console.log(Filters);
		return(
			<Filter>
				<FilterLabel><h4>Filters</h4></FilterLabel>
				{Filters}
			</Filter>
		)
		}
		
	}
