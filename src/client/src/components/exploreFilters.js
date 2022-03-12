import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ExploreCheckbox from '../components/ExploreCheckbox';

let FilterRow = styled.div`
    //background-color: rgb(98, 168, 229);
    padding: 0rem 1.2rem 0.6rem 0rem;
    margin-top: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
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

let Dropdown = styled.div`
    float: left;
    overflow: hidden;
    margin: 0 .4rem;
`;

let Textbox = styled.div`
    font-family: 'Raleway';
    font-size: 1rem;
    color: #73A6E0;
    padding: 0.6rem 0rem 0.6rem 0rem;
    margin-right: .4rem;
`;

let DropButton = styled.button`
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid #73A6E0;  
    height: fit-content;
    width: fit-content;
    color:#73A6E0;
    font-family: 'Raleway';
    margin-left:0.5rem;
    margin-right:0.5rem;
    font-size:1rem;
    text-align: center;
    padding: 0.1rem .8rem;
    background-color: white;
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
    box-shadow: 0.5rem 0rem 1rem 0rem rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 3.5px;
    //border: 1.5px solid rgb(98, 168, 229);
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;  
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
`;

let ClearButton = styled.a`
    cursor: pointer;
    text-decoration: underline;
    margin-left: 1rem;
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
    font-weight: 400;
    font-style: normal;
    font-size: .8rem;
    color: ${props => props.theme.darkGray};
    background: white;

    display: flex;
    flex-direction: row;
    padding: 0 .2rem;
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
    padding: 0;
`;

let Input = styled.input`
    border: 1.6px solid #62A8E5;
    border-radius: 10px;
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
    border: 1.6px solid #62A8E5;
    border-radius: 10px;
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


export default class FilterBar extends React.Component{
    constructor(props) {
	    super(props);

	    this.state = {
            showSchool: false,
            showGroup: false,
            showRoom: false,
            showRes: false,
            isSchoolActive: false,
            isGroupActive: false,
            isRoomActive: false,
            isResActive: false,
            Columbia: false,
            Barnard: false,
            GroupSize: 1,
            Suite: false,
            Single: false,
            Double: false,
            Triple: false,
            Freshmen: false,
            Sophomores: false,
            Juniors: false,
            Seniors: false
	    };

        this.onChange = this.onChange.bind(this);
        this.toggle= this.toggle.bind(this);
        this.clear= this.clear.bind(this);
        this.unCheck= this.unCheck.bind(this);
    }

