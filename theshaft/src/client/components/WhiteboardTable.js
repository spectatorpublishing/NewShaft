import React, { Component } from "react";
import styled from 'styled-components';
import ReactToolTip from 'react-tooltip';
import "../css/WhiteboardTable.css"; // Because react-tooltip

let Table = styled.div`
    display: flex;
    flex: 2 50%;
	justify-content: flex-start;
	border-bottom: 1px solid ${props => props.theme.lightGray};
	padding-bottom: 0.5rem;
	margin-bottom: 0.5rem;
    margin-right: 1.5rem;
`
let Map = styled.div`
    overflow-y: scroll;
    height: 65vh;
    font-weight: bold;
`

let Wrapper = styled.div`
    width: 95%;
    margin: 0 2.5%;
    @media only screen and (min-width: 992px){
        width: 100%;
        margin: 0 0;
    }
`

let TitleText = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-flow: row-wrap;
    border-bottom: solid;
    border-width:  3px;
    border-color:${props => props.theme.lightGray};
    margin-top: 1rem;
`
let LeftTitle = styled.h4`
    margin-bottom: .5rem;
    width:50%;
    color: ${props => props.theme.columbiaBlue}
`
let RightTitle = styled.h4`
    margin-bottom: 1rem;
    text-align: left;
    color: ${props => props.theme.columbiaBlue};
`

let Category = styled.div`
    width: 50%;
`
let Content = styled.span`
    margin-left: 1rem;
`

let Question = styled.div`
    position: relative;
    text-align: center;
    background-color: #D3D3D3;
    border-radius: 100%;
    width: 1.15rem;
    height: 1.15rem;
    color: white;
    font-size: 0.85rem;
    margin-left: 0.4rem;
`

let TooltipText = styled.h6`
    color: ${props => props.theme.white};
`

export default class WhiteboardTable extends Component {
    constructor(props) {
        super(props); 
    }

    render() {

        let i = 0;
        let roomMap = []; 
        if(this.props.roomAvailability){
            for(i=0; i < this.props.roomAvailability.length; i++){
                roomMap.push([this.props.roomAvailability[i]["ROOM"], this.props.roomAvailability[i]["NEW_PRIORITY"]+"/"+this.props.roomAvailability[i]["NEW_NUM"]]);
            }
        }           

        const AvailabilityMapped = roomMap.map((el, i)=>{
			if(el[1] && el[1] != "" && el[1] != "0" && el[1] != " "){
				return (
				<Table key={i}>
					<Category>{el[0]}</Category> 
                <Content>{el[1] == '/' ? <span style={{color: "green"}}>AVAILABLE</span> : <span style={{color: "red"}}>{el[1].replace('/',' | ')}</span> }</Content>
				</Table>
				)
			}
			else return (<div key={i}/>);
        })

        return (
			<Wrapper>
                <TitleText>
                        <LeftTitle>Room Number</LeftTitle>
                        <RightTitle>Lottery Number</RightTitle>
                    <Question data-tip>?</Question>
                    <ReactToolTip className="whiteboard-tooltip"><TooltipText>Live update of room/suite availability and the lottery number if claimed.</TooltipText></ReactToolTip>
                </TitleText>
                <Map>
                    {AvailabilityMapped}
                </Map>
				
			</Wrapper>
        );
    }
}