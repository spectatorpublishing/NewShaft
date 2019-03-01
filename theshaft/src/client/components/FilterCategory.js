import React, { Component } from "react";
import FilterButton from "./FilterButton.js"
import styled from 'styled-components';

let DDWrapper = styled.div`
    @media(min-width: 768px){
        position: relative; // So that the filter list will position itself relative to this div
    }
`

let DDHeader = styled.div`
`

let DDHeaderTitle = styled.div`
    text-shadow: ${props => props.shadow ? props.theme.textShadow : "none"};
    cursor: pointer;
    user-select: none;
    color: ${props => props.theme.columbiaBlue};
`

let ListElement = styled.li`
    list-style-type:none;
    display: inline-block;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.lightGray};
    padding: 5px;
    margin: 5px 10px;
    @media (min-width: 650px) {
        display: block;
        border: none;
        left: 10px;
        padding: 2px;
        background: ${props => props.theme.white};
        width: 100%;
    }
`

let FilterList = styled.ul`
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 3rem;
    width: 100%;
    overflow: hidden;
    background: ${props => props.theme.white};
    
    @media (min-width: 650px) {
        position: absolute;
        margin: 5px 0 0 0;
        padding: 0;
        left: auto;
        top: 1rem;
        width: 100%;
        border-radius: 10px;
        border: 1px solid ${props => props.theme.lightGray};
        overflow: hidden;
        z-index: 1;
    }
`


export default class FilterComponent extends React.PureComponent {
    constructor(props) {
	    super(props);

	    // this.state = {
		// 	type: this.props.type,
		// 	handleChange: this.props.handleChange
        // };
        
        console.log(`filters: ${this.props.filters}`)

        this.state = {
            headerTitle: this.props.title,
            filters: this.props.filters
        }
    }

    toggleList(){
        this.props.setfilter(this.props.i, Number(!this.props.open))
        console.log("setfilter " + this.props.i + Number(!this.props.open))
    }
    
    render() {
        console.log(`this.state.filters: ${this.state.filters}`)
        const filters = this.state.filters
        console.log(`the FILTERS: ${filters}`)
        const listOpen = this.props.open
        console.log("open is:"+listOpen)
        
        return(
            <DDWrapper>

                <DDHeader onClick={() => this.toggleList()}>
                    <DDHeaderTitle shadow={this.props.open}>{this.props.headerTitle}</DDHeaderTitle>
                </DDHeader>

                {listOpen && <FilterList>
                    {filters.map((item, index) => (
                        <ListElement key={index++} > 
                        <FilterButton handleClick={this.props.handleChange} name={item}></FilterButton>
                        </ListElement>
                    ))}
                </FilterList>}
            </DDWrapper>
  )
    }
}