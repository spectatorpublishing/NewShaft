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

export default class FilterComponent extends React.PureComponent {

	constructor(props) {
	    super(props);

	    this.state = {
			type: this.props.type,
			handleChange: this.props.handleChange
	    };
	}

	render() {
			const schoolFilters = [
				"columbia",
				"barnard"
			]

			const roomTypeFilters = [
				"single",
				"double",
				"# person suite"
			]

			const yearFilters = [
				"first year",
				"sophomore",
				"junior",
				"senior"
			]

			const amenitiesFilters = [
				"Food",
				"Toilet",
				"interior decoration by RamondLiCSS"
			]
			return(
				<Filter>
					<FilterLabel><h4>Filters</h4></FilterLabel>
					<FilterCategory handleChange={this.state.handleChange} headerTitle="School" filters={schoolFilters}></FilterCategory>
					<FilterCategory handleChange={this.state.handleChange} headerTitle="Year" filters={yearFilters}></FilterCategory>
					<FilterCategory handleChange={this.state.handleChange} headerTitle="Room Type" filters={roomTypeFilters}></FilterCategory>
					<FilterCategory handleChange={this.state.handleChange} headerTitle="Amenities" filters={amenitiesFilters}></FilterCategory>
					{/* <Text> Filter by school: </Text> */}
					{/* <Text> Filter by {this.state.type}: </Text> */}
					{/* <FilterButton handleClick={this.state.handleChange} name="columbia"/>
					<FilterButton handleClick={this.state.handleChange} name="barnard"/> */}
					{/* <FilterButton handleClick={this.state.handleChange} name="single"/>
					<FilterButton handleClick={this.state.handleChange} name="double"/>
					<FilterButton handleClick={this.state.handleChange} name="# person room"/>
					<FilterButton handleClick={this.state.handleChange} name="freshperson"/>
					<FilterButton handleClick={this.state.handleChange} name="sophomore"/>
					<FilterButton handleClick={this.state.handleChange} name="junior"/>
					<FilterButton handleClick={this.state.handleChange} name="senior"/> */}
			    </Filter>
			)
		}
		
	}
