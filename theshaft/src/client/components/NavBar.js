import React, { Component } from "react";
import icon from "../assets/react.png";
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

let NavContainer = styled.div `
  background-color: black;
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100vw;

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

let MenuRow = styled.div`
  border-bottom: solid 1px white;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
`

let MenuLink = styled(NavLink)`
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

let MenuColumn = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  position: absolute;
  top: 60px;
  transition: height .2s ease-out;
  width: 100vw;
  z-index: 1;
`

let MenuItem = styled.div`
  border-bottom: solid 2px white;
  padding-bottom: 0.5rem;

  ${({ mobile }) => mobile && `
    border: none;
    padding: 5% 10%;
  `}
`

let MenuBtn = styled.input`
  display: none;

  &:checked ~ ${MenuColumn} {
    height: 100vh;
  }
`

let MenuIcon = styled.label`
  cursor: pointer;
  margin-left: auto;
  padding: 28px 10%;
  user-select: none;
`

let NavIcon = styled.span`
  background: white;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 24px;

  :before,
  :after {
    background: white;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }

  :before {
    top: 8px;
  }

  :after {
    top: -8px;
  }

  ${MenuBtn}:checked ~ ${MenuIcon} & {
    background: transparent;

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  ${MenuBtn}:checked ~ ${MenuIcon}:not(.steps) & {
    :before,
    :after {
      top: 0;
    }
  }
`

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  getMenuItems(isMobile) {
    let index = 0
    return this.props.menuItems.map((item) => {
      return <MenuItem key={index++} mobile={isMobile}>
        <MenuLink to={item[1]} activeClassName="navLinkActive">
          {item[0]}
        </MenuLink>
      </MenuItem>
      });
  }

  render() {
    const isMobile = this.state.width <= 700;
    const desktopMenu = (
      <React.Fragment>
        <MenuContainer>
          <MenuRow>
            {this.getMenuItems(isMobile)}
          </MenuRow>
        </MenuContainer>
      </React.Fragment>
    );
    const mobileMenu = (
      <React.Fragment>
        <MenuBtn type="checkbox" id="menu-btn"/>
        <MenuIcon htmlFor="menu-btn">
          <NavIcon></NavIcon>
        </MenuIcon>
        <MenuColumn>
          {this.getMenuItems(isMobile)}
        </MenuColumn>
      </React.Fragment>
    );
    return (
      <div>
        <NavContainer fixed={this.props.fixed}>
          <LogoContainer>
            <Link to="/">
              <Logo src={icon} alt="The Shaft"/>
            </Link>
          </LogoContainer>
          {isMobile ? mobileMenu : desktopMenu}
        </NavContainer>
        {this.props.fixed && <NavBuffer></NavBuffer>}
      </div>
    );
  }
}
