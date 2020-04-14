import React, { Component } from 'react';
import styled from 'styled-components';

let menu = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
`

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({showMenu: !this.state.showMenu});
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu} style= {{marginLeft: 100, marginRight: 100}}>
          {this.props.Name}
        </button>
        
        {!this.state.showMenu ? null :
          <div className="menu">
            <ul>
              <li><button onClick = {() => {this.props.onNameChange(1,'47 Claremont')}}> 47 Claremont </button></li>
      
              <li><button onClick = {() => {this.props.onNameChange(2,'Furnald')}}> Furnald </button></li>
      
              <li><button onClick = {() => {this.props.onNameChange(3,'McBain')}}> McBain </button></li>
            </ul>
          </div> }
      </div>
    );
  }
}