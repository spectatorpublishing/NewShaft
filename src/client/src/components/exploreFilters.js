import React from "react";
import styled from 'styled-components';
import { theme } from "../util/GlobalStyles";



let FilterContainer = styled.div`
    width:100%;
`;

let FilterRow = styled.div`
    width:100%;
    background-color: ${theme.columbiaBlue};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    @media only screen and (max-width: 770px) {
        justify-content: flex-start;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
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
    color: ${theme.white};
    margin: 0 1rem .7rem 0;
    font-weight: 200;
    font-size: 1.1rem;
    @media only screen and (max-width: 770px) {
        margin: 0 1rem .5rem 0;
        font-size: 1rem;
    }
`;

let Cancel = styled.div`
    cursor: pointer;
    color: ${theme.white};
    font-weight: 200;
    font-size: 0.8rem;
`;

let Dropdown = styled.div`
    float: left;
    overflow: hidden;
    width:100%;
    height:100%;
    z-index:300;
`;

let DropdownWrapper = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:center;
`;
let FilterTextWrapper = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-start;
`;

let ClearWrapper = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
`;

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
        margin: 0 .2rem 0 0;
        padding:0;
    }
    :last-child{
        flex: 1;
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
    position:relative;
`;

let Textbox = styled.div`
    font-family: 'Raleway';
    font-size: 1.5rem;
    color: ${theme.white};
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
    }
`;

let DropButton = styled.button`
    width:100%;
    height:100%;
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    border: 1.5px solid ${theme.white};  
    color: ${props => props.active ? theme.columbiaBlue : theme.white  };
    font-family: 'Raleway';
    text-align: center;
    padding:0;
    background-color: ${props => props.active ? theme.white: theme.columbiaBlue};
    outline: none;
    font-size:1.2rem;
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
    }
`;

let DropdownContent = styled.div`
    display: ${props => props.show ? '' : 'none'};
    position: absolute;
    flex-direction: row;
    background-color: ${theme.white};
    min-width: 8rem;
    font-family: 'Raleway';
    box-shadow: 0.5rem 0rem 1rem 0rem ${theme.shadow};
    z-index: 1;
    border-radius: 8px;
    border: 1.5px solid ${theme.columbiaBlue};
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;  
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
    font-size:1.2rem;
    color: ${theme.white};
    text-decoration: underline;
    z-index:20;
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
    }
`;

const ButtonGZ = styled.div`
    cursor: pointer;
    font-family: 'Raleway';
    font-size:1.2rem;
    border-radius: 100%;
    border: 1px solid ${props => props.active ? theme.columbiaBlue : theme.mediumGray};
    padding: 0rem 0.45rem 0rem 0.45rem;
    vertical-align: center;
    color: ${props => props.active ? theme.columbiaBlue : theme.white};
    background-color: ${props => props.active ? theme.white : theme.lightGray};
    &:hover {
        background: ${props => props.active ? theme.columbiaBlue : theme.lightGray} ;
        color: ${theme.white};
    }
`;

let Number = styled.div`
    font-family: 'Raleway';
    font-size: 1.5rem;
    vertical-align: middle;
    margin: auto;
`;

let Label = styled.div`
    font-family: 'Raleway';
    padding-left: 0.6rem;
    padding-top: 0.2rem;
    color: ${theme.columbiaBlue};
    font-size: 1.3rem;
    background: ${theme.white};
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
    padding: 0.3rem 0rem 0.3rem 0rem;
`;

let Input = styled.div`
    border: 2px solid ${theme.columbiaBlue};
    border-radius: 6px;
    width: 1.2rem;
    height: 0.9rem;
    cursor: pointer;
    color: ${theme.white};
    font-size: 1.1rem;
    padding: 0.1rem 0rem 0.4rem 0.2rem;
    background-color: transparent;
    vertical-align: center;
    &:active{
        background-color: ${theme.columbiaBlue};
    }
`;

