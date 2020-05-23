import React from "react";
import styled from 'styled-components';



let FilterContainer = styled.div`
    width:100%;
`;

let FilterRow = styled.div`
    width:100%;
    background-color: rgb(98, 168, 229);
    /* padding: 0rem 1.2rem 0.6rem 0rem; */
    /* margin: 0rem 0 0 1.5%; */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    @media only screen and (max-width: 770px) {
        justify-content: flex-start;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        /* margin-left: 5%; */
        display: flex;
        flex-direction: row;
    }
`;

let SelectedWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Raleway';
    width:100%;
    flex-wrap: wrap;
    /* padding-top: 0.6rem;
    padding-left: 0.6rem; */
`;

let RowGZ = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Raleway';
    justify-content: center;
`;

let Tag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    /* margin-right: 1rem; */
    margin: 0 1rem .7rem 0;
    /* padding: .5rem; */
    font-weight: 200;
    font-size: 1.2rem;
    @media only screen and (max-width: 770px) {
        margin: 0 1rem .5rem 0;
        font-size: 1rem;
    }
`;

let Cancel = styled.div`
    cursor: pointer;
    color: white;
    /* padding-right: .5rem; */
    /* I'm replacing this with a space character instead */
    font-weight: 200;
    font-size: 0.8rem;
`;

let Dropdown = styled.div`
    float: left;
    overflow: hidden;
    width:100%;
    height:100%;
    /* flex:1;
    display: flex;
    align-items:center; */
    
    /* display: flex;
    flex-direction: column;
    align-items:center; */
`;

let DropdownWrapper = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:center;
    
    /* display: flex;
    flex-direction: column;
    align-items:center; */
`;
let FilterTextWrapper = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-start;
    
    /* display: flex;
    flex-direction: column;
    align-items:center; */
`;
let ClearWrapper = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
    /* justify-content:center; */
    
    /* display: flex;
    flex-direction: column;
    align-items:center; */
`;

// let FilterTextWrapper = styled.div`
//     flex:1;
//     display: flex;
//     align-items:center;
//     justify-content:center;
    
//     /* display: flex;
//     flex-direction: column;
//     align-items:center; */
// `;
let DropTableColumn = styled.td`
    flex: 1.5;
    
    display: flex;
    flex-direction: column;
    margin: 0 .4rem;
    @media only screen and (max-width: 770px) {
        margin: 0 .2rem;
    }
    border: none;
    :first-child{
        flex: 1;
        /* margin: 0 0 0 -2px; */
        margin: 0 .2rem 0 0;
        padding:0;
    }
    :last-child{
        flex: 1;
        /* margin: 0 0 0 -2px; */
        margin: 0;
        padding:0;
    }

`;
let DropTable = styled.table`
    width: 100%;
    padding:0;
    margin:0 0;
    border: 0;
    /* Necessary to get rid of defailt 2px table offsets!: */
    -webkit-border-vertical-spacing: 0;
    -webkit-border-horizontal-spacing: 0;
    /* table-layout: fixed; */
`;
let DropTableRow = styled.tr`
    display: flex;
    border: none;
    min-height: 2.5rem;
    /* margin: 1rem 0 0 0; */
    /* margin: 0 0 1rem 0; */
    @media only screen and (max-width: 770px) {
        /* margin: .5rem 0 0 0; */
        /* margin: 0 0 .5rem 0; */
    }
    /* height: 2.5rem; */

`;

let Textbox = styled.div`
    font-family: 'Raleway';
    font-size: 1.5rem;
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
    }
    
    color: white;
    /* padding: 0.6rem 0rem 0.6rem 0.3rem;
    margin-right: 1.2rem; */
`;

let DropButton = styled.button`
    /* flex:1; */
    width:100%;
    height:100%;
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    border: 1.5px solid white;  
    /* width: 100%; */
    /* height: fit-content; */
    /* width: fit-content; */
    color:white;
    font-family: 'Raleway';
    /* margin-left:0.5rem;
    margin-right:0.5rem; */
    /* padding: 1rem 3rem; */
    font-size:1.2rem;
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
        /* padding: 0; */
    }
    text-align: center;
    /* padding-top: 0.3rem;
    padding-bottom: 0.3rem; */
    /* padding-right: 1rem;
    padding-left: 1rem; */
    padding:0;
    background-color: rgb(98, 168, 229);
    outline: none;
`;

