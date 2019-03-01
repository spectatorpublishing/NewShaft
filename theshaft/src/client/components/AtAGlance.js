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

let Category = styled.div`
color: grey; 
`

let Title = styled.h2`
margin-bottom: 1rem;
`

let Content = styled.span`
marign-left: 1rem;
color: #3C3B3B;
font-color: #3C3B3B;
`

export default class AtAGlance extends Component {
constructor(props) {
super(props);

}

render() {
let glanceMap = [
    ["Location", this.props.address],
    ["# of singles", this.props.singles],
    ["# of doubles", this.props.doubls]
]

const AtAGlanceMapped = glanceMap.map((el)=>{
return (
<Table>
    <Category>{el[0]}           </Category> 
    <Content>{el[1]}</Content>
</Table>
)
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