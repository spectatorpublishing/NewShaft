import React, { useState } from "react";
import styled from 'styled-components';
import SingleFilter2022 from "./FilterCategory2022";
import { FILTER_NAME_TO_KEY } from "../util/DormFilter.js";

let FilterRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
	flex-direction: row;
	align-items: center;
    margin-top: .5rem;
	padding: 0rem 1.2rem 0.6rem 0rem;
	//background-color: ${props => props.theme.columbiaBlue};
	//background-color: #999CCC;
    @media only screen and (max-width: 769px) {
        justify-content: center;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        margin-left: 5%;
        display: flex;
    }
`;

let SelectedWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Raleway';
    padding-top: 0.6rem;
    padding-left: 0.6rem;
    flex-wrap: wrap;
`;

let RowGZ = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Raleway';
    justify-content: center;
    margin: auto;
`;

let Tag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    padding: .5rem;
    font-weight: 200;
    font-size: 1.2rem;
`;

let Cancel = styled.div`
    cursor: pointer;
    color: white;
    padding-right: .5rem;
    font-weight: 200;
    font-size: 0.8rem;
`;

let DropdownBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

let DropdownWrap = styled.div`
    float: left;
    overflow: hidden;
`;

let Textbox = styled.div`
    font-family: 'Raleway';
    font-size: 1rem;
    color: #73A6E0;
    padding-right: 1rem;
`;

let DropButton = styled.button`
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid #73A6E0;  
    height: fit-content;
    width: fit-content;
    color:"#73A6E0";
    font-family: 'Raleway';
    margin-left:0.5rem;
    margin-right:0.5rem;
    font-size:1rem;
    text-align: center;
    padding: 0.1rem .8rem;
    background-color: rgb(98, 168, 229);
    outline: none;
    margin: .3rem;
    @media only screen and (max-width: 1024px) {
        height: 3rem;
        width: 5rem;
        padding: 0 .3rem;
    }
`;

let DropdownContent = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    min-width: 8rem;
    font-family: 'Raleway';
    box-shadow: 0.5rem 0rem 1rem 0rem rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 8px;
    border: 1.5px solid rgb(98, 168, 229);
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;  
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
`;

let ClearButton = styled.a`
    cursor: pointer;
    text-decoration: underline;
    padding-left: 1rem;
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

let Number = styled.div`
    font-family: 'Raleway';
    text-align: center;
    font-size: 1.5rem;
    vertical-align: middle;
    margin: 0rem 1rem;
`;

let Label = styled.label`
    font-family: 'Raleway';
    /* padding-left: 0.6rem; */
    /* padding-top: 0.2rem; */
    /* padding-right: 0.6rem; */
    color: rgb(98, 168, 229);
    font-size: 1.3rem;
    background: white;
    font-weight: normal;
    display: inline-block;
    padding-right: 10px;
    white-space: nowrap;
    span {
        vertical-align: middle;
    }
`;

let Row = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    justify-content: center;
    padding: 0.3rem 0rem 0.3rem 0rem;
`;

let Input = styled.input`
    border: 2px solid rgb(98, 168, 229);
    border-radius: 6px;
    width: 1.2rem;
    height: 0.9rem;
    cursor: pointer;
    /* margin: 0.2rem; */
    color: white;
    font-size: 1.1rem;
    /* text-align: top; */
    padding: 0.1rem 0rem 0.4rem 0.2rem;
    background-color: transparent;
    vertical-align: middle;
    &:active{
        background-color: rgb(98, 168, 229);
    }
`;

let CheckBox = styled.div`
    display: ${props => props.show ? '' : 'none'};
    border: 2px solid rgb(98, 168, 229);
    border-radius: 6px;
    width: 1.2rem;
    height: 0.9rem;
    cursor: pointer;
    /* margin: 0.2rem; */
    color: white;
    font-size: 1.1rem;
    text-align: top;
    padding: 0.1rem 0rem 0.4rem 0.2rem;
    background-color: rgb(98, 168, 229);
    position: absolute;
