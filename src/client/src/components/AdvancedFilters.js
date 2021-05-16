import React, { Component } from "react";
import styled from 'styled-components';
//import DoubleSlider from '../components/DoubleSlider';

let CheckBox = styled.div`
    margin-right: 1rem;
    border: 1px solid rgb(98, 168, 229);
    border-radius: 6px;
    width: 1rem;
    height: 0.7rem;
    cursor: pointer;
    /* margin: 0.2rem; */
    color: white;
    font-size: 1rem;
    text-align: top;
    padding: 0.1rem 0rem 0.4rem 0.2rem;
    background-color: rgb(98, 168, 229);
`;

const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.black};
    font-size: 1.125rem;
    margin-top: 1rem;
    font-weight: 400;
    width: 50%;
`

const Section = styled.div`
    color: ${props => props.theme.columbiaBlue};
    font-size: 1.25rem;
    margin: 1rem;
    font-weight: 400;

    .amenities{
        display: flex;
        flex-direction: row;
    }
`

const Subsection = styled.div`
    color: ${props => props.theme.columbiaBlue};
    font-size: 1.125rem;
    margin-top: 1rem;
    font-weight: 400;
`

const Amenities = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Box = styled.div`
    display: flex column;
    border: 1px solid ${props => props.theme.columbiaBlue};
    margin: 1rem;
    width: 500px;
    border-radius: 6px;
`

export default class AdvancedFilters extends Component{

    render () {
        return(
            <Box>  
                <Section> BATHROOMS 
                    <Subsection> Bathroom Style 
                        <Filter> Private <CheckBox> ✓ </CheckBox> </Filter>
                        <Filter> Hallway, single use <CheckBox> ✓ </CheckBox> </Filter>
                        <Filter> Hallway, multiple use <CheckBox> ✓ </CheckBox> </Filter>
                    </Subsection>
                    <Subsection> Average number of people per bathroom </Subsection>
                </Section>
                <Section> LAUNDRY 
                    <Subsection> Bathroom Style </Subsection>
                    <Subsection> Average number of people per machine </Subsection>
                </Section>
                <Section> OTHER AMENITIES 
                    <Amenities> 
                            <Filter> Kitchen, private <CheckBox> ✓ </CheckBox> </Filter>
                            <Filter> Practice room <CheckBox> ✓ </CheckBox> </Filter>
                            <Filter> Kitchen, shared <CheckBox> ✓ </CheckBox> </Filter>
                            <Filter> Fitness room <CheckBox> ✓ </CheckBox> </Filter>
                            <Filter> Floor lounge <CheckBox> ✓ </CheckBox> </Filter>
                            <Filter> Print station <CheckBox> ✓ </CheckBox> </Filter>
                            <Filter> Building lounge <CheckBox> ✓ </CheckBox> </Filter>
                            <Filter> No carpet <CheckBox> ✓ </CheckBox> </Filter>
                    </Amenities>
                </Section>
            </Box>
        );
    }
}