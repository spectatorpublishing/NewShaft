import React, { Component } from 'react';
import styled from 'styled-components'

let Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${props => props.theme.mediumGray};
  display: block;
  width: 80%;
  font-family: inherit;
  font-size: 1rem;
  margin: 0.75rem 10%;
  background: white;
  line-height: 1.5rem;
  padding: 0 5%;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
	border-radius: 0;
    border: none;
    border-bottom: 1px solid ${props => props.theme.lightGray};
    display: block;
    width: 80%;
    font-family: inherit;
    font-size: 1rem;
    font-style: italic;
    margin: 0.75rem 0;
    padding: 0;
    box-sizing: content-box;
  }
`

export default class SearchBar extends Component {

	constructor(props){
		super(props)
		this.searchChange = this.searchChange.bind(this)
	}
	
	searchChange(e){
		this.props.handleChange(e.target.value, "Dorm")
	}
	  
	render(){
		return <Input
                type="text"
                onChange={this.searchChange}
                placeholder="Search for your new home..."
              />;
	}
}