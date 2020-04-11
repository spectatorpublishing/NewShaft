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
    
    this.handleChange = this.handleChange.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleChange(name) {
    this.props.OnNameChange(name);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false}, () => {
        document.removeEventListener('click', this.closeMenu);
      });
      this.handleChange("Select Dorm")  
    } else {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu} style= {{marginLeft: 100, marginRight: 100}}>
          {this.props.Name}
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <ul>
                  <li><button onClick = {() => {this.handleChange('47 Claremont')}}> 47 Claremont </button></li>

                  <li><button onClick = {() => {this.handleChange('Nussbaum')}}> Nussbaum </button></li>

                  <li><button onClick = {() => {this.handleChange('McBain')}}> McBain </button></li>
                </ul>

              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}