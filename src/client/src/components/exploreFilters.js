import React from "react";
import styled from 'styled-components';

let FilterRow = styled.div`
    background-color: rgb(98, 168, 229);
    padding: 0rem 1.2rem 0.6rem 0rem;
    margin: 0rem 0 0 1.5%;
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

/* ADVANCED FILTERS */

let Advanced = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
`

const Box = styled.div`
    display: flex;
    padding-bottom: 1rem;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

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
            PerLaundry: 1
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
                PerLaundry: this.state.PerLaundry + 1
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(target === "--") {
            this.setState({
                PerLaundry: this.state.PerLaundry - 1
            }, () => this.props.submit("", "", this.createPayload()))
        } else if(String(target).startsWith("PerLaundry")) {
            this.setState({
                PerLaundry: 1
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
        if(action === "advanced") {
            this.setState({
                showAdvanced: !this.state.showAdvanced
            })
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

            /* ADVANCED */
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

            ONE_LAUNDRY: this.state.PerLaundry == 1,
            TWO_LAUNDRY: this.state.PerLaundry == 2,
            THREE_LAUNDRY: this.state.PerLaundry == 3,
            FOUR_LAUNDRY: this.state.PerLaundry == 4,
            FIVE_LAUNDRY: this.state.PerLaundry == 5,
            SIX_LAUNDRY: this.state.PerLaundry == 6,
            SEVEN_LAUNDRY: this.state.PerLaundry == 7,
            EIGHT_LAUNDRY: this.state.PerLaundry == 8,
            NINE_LAUNDRY: this.state.PerLaundry == 9,
            TEN_LAUNDRY: this.state.PerLaundry == 10,
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
            PerLaundry: 1
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
                            <DropButton onClick={this.toggle} id="advanced">Advanced</DropButton>
                        </Dropdown>                    
                        </DropdownBox>
                    <ClearButton show = {this.state} onClick={this.clear}>Clear</ClearButton>
                </FilterRow>
                <Advanced show={this.state.showAdvanced}>
                <Box>  
                <Section> BATHROOMS 
                    <Subsection> 
                            <Filter> Private 
                                <Input id="Private"   
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Private} 
                                       onChange = {null} /> 
                                </Filter>
                            <Filter> Single use 
                                <Input id="HallwaySingle"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.HallwaySingle} 
                                       onChange = {null} /> 
                                </Filter>
                            <Filter> Multiple use 
                                <Input id="HallwayMultiple"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.HallwayMultiple} 
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
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.KitchenPrivate} 
                                       onChange = {this.checkBox} /> 
                                </Filter>

                            <Filter> Kitchen, shared 
                                <Input id="KitchenShared"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.KitchenShared} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> Floor lounge 
                                <Input id="FloorLounge"   
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.FloorLounge} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> Building lounge 
                                <Input id="BuildingLounge"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.BuildingLounge} 
                                       onChange = {this.checkBox} /> 
                                </Filter>

                        </Column>
                        <Column>
                            <Filter> Practice room 
                                <Input id="Practice"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Practice} 
                                       onChange = {this.checkBox} /> 
                                </Filter>
                            <Filter> Fitness room 
                                <Input id="Fitness"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Fitness} 
                                       onChange = {this.checkBox} /> 
                                </Filter>

                            <Filter> Print station 
                                <Input id="Print"  
                                       onClick = {this.onChange}  
                                       type="checkbox" 
                                       checked = {this.state.Print} 
                                       onChange = {this.checkBox} /> 
                                </Filter>

                            <Filter> No carpet 
                                <Input id="NoCarpet"   
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
                                    <Number>{this.state.PerLaundry}</Number>
                                    <ButtonGZ class="button" id = "++" onClick={this.onChange}>+</ButtonGZ>
                                </RowGZ> 
                    </Subsection>
                </Section>

            </Box>
            </Advanced>                    
            </div>
        );
    }
}