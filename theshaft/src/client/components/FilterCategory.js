import React, { Component } from "react";
import FilterButton from "./FilterButton.js"
import styled from 'styled-components';

let ListElement = styled.li`
	// padding-top: 1px;
	// color: rgb(176, 214, 132);
	// font-size: 9pt;
    // // white-space: nowrap;
    list-style-type:none;
    //margin: -10px;
    left: 10px;
    padding: 2px;
    background: white;
    // height: 100px;
`

let FilterList = styled.ul`
    position: absolute;
    margin: -10px;
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

                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{this.props.headerTitle}</div>
                    {listOpen
                        ? <h3>∧</h3>
                        : <h3>∨</h3>
                    }
                </div>

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