import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const checkBoxStyles = theme => ({
    root: {
        height: "1rem",
        boxSizing: "border-box",
        color: blue,
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&$checked': {
            color: blue,
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    },
    checked: {
    },
   })

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const checkBoxStylesMobile = theme => ({
    root: {
        height: "1rem",
        boxSizing: "border-box",
        color: white,
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&$checked': {
            color: white,
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    },
    checked: {
    },
   })

const CustomCheckboxMobile = withStyles(checkBoxStylesMobile)(Checkbox);
  
let FilterRow = styled.div`
    background-color: rgb(98, 168, 229);
    padding: 0rem 1.2rem 0.6rem 0rem;
    margin: 0rem 0 0 1.5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media only screen and (max-width: 769px) {
        justify-content: space-between;
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
    width: ${props => props.full ? "100%" : "" };
    @media only screen and (max-width: 770px) {
        background-color: white;
        padding: 0.5rem;
        border-radius: 10px;
    }
    height: 1.5rem;
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
`;

let Textbox = styled.div`
    font-family: 'Raleway';
    font-size: 1.5rem;
    color: white;
    padding: 0.6rem 0rem 0.6rem 0.3rem;
    margin-right: 1.2rem;
`;

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
    box-shadow: 0rem 0rem 1rem  rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 8px;
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;  
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
`;

let ClearButton = styled.a`
    cursor: pointer;
    font-family: 'Raleway';
    margin-left:0.5rem;
    margin-right:0.5rem;
    font-size:1.2rem;
    color: white;
    text-decoration: underline;
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
    color: black;
    text-align: center;
    font-size: 1.5rem;
    vertical-align: middle;
    margin: 0rem 1rem;
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
        margin: 0rem 1rem;
    }
`;

let Row = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    justify-content: center;
    padding: 0.3rem 0rem 0.3rem 0rem;
    @media only screen and (max-width: 770px) {
        color: white;
        justify-content: space-between;
        padding-right: 2rem;
        align-content: center;
    }
    flex-wrap: ${props => props.wrap ? "wrap" : "nowrap" };
    align-items: ${props => props.center ? 'center' : ''};
`;

/* ADVANCED FILTERS */

let Advanced = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    width: 100%;
    justify-content: center;
    @media only screen and (max-width: 770px) {
        padding: 0 1rem 0.5rem 1rem;
    }
`

const Box = styled.div`
    display: flex;
    width: 100%;
\    padding-bottom: 1rem;
    @media only screen and (max-width: 770px) {
        padding-bottom: 0rem;
        padding-top: 1rem;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1363px) {
        width: ${props => props.single ? '100%' : ''};
    }
`

const Filter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: black;
    font-size: 1.125rem;
    margin: 0.5rem 0.5rem 0.5rem 0.25rem;
    font-weight: 400;
    max-width: ${props => props.half ? "50%" : "100%" };
    @media only screen and (max-width: 770px) {
        color: white;
        font-size: 1rem;
        margin: 0.5rem 0.5rem 0.5rem 0rem;
    }
`

const Section = styled.div`
    max-width: ${props => props.large ? "50%" : "25%" };
    color: white;
    font-size: 1.25rem;
    margin: 1rem 0rem 1rem 1rem;
    font-weight: 400;
    justify-content: space-between;
    @media only screen and (max-width: 1363px) {
        max-width: 30%;
    }
`
const MobileSection = styled.div`
    font-size: 1.25rem;
    display: flex column;
    margin: ${props => props.topmargin ? '0.9rem 0.5rem 0 0.5rem' : '0 0.5rem'};
    color: white;
`

const Subsection = styled.div`
    color: black;
    font-size: 1.125rem;
    margin-top: 1rem;
    font-weight: 400;
    border: 1px solid white;
    background-color: white;
    border-radius: 6px;
    padding: 0.5rem;
    @media only screen and (max-width: 770px) {
        color: white;
    }
`

const Amenities = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const white = 'white';
const blue = 'rgb(98, 168, 229)';

