import React, { Component } from "react";
import FilterButton from "./FilterButton.js";
import FilterCategory from "./FilterCategory.js";
import styled from 'styled-components';

let Filter = styled.div`
	display: flex;
	flex-direction: row;
	
	@media (max-width: 650px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`

let Text = styled.li`
	padding-top: 2px;
	color: rgb(176, 214, 132);
	font-size: 15pt;
	white-space: nowrap;
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
					<FilterCategory handleChange={this.state.handleChange} headerTitle="Filter by school" filters={schoolFilters}></FilterCategory>
					<FilterCategory handleChange={this.state.handleChange} headerTitle="Filter by room type" filters={roomTypeFilters}></FilterCategory>
					<FilterCategory handleChange={this.state.handleChange} headerTitle="Filter by year" filters={yearFilters}></FilterCategory>
					<FilterCategory handleChange={this.state.handleChange} headerTitle="Filter by amenities" filters={amenitiesFilters}></FilterCategory>
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