`;

const white = 'white';
const blue = 'rgb(98, 168, 229)';

const filterElements = {
	"School": [
		"Columbia",
		"Barnard"
	],
	"Group Size": [
		"2 Person",
		"3 Person",
		"4 Person",
		"5 Person",
		"6 Person",
		"7 Person",
		"8 Person",
		"9 Person",
		"10 Person"
	],
	"Room Type": [
        "Corridor Style",
        "Suite Style",
		"Single",
		"Double",
		"Triple",
	],
	"Typical Residents": [
		"First Year",
		"Sophomore",
		"Junior",
		"Senior"
	],
	// "Amenities": [
	// 	"A/C",
	// 	"Private Kitchen",
	// 	"Gym",
	// 	"Single-Use Bathroom"
	// ]
}


const FilterBar = (props) => {
    const [openFilters, setOpenFilters] = useState([0, 0, 0, 0]);
    const [selectedFilters, setSelectedFilters] = useState([0, 0, 0, 0]);

    const onChange = (e) => {
        let target = e.target.id;

        if(target === "+") {
            this.setState({
                GroupSize: this.state.GroupSize + 1
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(target === "-") {
            this.setState({
                GroupSize: this.state.GroupSize - 1
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(String(target).startsWith("GroupSize")) {
            this.setState({
                GroupSize: 1
            }, () => this.props.submit("", "", this.createPayload()))
        } else { 
            this.setState({
                [target]: !this.state[target]
            }, () => this.props.submit("", "", this.createPayload()))
        }    
    }
    
    const toggle = (e) => {
        let action = e.target.id
        if(action === "school") {
            this.setState({
                showSchool: !this.state.showSchool
            })
            if(this.state.showRoom){
                this.setState({
                    showRoom: !this.state.showRoom
                })
                let background1 = document.getElementById("room").style.backgroundColor;
                if (background1 == white) {
                    document.getElementById("room").style.background = blue;
                    document.getElementById("room").style.color = white;
                }
            }
            if(this.state.showGroup){
                this.setState({
                    showGroup: !this.state.showGroup
                })
                let background2 = document.getElementById("group").style.backgroundColor;
                if (background2 == white) {
                    document.getElementById("group").style.background = blue;
                    document.getElementById("group").style.color = white;
                }
            }
        }
        if(action === "room") {
            this.setState({
                showRoom: !this.state.showRoom
            })
            if(this.state.showSchool){
                this.setState({
                    showSchool: !this.state.showSchool
                })
                let background3 = document.getElementById("school").style.backgroundColor;
                if (background3 == white) {
                    document.getElementById("school").style.background = blue;
                    document.getElementById("school").style.color = white;
                }
            }
            if(this.state.showGroup){
                this.setState({
                    showGroup: !this.state.showGroup
                })
                let background4 = document.getElementById("group").style.backgroundColor;
                if (background4 == white) {
                    document.getElementById("group").style.background = blue;
                    document.getElementById("group").style.color = white;
                }
            }
        }
        if(action === "group") {
            this.setState({
                showGroup: !this.state.showGroup
            })
            if(this.state.showSchool){
                this.setState({
                    showSchool: !this.state.showSchool
                })
                let background5 = document.getElementById("school").style.backgroundColor;
                if (background5 == white) {
                    document.getElementById("school").style.background = blue;
                    document.getElementById("school").style.color = white;
                }
            }
            if(this.state.showRoom){
                this.setState({
                    showRoom: !this.state.showRoom
                })
                let background6 = document.getElementById("room").style.backgroundColor;
                if (background6 == white) {
                    document.getElementById("room").style.background = blue;
                    document.getElementById("room").style.color = white;
                }
            }
        }
        this.changeColor(action)
    }

    const changeColor = (id) => {
        let background = document.getElementById(id).style.backgroundColor;
        if (background == white) {
            document.getElementById(id).style.background = blue;
            document.getElementById(id).style.color = white;
        } else {
            document.getElementById(id).style.background = white;
            document.getElementById(id).style.color = blue;
        }
    }

    const unCheck = (e) => {
        let action = e.target.id
        if(action === "checkColumbia"){
            this.setState({
                Columbia: !this.state.Columbia
            })
        }
        if(action === "checkBarnard"){
            this.setState({
                Barnard: !this.state.Barnard
            })
        }
        if(action === "checkSuite"){
            this.setState({
                Suite: !this.state.Suite
            })
        }
        if(action === "checkSingle"){
            this.setState({
                Single: !this.state.Single
            })
        }
        if(action === "checkDouble"){
            this.setState({
                Double: !this.state.Double
            })
        }
        else if(action === "checkTriple"){
            this.setState({
                Triple: !this.state.Triple
            })
        }
    }

    const createPayload = () => {
        let payload = {
            COLUMBIA: this.state.Columbia,
            BARNARD: this.state.Barnard,
            SINGLE_: this.state.Single,
            DOUBLE_: this.state.Double,
            TRIPLE_: this.state.Triple,
            SUITE_: this.state.Suite,
            TWO_SUITE: this.state.GroupSize == 2,
            THREE_SUITE: this.state.GroupSize == 3,
            FOUR_SUITE: this.state.GroupSize == 4,
            FIVE_SUITE: this.state.GroupSize == 5,
            SIX_SUITE: this.state.GroupSize == 6,
            SEVEN_SUITE: this.state.GroupSize == 7,
            EIGHT_SUITE: this.state.GroupSize == 8,
            NINE_SUITE: this.state.GroupSize == 9,
            DORM: this.props.search
        }
        return payload;
    }

    const clear = () => {
        this.setState({
            showSchool: false,
            showGroup: false,
            showRoom: false,
            Columbia: false,
            Barnard: false,
            GroupSize: 1,
            Suite: false,
            Single: false,
            Double: false,
            Triple: false
        }, () => this.props.submit("", "", this.createPayload()))
        
        let background1 = document.getElementById("school").style.backgroundColor;
        if (background1 == white) {
            document.getElementById("school").style.background = blue;
            document.getElementById("school").style.color = white;
        }
        let background2 = document.getElementById("group").style.backgroundColor;
        if (background2 == white) {
            document.getElementById("group").style.background = blue;
            document.getElementById("group").style.color = white;
        }
        let background3 = document.getElementById("room").style.backgroundColor;
        if (background3 == white) {
            document.getElementById("room").style.background = blue;
            document.getElementById("room").style.color = white;
        }
    }

    const setfilter = (key, val) => {
		// this.setState({openFilters: 0})
		// val is the value we are setting (1 or 0) and
		// key is the index of the filter we are setting. 
		// If key is 2 and value is 1, we set openFilters 
		// to 1<<2, which is 0100. We then know that the 
		// second filter is active. 
		const new_open = [...openFilters]
		new_open[key] = val
        setOpenFilters(new_open)
	}

    const closeAllFilters = () => {
        setOpenFilters([0, 0, 0, 0]);
    }

    const getFilters = () => {
		return Object.keys(filterElements).map((filterName, i) => {
			// Create an array of the filters within the category that are selected
			let categoryFilters = filterElements[filterName];
			let categoryPayload = categoryFilters.filter(filter => 
				!!props.payload[FILTER_NAME_TO_KEY[filter]]
			);
            console.log("filters: ", categoryFilters);
            console.log("payload: ", categoryPayload);

			
			return <SingleFilter2022 
				key={i}
				i={i}
				open={openFilters[i]}
				selected={selectedFilters[i]}
				handleChange={props.handleChange}
				headerTitle={filterName}
				filters={categoryFilters}
				payload={categoryPayload}
			/>
		});
	}

    return(
        <FilterRow>
            <Textbox>Filters:</Textbox>
            {getFilters()}
            <Textbox>
                <ClearButton>Clear</ClearButton>
            </Textbox>
        </FilterRow>
    );
}

export default FilterBar;