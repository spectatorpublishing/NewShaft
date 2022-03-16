import React, { Component } from 'react';
import styled from 'styled-components'

let Input = styled.input`
  border-radius: 10px;
  border: 1px solid #C4C4C4;
  display: block;
  width: 80%;
  font-family: inherit;
  font-size: 1rem;
  //margin: 0.75rem 10%;
  line-height: 1.5rem;
  padding: 0.75rem 15%;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    border-radius: 10px;
    border: 1px solid #C4C4C4;
    display: block;
    width: 70%;
    font-family: inherit;
    font-size: 1rem;
    //margin: 0.75rem 0 0 1.5%;
    padding: 0.5rem;
    padding-left: 1rem;
    box-sizing: content-box;

    &::placeholder{
      color: #878787;
}
  }
`

let BG = styled.div`
  //background-color: ${props => props.theme.columbiaBlue};
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
		return (
      			<BG>
        		<Input
          			type="text"
          			onChange={this.searchChange}
          			placeholder="Search for your new home"
        		/>
    			</BG>
    		);
	}
}
