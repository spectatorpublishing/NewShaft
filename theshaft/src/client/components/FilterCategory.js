import React, { Component } from "react";
import FilterButton from "./FilterButton.js"
import styled from 'styled-components';

let DDHeader = styled.div`
`

let DDHeaderTitle = styled.div`
    text-shadow: ${props => props.shadow ? "1px 1px 1px rgba(0,0,0,0.4)" : "none"};
    cursor: pointer;
    user-select: none;
    color: ${props => props.theme.columbiaBlue};
`

let ListElement = styled.li`
    list-style-type:none;
    display: inline-block;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 5px;
    margin: 5px 10px;
    @media (min-width: 650px) {
        display: block;
        border: none;
        left: 10px;
        padding: 2px;
        background: white;
        width: 100%;
    }
`

let FilterList = styled.ul`
    position: absolute;
    margin: 10px;
    padding: 5px 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background: white;
    
    @media (min-width: 650px) {
        position: absolute;
        margin: 5px 0 0 0;
        padding: 0;
        left: auto;
        width: 15%;
        border-radius: 10px;
        border: 1px solid gray;
        overflow: hidden;
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
            listOpen: false,
            headerTitle: this.props.title,
            handleChange: this.props.handleChange,
            filters: this.props.filters
        }
    }

    handleClickOutside(){
        this.setState({
          listOpen: false
        })
    }
    toggleList(){
    this.setState(prevState => ({
        listOpen: !prevState.listOpen
    }))
    }
    
    render() {
        console.log(`this.state.filters: ${this.state.filters}`)
        const filters = this.state.filters
        console.log(`the FILTERS: ${filters}`)
        const listOpen = this.state.listOpen
        
        return(
            <div className="dd-wrapper">

                <DDHeader onClick={() => this.toggleList()}>
                    <DDHeaderTitle shadow={this.state.listOpen}>{this.props.headerTitle}</DDHeaderTitle>
                </DDHeader>

                {listOpen && <FilterList>
                    {filters.map((item, index) => (
                        <ListElement key={index++} > 
                        <FilterButton handleClick={this.state.handleChange} name={item}></FilterButton>
                        </ListElement>
                    ))}
                </FilterList>}
            </div>
  )
    }
}


{/* <li><FilterButton handleClick={this.state.handleChange} name={item}></FilterButton></li> */}

{/* <FontAwesome name="angle-up" size="2x"/> */}

{/* <FontAwesome name="angle-down" size="2x"/> */}