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
    z-index: 2;
  `}
`

let LogoContainer = styled.div`
  margin-left: 10%;
  width: 40%;
`

let Logo = styled.img`
  height: 100%;
  padding: 0;
`

let MenuContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10%;
  width: 40%;
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

let NavBuffer = styled.div`
  height: 60px;
  width: 100%;
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
              <Logo src={icon} alt="The Shaft"/>
            </Link>
          </LogoContainer>
          <MenuContainer>
            <MenuBox>
              {this.getMenuItems()}
            </MenuBox>
          </MenuContainer>
        </NavContainer>
        {this.props.fixed && <NavBuffer></NavBuffer>}
      </div>
    );
  }
}
