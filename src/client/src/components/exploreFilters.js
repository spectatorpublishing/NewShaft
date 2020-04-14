import React from "react";
import styled from 'styled-components';

let FilterRow = styled.div`
    background-color: rgb(98, 168, 229);
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

let SelectedWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Raleway';
`;

let Tag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    padding: .5rem;
    font-weight: 200;
    font-size: 18px;
`;

let Cancel = styled.div`
    cursor: pointer;
    color: white;
    padding-right: .2rem;
    font-weight: 200;
    font-size: 12px;
`;

let Dropdown = styled.div`
  float: left;
  overflow: hidden;
`;

let Textbox = styled.div`
    font-family: 'Raleway';
    font-size: 25px;
    color: white;
    padding: 10px;
    margin-right: 20px;
    margin-left: 10px;
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
  margin-left:8px;
  margin-right:8px;
  font-size:18px;
  text-align: center;
  background-color: transparent;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;
`;

let DropdownContent = styled.div`
  display: ${props => props.show ? '' : 'none'};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
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
            GroupSize: 1,
            Suite: false,
            Single: false,
            Double: false,
            Triple: false
	    };

        this.onChange = this.onChange.bind(this);
        //this.onGroupSizeChange = this.onGroupSizeChange.bind(this);
        this.toggle= this.toggle.bind(this);
        this.submit= this.submit.bind(this);
        this.clear= this.clear.bind(this);
    }

    onChange(e) {
        let target = e.target.id;

        if(target === "+") {
            this.setState({
                GroupSize: this.state.GroupSize + 1
            })
        } else if(target === "-") {
            this.setState({
                GroupSize: this.state.GroupSize - 1
            })
        } else if(String(target).startsWith("GroupSize")) {
            this.setState({
                GroupSize: 1
            })
        } else { 
            this.setState({
                [target]: !this.state[target]
            })
        }
    }
    
    toggle(e) {
        let action = e.target.id
        if(action === "school") {
            this.setState({
                showSchool: !this.state.showSchool
            })
        }
        if(action === "room") {
            this.setState({
                showRoom: !this.state.showRoom
            })
        }
        if(action === "group") {
            this.setState({
                showGroup: !this.state.showGroup
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

    submit() {
        this.props.submit("", "", this.createPayload());
    }

    clear(e) {
        let type = e.target.id
        if(type === "school") {
            this.setState({
                Columbia: false,
                Barnard: false
            }, () => this.props.submit("", "", this.createPayload()))
        }
        if(type === "group") {
            this.setState({
                GroupSize: 1
            }, () => this.props.submit("", "", this.createPayload()))
        }
        if(type === "room") {
            this.setState({
                Suite: false,
                Single: false,
                Double: false,
                Triple: false
            }, () => this.props.submit("", "", this.createPayload()))
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
                        <strong>Filters:</strong>
                    </Textbox>
                    <Dropdown>
                        <DropButton onClick={this.toggle} id = "school">School</DropButton>
                        <DropdownContent show={this.state.showSchool}>
                            <input 
                                id = "Columbia" 
                                type="checkbox" 
                                onChange = {this.onChange}  
                                checked = {this.state.Columbia} /> 
                            <label>Columbia</label> <br />
                            <input 
                                id = "Barnard" 
                                type="checkbox" 
                                onChange = {this.onChange} 
                                checked = {this.state.Barnard} /> 
                            <label>Barnard</label>  <br />
                            <button onClick={this.submit} id = "school">Submit</button>
                            <button onClick={this.clear} id = "school">Clear</button>
                        </DropdownContent>
                    </Dropdown>
                    <Dropdown>
                        <DropButton onClick={this.toggle} id="group">Group Size</DropButton>
                        <DropdownContent show={this.state.showGroup}>
                            <div>
                                <button id = "-" onClick={this.onChange}>-</button>
                                <div>{this.state.GroupSize}</div>
                                <button id = "+" onClick={this.onChange}>+</button>
                            </div>  <br />
                            <button onClick={this.submit} id = "group">Submit</button>
                            <button onClick={this.clear} id = "group">Clear</button>
                        </DropdownContent>
                    </Dropdown>
                    <Dropdown>
                        <DropButton onClick={this.toggle} id="room">Room Type</DropButton>
                        <DropdownContent show={this.state.showRoom}>
                            <input 
                                id="Suite" 
                                onChange = {this.onChange} 
                                type="checkbox"
                                checked = {this.state.Suite} /> 
                            <label>Suite Style</label> <br />
                            <input 
                                id="Single" 
                                onChange = {this.onChange} 
                                type="checkbox"
                                checked = {this.state.Single} /> 
                            <label>Single</label> <br />
                            <input 
                                id="Double" 
                                onChange = {this.onChange} 
                                type="checkbox" 
                                checked = {this.state.Double} /> 
                            <label>Double</label> <br />
                            <input 
                                id="Triple" 
                                onChange = {this.onChange} 
                                type="checkbox" 
                                checked = {this.state.Triple} /> 
                            <label>Triple</label>  <br />
                            <button onClick={this.submit} id = "room">Submit</button>
                            <button onClick={this.clear} id = "room">Clear</button>
                        </DropdownContent>
                    </Dropdown>
            </FilterRow>
        </div>
        );
    }
}