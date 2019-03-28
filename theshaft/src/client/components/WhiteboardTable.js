import React, { Component } from "react";
import styled from 'styled-components';

let Table = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${props => props.theme.lightGray};
	padding-bottom: 0.5rem;
	margin-bottom: 0.5rem;
    margin-right: 1.5rem;
    overflow-y: scroll;
`
let Wrapper = styled.div`
`

let TitleText = styled.div`
    display: flex;
`
let LeftTitle = styled.h4`
    margin-right: 4rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.columbiaBlue}
`
let RightTitle = styled.h4`
    margin-bottom: 1rem;
    color: ${props => props.theme.columbiaBlue}
`
let Content = styled.span`
	margin-left: 1rem;
	text-align: right;
`


export default class WhiteboardTable extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
			<div>
                <TitleText>
                    <LeftTitle>Room Number</LeftTitle>
                    <RightTitle>Lottery Number</RightTitle>
                </TitleText>
                <Table>

                </Table>
				
			</div>
        );
    }
}