export default class FilterBar extends React.Component{
    constructor(props) {
	    super(props);

	    this.state = {
            showSchool: false,
            showGroup: false,
            showRoom: false,
            showAdvanced: false,
            Columbia: false,
            Barnard: false,
            GroupSize: 1,
            Suite: false,
            Single: false,
            Double: false,
            Triple: false,

            /* ADVANCED */
            Private: false,
            HallwaySingle: false,
            HallwayMultiple: false,
            KitchenPrivate: false,
            KitchenShared: false,
            Practice: false,
            Fitness: false,
            FloorLounge: false,
            Print: false,
            BuildingLounge: false,
            NoCarpet: false,
            AverageLaundry: 1
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
        } else if(target === "++") {
            this.setState({
                AverageLaundry: this.state.AverageLaundry + 1
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(target === "--") {
            this.setState({
                AverageLaundry: this.state.AverageLaundry - 1
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(String(target).startsWith("AverageLaundry")) {
            this.setState({
                AverageLaundry: 1
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
            if(this.state.showAdvanced){
                this.setState({
                    showAdvanced: !this.state.showAdvanced
                })
                let background3 = document.getElementById("advanced").style.backgroundColor;
                if (background3 == white) {
                    document.getElementById("advanced").style.background = blue;
                    document.getElementById("advanced").style.color = white;
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
            if(this.state.showAdvanced){
                this.setState({
                    showAdvanced: !this.state.showAdvanced
                })
                let background3 = document.getElementById("advanced").style.backgroundColor;
                if (background3 == white) {
                    document.getElementById("advanced").style.background = blue;
                    document.getElementById("advanced").style.color = white;
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
            if(this.state.showAdvanced){
                this.setState({
                    showAdvanced: !this.state.showAdvanced
                })
                let background3 = document.getElementById("advanced").style.backgroundColor;
                if (background3 == white) {
                    document.getElementById("advanced").style.background = blue;
                    document.getElementById("advanced").style.color = white;
                }
            }
        }
        if(action === "advanced") {
            this.setState({
                showAdvanced: !this.state.showAdvanced
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
            /*console.log(this.state.showAdvanced)*/
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
        if(action === "checkTriple"){
            this.setState({
                Triple: !this.state.Triple
            })
        }
        if(action === "checkPrivate"){
            this.setState({
                Private: !this.state.Private
            })
        }
        if(action === "checkSingleUse"){
            this.setState({
                HallwaySingle: !this.state.HallwaySingle
            })
        }
        if(action === "checkMultipleUse"){
            this.setState({
                HallwaySingle: !this.state.HallwaySingle
            })
        }
        if(action === "checkKitchenPrivate"){
            this.setState({
                KitchenPrivate: !this.state.KitchenPrivate
            })
        }
        if(action === "checkKitchenShared"){
            this.setState({
                KitchenShared: !this.state.KitchenShared
            })
        }
        if(action === "checkFloorLounge"){
            this.setState({
                FloorLounge: !this.state.FloorLounge
            })
        }
        if(action === "checkBuildingLounge"){
            this.setState({
                BuildingLounge: !this.state.BuildingLounge
            })
        }
        if(action === "checkPrint"){
            this.setState({
                Print: !this.state.Print
            })
        }
        if(action === "checkNoCarpet"){
            this.setState({
                NoCarpet: !this.state.NoCarpet
            })
        }
        if(action === "checkFitness"){
            this.setState({
                Fitness: !this.state.Fitness
            })
        }
        else if(action === "checkPractice"){
            this.setState({
                Practice: !this.state.Practice
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
            DORM: this.props.search,

            /* ADVANCED 
            PRIVATE_BATHROOM: this.state.Private,
            SINGLE_USE: this.state.HallwaySingle,
            MULTIPLE_USE: this.state.HallwayMultiple,
            PRIVATE_KITCHEN: this.state.KitchenPrivate,
            SHARED_KITCHEN: this.state.KitchenShared,
            FLOOR_LOUNGE: this.state.FloorLounge,
            BUILDING_LOUNGE: this.state.BuildingLounge,
            PRINT: this.state.Print,
            NO_CARPET: this.state.NoCarpet,
            FITNESS: this.state.Fitness,
            PRACTICE: this.state.Practice,

            ONE_LAUNDRY: this.state.AverageLaundry == 1,
            TWO_LAUNDRY: this.state.AverageLaundry == 2,
            THREE_LAUNDRY: this.state.AverageLaundry == 3,
            FOUR_LAUNDRY: this.state.AverageLaundry == 4,
            FIVE_LAUNDRY: this.state.AverageLaundry == 5,
            SIX_LAUNDRY: this.state.AverageLaundry == 6,
            SEVEN_LAUNDRY: this.state.AverageLaundry == 7,
            EIGHT_LAUNDRY: this.state.AverageLaundry == 8,
            NINE_LAUNDRY: this.state.AverageLaundry == 9,
            TEN_LAUNDRY: this.state.AverageLaundry == 10,
            */
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
            Triple: false,
            Private: false,
            HallwaySingle: false,
            HallwayMultiple: false,
            KitchenPrivate: false,
            KitchenShared: false,
            Practice: false,
            Fitness: false,
            FloorLounge: false,
            Print: false,
            BuildingLounge: false,
            NoCarpet: false,
            AverageLaundry: 1
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
                } else if (prop == "AverageLaundry"){
                    if(this.state[prop] > 1) selectedFilters.push(String(prop) + ": " + String(this.state[prop]))
                } else{
                    selectedFilters.push(String(prop))
                }
            }
        }

        console.log(selectedFilters)
        console.log(window.innerWidth)

        if (window.innerWidth > 769){
        return(
            <div>
                <SelectedWrapper>
                    {selectedFilters.map(prop => (
                        <Tag><Cancel onClick={this.onChange} id={String(prop)}>X</Cancel>{prop}</Tag>
                    ))}
                </SelectedWrapper>
                <FilterRow>
                    <Textbox>
                        Filters:
                    </Textbox>
                    <DropdownBox>
                        <Dropdown>
                            <DropButton onClick={this.toggle} id = "school">School</DropButton>
                            <DropdownContent show={this.state.showSchool}>
                                    {/* <CheckBox id = "checkColumbia" show={this.state.Columbia} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Filter>
                                        Columbia
                                        <CustomCheckbox 
                                            id = "Columbia"  
                                            type = "checkbox"
                                            onClick = {this.onChange} 
                                            checked = {this.state.Columbia} />
                                    </Filter>                
                                    {/* <CheckBox id = "checkBarnard" show={this.state.Barnard} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Filter>
                                        Barnard                                        
                                        <CustomCheckbox 
                                            id = "Barnard"  
                                            type = "checkbox"
                                            onClick = {this.onChange} 
                                            checked = {this.state.Barnard} />
                                    </Filter>
                            </DropdownContent>
                        </Dropdown>
                        <Dropdown>
                            <DropButton onClick={this.toggle} id="group">Group Size</DropButton>
                            <DropdownContent show={this.state.showGroup}>
                                <RowGZ full >
                                    <ButtonGZ id = "-" onClick={this.onChange}>-</ButtonGZ>
                                    <Number>{this.state.GroupSize}</Number>
                                    <ButtonGZ class="button" id = "+" onClick={this.onChange}>+</ButtonGZ>
                                </RowGZ> 
                            </DropdownContent>
                        </Dropdown>
                        <Dropdown>
                            <DropButton onClick={this.toggle} id="room">Room Type</DropButton>
                            <DropdownContent show={this.state.showRoom}>
                                    {/* <CheckBox id = "checkSuite" show={this.state.Suite} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Filter>
                                        Suite Style
                                        <CustomCheckbox 
                                            id="Suite" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Suite}
                                            onChange = {this.checkBox} />
                                    </Filter>
                                    {/* <CheckBox id = "checkSingle" show={this.state.Single} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Filter>
                                        Single
                                        <CustomCheckbox 
                                            id="Single" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Single} />
                                    </Filter>
                                    {/* <CheckBox id = "checkDouble" show={this.state.Double} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Filter>
                                        Double
                                        <CustomCheckbox 
                                            id="Double" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                            checked = {this.state.Double} />
                                    </Filter>
                                    {/* <CheckBox id = "checkTriple" show={this.state.Triple} onClick ={this.unCheck}>✓</CheckBox> */}
                                    <Filter>
                                        Triple
                                        <CustomCheckbox 
                                            id="Triple" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                            checked = {this.state.Triple} /> 
                                    </Filter>
                            </DropdownContent>
                        </Dropdown>                    
                        <Dropdown>
                            <DropButton onClick={this.toggle} id="advanced">Advanced</DropButton>
                        </Dropdown>                    
                        </DropdownBox>
                    <ClearButton show = {this.state} onClick={this.clear}>Clear</ClearButton>
                </FilterRow>
                <Advanced show={this.state.showAdvanced}>
                <Box>  
                <Section> BATHROOMS 
                    <Subsection> <Column>
                            <Filter> 
                                Private 
                                <CustomCheckbox id="Private"   
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Private} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> 
                                Single use 
                                <CustomCheckbox id="HallwaySingle"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.HallwaySingle} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> 
                                Multiple use 
                                <CustomCheckbox id="HallwayMultiple"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.HallwayMultiple} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                    </Column></Subsection>
                </Section>

                <Section large> AMENITIES 
                <Subsection>
                    <Amenities> 
                        <Column single>
                            <Filter> 
                                Kitchen, private 
                                <CustomCheckbox id="KitchenPrivate"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.KitchenPrivate} 
                                       onChange = {this.checkBox} /> 
                                </Filter>

                            <Filter> 
                                Kitchen, shared 
                                <CustomCheckbox id="KitchenShared"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.KitchenShared} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> 
                                Floor lounge 
                                <CustomCheckbox id="FloorLounge"   
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.FloorLounge} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter>  
                                Building lounge
                                <CustomCheckbox id="BuildingLounge"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.BuildingLounge} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                        </Column>
                        <Column single>
                            <Filter>  
                                Practice room
                                <CustomCheckbox id="Practice"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Practice} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> 
                                Fitness room 
                                <CustomCheckbox id="Fitness"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Fitness} 
                                       onChange = {this.checkBox} /> 
                                </Filter>

                            <Filter> 
                                Print station 
                                <CustomCheckbox id="Print"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Print} 
                                       onChange = {this.checkBox} /> 
                                </Filter>

                            <Filter> 
                                No carpet 
                                <CustomCheckbox id="NoCarpet"   
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.NoCarpet} 
                                       onChange = {this.checkBox} /> 
                            </Filter>
                        </Column>
                    </Amenities>
                </Subsection>
                </Section>

                <Section> LAUNDRY 
                    <Subsection> 
                            <Filter>Average number of people per machine </Filter> 
                                <RowGZ>
                                    <ButtonGZ id = "--" onClick={this.onChange}>-</ButtonGZ>
                                    <Number>{this.state.AverageLaundry}</Number>
                                    <ButtonGZ class="button" id = "++" onClick={this.onChange}>+</ButtonGZ>
                                </RowGZ> 
                    </Subsection>
                </Section>
            </Box>
            </Advanced>                    
            </div>
        );}

        return(
            <div>
                <FilterRow>
                <MobileSection top>
                        <Filter>
                            Columbia
                            <CustomCheckboxMobile 
                                id = "Columbia"  
                                type = "checkbox"
                                onClick = {this.onChange} 
                                checked = {this.state.Columbia} />
                        </Filter> 
                        <Filter>
                            Barnard
                            <CustomCheckboxMobile 
                                id = "Barnard"  
                                type = "checkbox"
                                onClick = {this.onChange} 
                                checked = {this.state.Barnard} />
                        </Filter>
                        </MobileSection>
                    <DropButton onClick={this.toggle} id="advanced">More Filters</DropButton>
                </FilterRow>
                <Advanced show={this.state.showAdvanced}>
                    <Column>
                    <MobileSection>
                        <Row center>
                            Group Size
                            <RowGZ>
                            <ButtonGZ id = "-" onClick={this.onChange}>-</ButtonGZ>
                            <Number>{this.state.GroupSize}</Number>
                            <ButtonGZ class="button" id = "+" onClick={this.onChange}>+</ButtonGZ>
                            </RowGZ>
                        </Row>
                    </MobileSection>
                    <Box>
                        <Column>
                        <MobileSection> Room Type 
                                    <Filter> 
                                        Single 
                                        <CustomCheckboxMobile id="Single"   
                                            onClick = {this.onChange}  
                                            type="checkbox" 
                                            checked = {this.state.Single} 
                                            onChange = {this.checkBox} /> 
                                        </Filter>
                                    <Filter> 
                                        Double
                                        <CustomCheckboxMobile id="Double"  
                                            onClick = {this.onChange}  
                                            type="checkbox" 
                                            checked = {this.state.Double} 
                                            onChange = {this.checkBox} /> 
                                        </Filter>
                                    <Filter> 
                                        Triple
                                        <CustomCheckboxMobile id="Triple"  
                                            onClick = {this.onChange}  
                                            type="checkbox" 
                                            checked = {this.state.Triple} 
                                            onChange = {this.checkBox} /> 
                                        </Filter>
                            </MobileSection>
                            <MobileSection topmargin> Bathroom 
                                    <Filter> 
                                        Private
                                        <CustomCheckboxMobile id="Private"   
                                            onClick = {this.onChange}  
                                            type="checkbox" 
                                            checked = {this.state.Private} 
                                            onChange = {this.checkBox} /> 
                                        </Filter>
                                    <Filter> 
                                        Single use 
                                        <CustomCheckboxMobile id="HallwaySingle"  
                                            onClick = {this.onChange}  
                                            type="checkbox" 
                                            checked = {this.state.HallwaySingle} 
                                            onChange = {this.checkBox} /> 
                                        </Filter>
                                    <Filter> 
                                        Multiple use 
                                        <CustomCheckboxMobile id="HallwayMultiple"  
                                            onClick = {this.onChange}  
                                            type="checkbox" 
                                            checked = {this.state.HallwayMultiple} 
                                            onChange = {this.checkBox} /> 
                                        
                                        </Filter>
                            </MobileSection>                        
                            </Column>

                        <MobileSection> Amenities
                            <Filter> 
                                Kitchen, private
                                <CustomCheckboxMobile id="KitchenPrivate"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.KitchenPrivate} 
                                       onChange = {this.checkBox} /> 
                                </Filter>

                            <Filter> 
                                Kitchen, shared 
                                <CustomCheckboxMobile id="KitchenShared"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.KitchenShared} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> 
                                Floor lounge 
                                <CustomCheckboxMobile id="FloorLounge"   
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.FloorLounge} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter>  
                                Building lounge
                                <CustomCheckboxMobile id="BuildingLounge"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.BuildingLounge} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter>  
                                Practice room
                                <CustomCheckboxMobile id="Practice"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Practice} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> 
                                Fitness room 
                                <CustomCheckboxMobile id="Fitness"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Fitness} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> 
                                Print station
                                <CustomCheckboxMobile id="Print"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Print} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> 
                                No carpet
                                <CustomCheckboxMobile id="NoCarpet"   
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.NoCarpet} 
                                       onChange = {this.checkBox} /> 
                            </Filter>
                        </MobileSection>
                    </Box>
                    
                    <MobileSection> Laundry
                            <Row>
                                <Filter half >Average number of people per machine</Filter>
                                <RowGZ>
                                    <ButtonGZ id = "--" onClick={this.onChange}>-</ButtonGZ>
                                    <Number>{this.state.AverageLaundry}</Number>
                                    <ButtonGZ class="button" id = "++" onClick={this.onChange}>+</ButtonGZ>
                                </RowGZ> 
                            </Row>
                        </MobileSection>
                    </Column>
                </Advanced>                    
            </div>
        ); 
    }
}