let DropdownContent = styled.div`
    display: ${props => props.show ? '' : 'none'};
    position: absolute;
    flex-direction: row;
    background-color: white;
    min-width: 8rem;
    font-family: 'Raleway';
    box-shadow: 0.5rem 0rem 1rem 0rem rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 8px;
    border: 1.5px solid rgb(98, 168, 229);
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;  
    /* margin-left: 0.5rem; */
    margin-right: 0.5rem;
    margin-top: 0.3rem;
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
        min-width: 7rem;
    }
`;

let ClearButton = styled.a`
    cursor: pointer;
    font-family: 'Raleway';
    /* margin-left:0.5rem;
    margin-right:0.5rem; */
    font-size:1.2rem;
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
    }
    color: white;
    text-decoration: underline;
`;

const ButtonGZ = styled.div`
    cursor: pointer;
    font-family: 'Raleway';
    font-size:1.2rem;
    color: black;
    justify-contents: center;
    border-radius: 100%;
    border: 1px solid rgb(98, 168, 229);
    align-text: center;
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
    align-text: center;
    font-size: 1.5rem;
    vertical-align: middle;
    margin: auto;
`;

let Label = styled.div`
    font-family: 'Raleway';
    padding-left: 0.6rem;
    padding-top: 0.2rem;
    /* padding-right: 0.6rem; */
    color: rgb(98, 168, 229);
    font-size: 1.3rem;
    background: white;
    font-weight: normal;
    display: flex;
    align-items:center;
    text-align: initial;
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
    }
`;

let Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    /* vertical-align: middle; */
    /* justify-content: center; */
    padding: 0.3rem 0rem 0.3rem 0rem;
