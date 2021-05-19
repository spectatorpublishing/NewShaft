import React, { Component } from "react";
import styled from 'styled-components';
//import RangeSlider from 'react-dual-rangeslider';
//npm i react-dual-rangeslider
//import RangeSlider from './RangeSlider';

let Input = styled.input`
    border: 2px solid rgb(98, 168, 229);
    border-radius: 6px;
    height: 1rem;
    cursor: pointer;
    color: white;
    background-color: transparent;
    &:active{
        background-color: rgb(98, 168, 229);
    }
`;

const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.black};
    font-size: 1.125rem;
    margin-top: 0.75rem;
    font-weight: 400;
`

const Section = styled.div`
    color: ${props => props.theme.columbiaBlue};
    font-size: 1.25rem;
    margin: 1rem;
    font-weight: 400;
    justify-content: space-between;
`

const Subsection = styled.div`
    color: ${props => props.theme.columbiaBlue};
    font-size: 1.125rem;
    margin-top: 0.5rem;
    font-weight: 400;
`

const Amenities = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Box = styled.div`
    display: flex column;
    border: 1px solid ${props => props.theme.columbiaBlue};
    margin: 1rem;
    padding: 1rem;
    width: 500px;
    border-radius: 6px;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.columbiaBlue};

`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`

let Exit = styled.div`
    color: ${props => props.theme.columbiaBlue};
`

let Search = styled.div`
    text-align: right;
`

let DropButton = styled.button`
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    border: 1.5px solid white;  
    height: fit-content;
    width: fit-content;
    color:white;
    font-family: 'Raleway';
    margin-left:0.5rem;
    margin-right:0.5rem;
    font-size:1.2rem;
    text-align: center;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background-color: rgb(98, 168, 229);
    outline: none;

    margin: .3rem;

    @media only screen and (max-width: 1024px) {
        height: 3rem;
        width: 5rem;
        padding: 0 .3rem;
    }
    
`;

export default class AdvancedFilters extends Component{

    render () {
        return(
            <Box>  

                <Section> <Row> BATHROOMS <Exit> X </Exit> </Row>
                    <Subsection> Bathroom Style 
                        <Column>
                            <Filter> Private 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                            <Filter> Hallway, single use 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                            <Filter> Hallway, multiple use 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                        </Column>
                    </Subsection>
                    <Subsection> Average number of people per bathroom </Subsection>
                </Section>

                <Section> LAUNDRY 
                    <Subsection> Average number of people per machine </Subsection>
                </Section>

                <Section> OTHER AMENITIES 
                    <Amenities> 
                        <Column>
                            <Filter> Kitchen, private 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                            <Filter> Practice room 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                            <Filter> Kitchen, shared 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                            <Filter> Fitness room 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                        </Column>
                        <Column>
                            <Filter> Floor lounge 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                            <Filter> Print station 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                            <Filter> Building lounge 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                            <Filter> No carpet 
                                <Input id="Suite"  onClick = {null}  type="checkbox" checked = {null} onChange = {null} /> </Filter>
                        </Column>
                    </Amenities>
                </Section>
                <Search> 
                    <DropButton>Search</DropButton>
                </Search>

            </Box>
        );
    }
}