import React, { Component } from "react";
import styled from 'styled-components';
import { __values } from "tslib";

let Wrapper = styled.div`
width: 90%;
`

let Table = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid lightgray;
padding-bottom: 0.5rem;
margin-bottom: 0.5rem;
`

let Category = styled.div`
color: grey;
`

let Title = styled.h2`
margin-bottom: 1rem;
`

let Content = styled.span`
margin-left: 1rem;
color: #3C3B3B;
font-color: #3C3B3B;
text-align: right;
font-style: bold;
`

export default class AtAGlance extends Component {
constructor(props) {
super(props);

}

render() {
let glanceMap = [
    ["Location", this.props.location],
    ["Room types", this.props.roomtype],
    ["Class makeup", this.props.classmakeup],
    ["# of floors", this.props.numfloors],
    ["# of singles", this.props.singles],
    ["# of doubles", this.props.doubles],
    ["Cut-off lottery #", this.props.cutoff]
]

const AtAGlanceMapped = glanceMap.map((el)=>{
	console.log(el[1]);
	if(el[1] && el[1] != "" && el[1] != "0" && el[1] != " "){
	return (
	<Table>
	    <Category>{el[0]}           </Category> 
	    <Content>{el[1]}</Content>
	</Table>
	)
	}
	else return (<div/>);
})

return (
<Wrapper>
<Title> At a glance </Title>
{AtAGlanceMapped}
<br/>
</Wrapper>
);
}
}