import React, { Component } from 'react';
import styled from 'styled-components'

let Input = styled.input`
  border-radius: 10px;
  border: 1px solid ${props => props.theme.mediumGray};
  display: block;
  /* width: 80%; */
  font-family: inherit;
  font-size: 1rem;
  /* margin: 0.75rem 10%; */
  /* // margin-bottom: .25rm; */
  background: white;
  line-height: 1.5rem;
  padding: 0 5%;
  box-sizing: border-box;
  width:100%;
  @media only screen and (min-width: 768px) {
	  border-radius: 0;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.mediumGray};
    //background-color: ${props => props.theme.columbiaBlue};
    display: block;
    /* width: 60%; */
    font-family: inherit;
    font-size: 1rem;
    /* margin: 0.75rem 0 0 1.5%; */
    padding: 0.75% 1% 0.75%;
    box-sizing: content-box;
  }
`

let BG = styled.div`
  background-color: ${props => props.theme.columbiaBlue};
  width:100%;
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
          			placeholder="Search for your new home..."
        		/>
    			</BG>
    		);
	}
}