let CheckBox = styled.div`
    display: ${props => props.show ? '' : 'none'};
    border: 2px solid ${theme.columbiaBlue};
    border-radius: 6px;
    width: 1.2rem;
    height: 0.9rem;
    cursor: pointer;
    color: ${theme.white};
    font-size: 1.1rem;
    padding: 0.1rem 0rem 0.4rem 0.2rem;
    background-color: ${theme.columbiaBlue};
    position: absolute;
`;

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
    
    toggle(action,e) {
        // let action = e.target.id
        // console.log("action:" , action)
        if(action === "school") {
            this.setState({
                showSchool: !this.state.showSchool,
                showRoom: false,
                showGroup: false
            })
        }
        else if(action === "room") {
            this.setState({
                showRoom: !this.state.showRoom,
                showGroup: false,
                showSchool: false
            })
        }
        else if(action === "group") {
            this.setState({
                showGroup: !this.state.showGroup,
                showRoom: false,
                showSchool: false
            })
        }
        else{
            this.setState({
                showGroup: false,
                showRoom: false,
                showSchool: false
            })
        }
    }

    unCheck(value, e){
        let action = value;
        this.setState({
            [action]: !this.state[action]
        }, () => this.props.submit("", "", this.createPayload()))
    }

    createPayload() {
        let payload = {
            COLUMBIA: this.state.Columbia,
            BARNARD: this.state.Barnard,
            SINGLE_: this.state.Single,
            DOUBLE_: this.state.Double,
            TRIPLE_: this.state.Triple,
            SUITE_: this.state.Suite,
            GROUP_SIZE_1: this.state.GroupSize == 1,
            GROUP_SIZE_2: this.state.GroupSize == 2,
            GROUP_SIZE_3: this.state.GroupSize == 3,
            GROUP_SIZE_4: this.state.GroupSize == 4,
            GROUP_SIZE_5: this.state.GroupSize == 5,
            GROUP_SIZE_6: this.state.GroupSize == 6,
            GROUP_SIZE_7: this.state.GroupSize == 7,
            GROUP_SIZE_8: this.state.GroupSize == 8,
            GROUP_SIZE_9: this.state.GroupSize == 9,
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
    }

    render() {
        var selectedFilters = [];
        for(var prop in this.state) {
            if(this.state[prop] && !String(prop).startsWith("show")) {
                if(prop == "GroupSize") {
                    if(this.state[prop] > 0) selectedFilters.push(String(prop) + ": " + String(this.state[prop]))
                } else{
                    selectedFilters.push(String(prop))
                }
            }
        }
        return(
            <FilterContainer>
                <SelectedWrapper>
                    {selectedFilters.map(prop => (
                        <Tag><Cancel onClick={this.onChange} id={String(prop)}>X&nbsp;</Cancel>{prop}</Tag>
                    ))}
                </SelectedWrapper>
                <FilterRow>
                    <DropTable>
                        <DropTableRow >
                            <DropTableColumn>
                                <FilterTextWrapper>
                                    <Textbox>
                                        Filters:
                                    </Textbox>
                                </FilterTextWrapper>
                            </DropTableColumn>
                            <DropTableColumn>
                                <DropdownWrapper>
                                    <Dropdown>
                                        <DropButton onClick={(e)=>this.toggle("school",e)} active = {this.state.showSchool} >School</DropButton>
                                        <DropdownContent show={this.state.showSchool}>
                                        <Row>
                                            <CheckBox show={this.state.Columbia} onClick ={(e)=>this.unCheck("Columbia",e)}>✓</CheckBox>
                                            <Input 
                                                id = "Columbia"  
                                                type = "checkbox"
                                                onClick = {this.onChange} 
                                                checked = {this.state.Columbia} >✓</Input> 
                                            <Label>Columbia</Label>                
                                        </Row>
                                        <Row>
                                            <CheckBox show={this.state.Barnard} onClick ={(e)=>this.unCheck("Barnard",e)}>✓</CheckBox>
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
                            <DropButton onClick={(e)=>this.toggle("group",e)} id="group" active={this.state.showGroup}>Group Size</DropButton>
                            <DropdownContent show={this.state.showGroup}>
                                <RowGZ>
                                    <ButtonGZ id = "-" onClick={this.onChange} active={this.state.GroupSize -1 >=0} >-</ButtonGZ>
                                    <Number>{this.state.GroupSize}</Number>
                                    <ButtonGZ class="button" id = "+" onClick={this.onChange} active={this.state.GroupSize +1 <= this.props.MAX_GROUP}>+</ButtonGZ>
                                </RowGZ> 
                            </DropdownContent>
                        </Dropdown>
                                </DropdownWrapper>
                            </DropTableColumn>
                            <DropTableColumn>
                                <DropdownWrapper>
                                    <Dropdown>
                                <DropButton onClick={(e)=>this.toggle("room",e)} id="room" active ={this.state.showRoom} >Room Type</DropButton>
                                <DropdownContent show={this.state.showRoom}>
                                    <Row>
                                        <CheckBox show={this.state.Suite} onClick ={(e)=>this.unCheck("Suite",e)}>✓</CheckBox>
                                        <Input 
                                            id="Suite" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Suite}
                                            onChange = {this.checkBox} >✓</Input>
                                        <Label>Suite Style</Label>
                                    </Row>
                                    <Row>
                                        <CheckBox show={this.state.Single} onClick ={(e)=>this.unCheck("Single",e)}>✓</CheckBox>
                                        <Input 
                                            id="Single" 
                                            onClick = {this.onChange} 
                                            type="checkbox"
                                            checked = {this.state.Single}>✓</Input> 
                                        <Label>Single</Label>
                                    </Row>
                                    <Row>
                                        <CheckBox show={this.state.Double} onClick ={(e)=>this.unCheck("Double",e)}>✓</CheckBox>
                                        <Input 
                                            id="Double" 
                                            onClick = {this.onChange} 
                                            type="checkbox" 
                                        checked = {this.state.Double}>✓</Input> 
                                        <Label>Double</Label>
                                    </Row>
                                    <Row>
                                        <CheckBox show={this.state.Triple}  onClick ={(e)=>this.unCheck("Triple",e)}>✓</CheckBox>
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