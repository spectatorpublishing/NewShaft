import React, { Component } from "react";
import styled from 'styled-components';
import RangeSlider from './RangeSlider';

let Number = styled.div`
    font-family: 'Raleway';
    text-align: center;
    font-size: 1.5rem;
    vertical-align: middle;
    margin: 0rem 1rem;
`;

let RowGZ = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Raleway';
    justify-content: center;
    margin: 0rem 0 0 1rem;
`;

const ButtonGZ = styled.div`
    cursor: pointer;
    font-family: 'Raleway';
    font-size:1.2rem;
    color: black;
    justify-content: center;
    border-radius: 100%;
    border: 1px solid rgb(98, 168, 229);
    text-align: center;
    padding: 0rem 0.45rem 0rem 0.45rem;
    vertical-align: center;
    color: rgb(98, 168, 229);
    &:hover {
        background: rgb(98, 168, 229);
        color: white;
    }
`;

let Input = styled.input`
    margin-left: 1rem;
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
    margin: 0.5rem;
    font-weight: 400;
`

const Section = styled.div`
    max-width: ${props => props.large ? "50%" : "25%" };
    color: ${props => props.theme.white};
    font-size: 1.25rem;
    margin: 1rem;
    font-weight: 400;
    justify-content: space-between;
`

const Subsection = styled.div`
    color: ${props => props.theme.black};
    font-size: 1.125rem;
    margin-top: 1rem;
    font-weight: 400;
    border: 1px solid ${props => props.theme.white};
    background-color: ${props => props.theme.white};
    border-radius: 6px;
    padding: 0.5rem;
`

const Amenities = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Box = styled.div`
    display: flex;
    padding-bottom: 1rem;
    /*
    border: 1px solid ${props => props.theme.white};
    margin: 1rem;
    padding: 1rem;
    width: 500px;
    border-radius: 6px;
    */
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.white};

`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

let Exit = styled.div`
    color: ${props => props.theme.white};
    cursor: pointer;
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

const Slider = styled.div`
    margin: 0.5rem 0 0 0.15rem;
`

export default class AdvancedFilters extends Component{
    
    constructor(props) {
	    super(props);

	    this.state = {
            Private: false,
            HallwaySingle: false,
            HallwayMultiple: false,
            KitchenPrivate: false,
            KitchenShared: false,
            Fitness: false,
            FloorLounge: false,
            Print: false,
            BuildingLounge: false,
            NoCarpet: false,
            PerLaundry: 1
	    };

    }

    render () {
        return(
            <Box>  
                <Section> BATHROOMS 
                    <Subsection> 
                            <Filter> Private 
                                <Input id="Private"   
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>
                            <Filter> Single use 
                                <Input id="HallwaySingle"  
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>
                            <Filter> Multiple use 
                                <Input id="HallwayMultiple"  
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>
                    </Subsection>
                </Section>

                <Section large> AMENITIES 
                <Subsection>
                    <Amenities> 
                        <Column>
                            <Filter> Kitchen, private 
                                <Input id="KitchenPrivate"  
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>

                            <Filter> Kitchen, shared 
                                <Input id="KitchenShared"  
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>
                            <Filter> Floor lounge 
                                <Input id="FloorLounge"   
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>
                            <Filter> Building lounge 
                                <Input id="BuildingLounge"  
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>

                        </Column>
                        <Column>
                            <Filter> Practice room 
                                <Input id="Practice"  
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>
                            <Filter> Fitness room 
                                <Input id="Fitness"  
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>

                            <Filter> Print station 
                                <Input id="Print"  
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>

                            <Filter> No carpet 
                                <Input id="NoCarpet"   
                                       onClick = {null}  
                                       type="checkbox" 
                                       checked = {null} 
                                       onChange = {null} /> 
                                </Filter>
                        </Column>
                    </Amenities>
                </Subsection>
                </Section>

                <Section> LAUNDRY 
                    <Subsection> 
                            <Filter>Average number of people per machine </Filter> 
                                <RowGZ>
                                    <ButtonGZ id = "-" onClick={this.onChange}>-</ButtonGZ>
                                    <Number>{this.state.PerLaundry}</Number>
                                    <ButtonGZ class="button" id = "+" onClick={this.onChange}>+</ButtonGZ>
                                </RowGZ> 
                    </Subsection>
                </Section>

            </Box>
        );
    }
}