`;

let Input = styled.div`
    border: 2px solid rgb(98, 168, 229);
    border-radius: 6px;
    width: 1.2rem;
    height: 0.9rem;
    cursor: pointer;
    /* margin: 0.2rem; */
    color: white;
    font-size: 1.1rem;
    /* align-text: top; */
    padding: 0.1rem 0rem 0.4rem 0.2rem;
    background-color: transparent
    vertical-align: center;
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
    /* align-text: top; */
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
            Columbia: false,
            Barnard: false,
            GroupSize: 0,
            Suite: false,
            Single: false,
            Double: false,
            Triple: false
	    };

        this.onChange = this.onChange.bind(this);
        this.toggle= this.toggle.bind(this);
        this.clear= this.clear.bind(this);
        this.unCheck= this.unCheck.bind(this);
    }

    onChange(e) {
        let target = e.target.id;

        if(target === "+") {
            this.setState({
                GroupSize:  ((this.state.GroupSize + 1) <= this.props.MAX_GROUP ) ? this.state.GroupSize + 1 : this.props.MAX_GROUP
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(target === "-") {
            // switch (decVal):
            // case

            this.setState({
                GroupSize: ((this.state.GroupSize - 1) >= 0 ) ? this.state.GroupSize - 1 : 0
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(String(target).startsWith("GroupSize")) {
            this.setState({
                GroupSize: 0
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

    unCheck(value, e){
        let action = value;
        console.log("Val= ")
        console.log("Val= "+ action)
        console.log(action)
        this.setState({
            [action]: !this.state[action]
        }, () => this.props.submit("", "", this.createPayload()))

        // if(action === "checkColumbia"){
        //     this.setState({
        //         Columbia: !this.state.Columbia
        //     })
        // }
        // if(action === "checkBarnard"){
        //     this.setState({
        //         Barnard: !this.state.Barnard
        //     })
        // }
        // if(action === "checkSuite"){
        //     this.setState({
        //         Suite: !this.state.Suite
        //     })
        // }
        // if(action === "checkSingle"){
        //     this.setState({
        //         Single: !this.state.Single
        //     })
        // }
        // if(action === "checkDouble"){
        //     this.setState({
        //         Double: !this.state.Double
        //     })
        // }
        // else if(action === "checkTriple"){
        //     this.setState({
        //         Triple: !this.state.Triple
        //     })
        // }
    }

    createPayload() {
        let payload = {
            COLUMBIA: this.state.Columbia,
            BARNARD: this.state.Barnard,
            SINGLE_: this.state.Single || this.state.GroupSize == 1,
            DOUBLE_: this.state.Double || this.state.GroupSize == 2,
            TRIPLE_: this.state.Triple || this.state.GroupSize == 3,
            SUITE_: this.state.Suite,
            ONE_SUITE: this.state.GroupSize == 1,
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
            GroupSize: 0,
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
                    if(this.state[prop] > 0) selectedFilters.push(String(prop) + ": " + String(this.state[prop]))
                } else{
                    selectedFilters.push(String(prop))
                }
            }
        }

        console.log(selectedFilters)
        return(
            <FilterContainer id= "filterContainer">
                <SelectedWrapper>
                    {selectedFilters.map(prop => (
                        <Tag><Cancel onClick={this.onChange} id={String(prop)}>X&nbsp;</Cancel>{prop}</Tag>
                    ))}
                </SelectedWrapper>
                
                <FilterRow>
                    {/* <DropTable>
                        <DropTableRow>
                            <DropTableColumn>
                                <DropdownWrapper>
                                    <Textbox>
                                        Filters:
                                    </Textbox>
                                </DropdownWrapper>
                            </DropTableColumn>
                        </DropTableRow>
                    </DropTable> */}
                    <DropTable>
                        <DropTableRow>
                            <DropTableColumn>
                                <FilterTextWrapper>
                                    <Textbox>
                                        Filters:
                                    </Textbox>
                                </FilterTextWrapper>
                            </DropTableColumn>
                            <DropTableColumn>
                                <DropdownWrapper>
                                    <Dropdown id= "schoolD">
                                        <DropButton onClick={this.toggle} id = "school">School</DropButton>
                                        <DropdownContent show={this.state.showSchool}>
                                        <Row>
                                            <CheckBox id = "checkColumbia" val="Columbia" show={this.state.Columbia} onClick ={(e)=>this.unCheck("Columbia",e)}>✓</CheckBox>
                                            <Input 
                                                id = "Columbia"  
                                                type = "checkbox"
                                                onClick = {this.onChange} 
                                                checked = {this.state.Columbia} >✓</Input> 
                                            <Label>Columbia</Label>                
                                        </Row>
                                        <Row>
                                            <CheckBox id = "checkBarnard" val="Barnard" show={this.state.Barnard} onClick ={(e)=>this.unCheck("Barnard",e)}>✓</CheckBox>
                                            <Input 
                                                id = "Barnard"  
                                                type = "checkbox"
                                                onClick = {this.onChange} 
                                                checked = {this.state.Barnard}>✓</Input> 
                                            <Label>Barnard</Label>
                                        </Row>
                                    </DropdownContent>
                                    </Dropdown>
                                </DropdownWrapper>
                            </DropTableColumn>
                            <DropTableColumn>
                                <DropdownWrapper>
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
                                </DropdownWrapper>
                            </DropTableColumn>
                            <DropTableColumn>
                                <DropdownWrapper>
                                    <Dropdown>
                                <DropButton onClick={this.toggle} id="room">Room Type</DropButton>
                                <DropdownContent show={this.state.showRoom}>
                                    <Row>
                                        <CheckBox id = "checkSuite" show={this.state.Suite} val="Suite" onClick ={(e)=>this.unCheck("Suite",e)}>✓</CheckBox>
                                        <Input 
                                            id="Suite" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Suite}
                                            onChange = {this.checkBox} >✓</Input>
                                        <Label>Suite Style</Label>
                                    </Row>
                                    <Row>
                                        <CheckBox id = "checkSingle" show={this.state.Single} val="Single" onClick ={(e)=>this.unCheck("Single",e)}>✓</CheckBox>
                                        <Input 
                                            id="Single" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Single}>✓</Input> 
                                        <Label>Single</Label>
                                    </Row>
                                    <Row>
                                        <CheckBox id = "checkDouble" show={this.state.Double} val="Double" onClick ={(e)=>this.unCheck("Double",e)}>✓</CheckBox>
                                        <Input 
                                            id="Double" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                        checked = {this.state.Double}>✓</Input> 
                                        <Label>Double</Label>
                                    </Row>
                                    <Row>
                                        <CheckBox id = "checkTriple" show={this.state.Triple} val="Triple" onClick ={(e)=>this.unCheck("Triple",e)}>✓</CheckBox>
                                        <Input 
                                            id="Triple" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                            checked = {this.state.Triple}>✓</Input> 
                                        <Label>Triple</Label>
                                    </Row>
                                </DropdownContent>
                            </Dropdown>
                                </DropdownWrapper>
                            </DropTableColumn>
                            <DropTableColumn>
                                <ClearWrapper>
                                    <ClearButton show = {this.state} onClick={this.clear}>Clear</ClearButton>
                                </ClearWrapper>
                            </DropTableColumn>
                        </DropTableRow>
                    </DropTable>
                </FilterRow>
            </FilterContainer>
        );
    }
}