    onChange(e) {
        let target = e.target.id;

        if((target === "+") && (this.state.GroupSize < 10))  {
            this.setState({
                GroupSize: this.state.GroupSize + 1,
                isGroupActive: true
            }, () => this.props.submit("", "", this.createPayload()))
        } else if((target === "-") && (this.state.GroupSize > 1)) {
            this.setState({
                GroupSize: this.state.GroupSize - 1,
                isGroupActive: true
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(String(target).startsWith("GroupSize")) {
            this.setState({
                GroupSize: 1,
                isGroupActive: false
            }, () => this.props.submit("", "", this.createPayload()))
        } else { 
            this.setState({
                [target]: !this.state[target]
            }, () => this.props.submit("", "", this.createPayload()))
        }    
    }
    
    toggle(e) {
        let action = e.target.id
        if(action === "school") {
            this.setState({
                showSchool: !this.state.showSchool
            })
            if(this.state.showRoom){
                this.setState({
                    showRoom: !this.state.showRoom
                })
                //let background1 = document.getElementById("room").style.backgroundColor;
                if (this.state.isRoomActive) {
                    document.getElementById("room").style.background = "red";
                    document.getElementById("room").style.color = white;
                }
            }
            if(this.state.showGroup){
                this.setState({
                    showGroup: !this.state.showGroup
                })
                //let background2 = document.getElementById("group").style.backgroundColor;
                if (this.state.isGroupActive) {
                    document.getElementById("group").style.background = "red";
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
                //let background3 = document.getElementById("school").style.backgroundColor;
                if (this.state.isSchoolActive) {
                    document.getElementById("school").style.background = "red";
                    document.getElementById("school").style.color = white;
                }
            }
            if(this.state.showGroup){
                this.setState({
                    showGroup: !this.state.showGroup
                })
                //let background4 = document.getElementById("group").style.backgroundColor;
                if (this.state.isGroupActive) {
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
                //let background5 = document.getElementById("school").style.backgroundColor;
                if (this.state.isSchoolActive) {
                    document.getElementById("school").style.background = "red";
                    document.getElementById("school").style.color = white;
                }
            }
            if(this.state.showRoom){
                this.setState({
                    showRoom: !this.state.showRoom
                })
                //let background6 = document.getElementById("room").style.backgroundColor;
                if (this.state.isRoomActive) {
                    document.getElementById("room").style.background = "red";
                    document.getElementById("room").style.color = white;
                }
            }
        }

        if(action === "res") {
            this.setState({
                showRes: !this.state.showRes
            })
            if(this.state.showSchool){
                this.setState({
                    showSchool: !this.state.showSchool
                })
                //let background5 = document.getElementById("school").style.backgroundColor;
                if (this.state.isSchoolActive) {
                    document.getElementById("school").style.background = "red";
                    document.getElementById("school").style.color = white;
                }
            }
            if(this.state.showRoom){
                this.setState({
                    showRoom: !this.state.showRoom
                })
                //let background6 = document.getElementById("room").style.backgroundColor;
                if (this.state.isRoomActive) {
                    document.getElementById("room").style.background = "red";
                    document.getElementById("room").style.color = white;
                }
            }
        }
        this.changeColor(action)
    }

    changeColor(id){
        let background = document.getElementById(id).style.backgroundColor;
        if (background == white) {
            document.getElementById(id).style.background = blue;
            document.getElementById(id).style.color = white;
        } else {
            document.getElementById(id).style.background = white;
            document.getElementById(id).style.color = blue;
        }
    }

    unCheck(e){
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

    createPayload() {
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

    clear() {
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

    render() {
        var selectedFilters = [];
        for(var prop in this.state) {
            if(this.state[prop] && !String(prop).startsWith("show")) {
                console.log(prop)
                if(prop == "GroupSize") {
                    if(this.state[prop] > 1) selectedFilters.push(String(prop) + ": " + String(this.state[prop]))
                } else{
                    selectedFilters.push(String(prop))
                }
            }
        }

        console.log(selectedFilters)
        return(
            <div>
                {/* <SelectedWrapper>
                    {selectedFilters.map(prop => (
                        <Tag><Cancel onClick={this.onChange} id={String(prop)}>X</Cancel>{prop}</Tag>
                    ))}
                </SelectedWrapper> */}
                <FilterRow>
                    <ExploreCheckbox/>
                    <Textbox>
                        Filters:
                    </Textbox>
                    <DropdownBox>

                        <Dropdown>
                            <DropButton onClick={this.toggle} id = "school">School</DropButton>
                            <DropdownContent show={this.state.showSchool}>
                                <Row>
                                    {/* <CheckBox id = "checkColumbia" show={this.state.Columbia} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id = "Columbia"  
                                            type = "checkbox"
                                            onClick = {this.onChange} 
                                            checked = {this.state.Columbia} />
                                        <span>Columbia </span>
                                    </Label>                
                                </Row>
                                <Row>
                                    {/* <CheckBox id = "checkBarnard" show={this.state.Barnard} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id = "Barnard"  
                                            type = "checkbox"
                                            onClick = {this.onChange} 
                                            checked = {this.state.Barnard} />
                                        <span>Barnard</span>
                                    </Label>
                                </Row>
                            </DropdownContent>
                        </Dropdown>

                        <Dropdown>
                            <DropButton onClick={this.toggle} id="group">Group Size</DropButton>
                            <DropdownContent show={this.state.showGroup}>
                                <RowGZ>
                                    <ButtonGZ id = "-" onClick={this.onChange}>-</ButtonGZ>
                                    <Number>{this.state.GroupSize}</Number>
                                    <ButtonGZ class="button" id = "+" onClick={this.onChange}>+</ButtonGZ>
                                </RowGZ> 
                            </DropdownContent>
                        </Dropdown>

                        <Dropdown>
                            <DropButton onClick={this.toggle} id="room">Room Type</DropButton>
                            <DropdownContent show={this.state.showRoom}>
                                <Row>
                                    {/* <CheckBox id = "checkSuite" show={this.state.Suite} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id="Suite" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Suite}
                                            onChange = {this.checkBox} />
                                        <span>Suite Style</span>
                                    </Label>
                                </Row>
                                <Row>
                                    {/* <CheckBox id = "checkSingle" show={this.state.Single} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id="Single" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Single} />
                                        <span>Single</span>
                                    </Label>
                                </Row>
                                <Row>
                                    {/* <CheckBox id = "checkDouble" show={this.state.Double} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id="Double" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                            checked = {this.state.Double} />
                                        <span>Double</span>
                                    </Label>
                                </Row>
                                <Row>
                                    {/* <CheckBox id = "checkTriple" show={this.state.Triple} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id="Triple" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                            checked = {this.state.Triple} /> 
                                        <span>Triple</span>
                                    </Label>
                                </Row>
                            </DropdownContent>
                        </Dropdown>

                        <Dropdown>
                            <DropButton onClick={this.toggle} id="res">Typical Residents</DropButton>
                            <DropdownContent show={this.state.showRes}>
                                <Row>
                                    {/* <CheckBox id = "checkSuite" show={this.state.Suite} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id="Freshmen" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Freshmen}
                                            onChange = {this.checkBox} />
                                        <span>Freshmen</span>
                                    </Label>
                                </Row>
                                <Row>
                                    {/* <CheckBox id = "checkSingle" show={this.state.Single} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id="Sophomores" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Sophomores} />
                                        <span>Sophomores</span>
                                    </Label>
                                </Row>
                                <Row>
                                    {/* <CheckBox id = "checkDouble" show={this.state.Double} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id="Juniors" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                            checked = {this.state.Juniors} />
                                        <span>Juniors</span>
                                    </Label>
                                </Row>
                                <Row>
                                    {/* <CheckBox id = "checkTriple" show={this.state.Triple} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Label>
                                        <Input 
                                            id="Seniors" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                            checked = {this.state.Seniors} /> 
                                        <span>Seniors</span>
                                    </Label>
                                </Row>
                            </DropdownContent>
                        </Dropdown>

                    </DropdownBox>
                    <Textbox><ClearButton show = {this.state} onClick={this.clear}>Clear</ClearButton></Textbox>
                </FilterRow>
            </div>
        );
    }
}