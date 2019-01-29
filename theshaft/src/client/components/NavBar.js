import React, { Component } from "react";
import icon from "../assets/react.png";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let NavContainer = styled.div `
  background-color: black;
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;

  ${({ fixed }) => fixed && `
    left: 0;
    position: fixed;
    top: 0;
  `}
`

let LogoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 10%;
`

let Logo = styled.img`
  height: 100%;
  padding: 0;
`

let MenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 2;
  justify-content: center;
  margin-right: 10%;
`

let MenuBox = styled.div`
  border-bottom: grey 1px solid;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  padding: 2px 0 6px
`

let MenuLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

    :hover {
      color: #ddd;
    }

    :focus {
      color: #ddd;
    }
`

let NavBuffer = styled.div `
  display: none;
  height: 60px;
  width: 100%;

  ${({ fixed }) => fixed && `
    display: block;
  `}
`

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.getMenuItems = this.getMenuItems.bind(this);
  }

  getMenuItems() {
    let index = 0
    return this.props.menuItems.map((item) => {
      return <div key={index++}>
        <MenuLink to={item[1]}>
          {item[0]}
        </MenuLink>
      </div>
      });
  }

  render() {
    return (
      <div>
        <NavContainer fixed={this.props.fixed}>
          <LogoContainer>
            <Link to="/">
              <Logo src={icon} alt={this.props.name}/>
            </Link>
          </LogoContainer>
          <MenuContainer>
            <MenuBox>
              {this.getMenuItems()}
            </MenuBox>
          </MenuContainer>
        </NavContainer>
        <NavBuffer fixed={this.props.fixed}>
        </NavBuffer>
      </div>
    );
  }
}
