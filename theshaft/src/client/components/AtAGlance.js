import React, { Component } from "react";
import styled from 'styled-components';
import { __values } from "tslib";

let Table = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid lightgray;
padding-bottom: 0.5rem;
margin-bottom: 0.5rem;
`

let Span = styled.div`
color: grey; 
`

let Title = styled.h2`
margin-bottom: 1rem;
`

let Content = styled.span`
color: #5a5a5a;
`

export default class AtAGlance extends Component {
constructor(props) {
super(props);

}

render() {
console.log(this.props.atAGlance);
const AtAGlanceMapped = this.props.atAGlance.map((el)=>{
return <Table>
<Span>{el}</Span> <Content>{this.props.atAGlance[el]}</Content>
</Table>
})

return (
<div className="AtAGlance">
<Title> At a glance </Title>
{AtAGlanceMapped}
<br/>
</div>
);
}
}