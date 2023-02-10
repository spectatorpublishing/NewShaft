import React, { Component } from "react";
import speclogo from "../assets/spectator-logo.png";
import shaftlogo from "../assets/shaft-logo-text.png"
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

let Wrap = styled.div`

`;

let NavContainer = styled.div `
  background-color: ${props => props.theme.black};
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100vw;

  ${({ fixed }) => fixed && `
    left: 0;
    position: fixed;
    top: 0;
    z-index: 999;
  `}
`
let Banner = styled.div `
  color: white;
  padding-left: 2vw;
  padding-right: 2vw;
  font-size: 1.15rem;
  background-color: #D44942;
  display: flex;
  flex-direction: row;
  margin-top: 3.76rem;
  width: 100vw;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media(max-width: 991px){
    font-size: 0.75rem;
    height: 50px;
    margin-top: 3.7rem;
    width: 100%;
}

  ${({ fixed }) => fixed && `
  left: 0;
  position: fixed;
  top: 0;
  z-index: 2;
  `}

`

let LogoContainer = styled.div`
  margin: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
let ShaftLogo = styled.img`
  height: 35px;
  padding: 0;
  width: auto;
  object-fit: cover;
`

let SpecLogo = styled.img`
  height: auto;
  padding: 0;
  width: 150px;
  object-fit: cover;
`

let MenuContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: vw;
  width: 65%;
`

let MenuRow = styled.div`
  border-bottom: solid 1px ${props => props.theme.white};
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
`

let MenuLink = styled(NavLink)`
  border-bottom: none;
  color: ${props => props.theme.white};
  padding-bottom: 0.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

    :hover {
      color: ${props => props.theme.lightGray};
    }

    :focus {
      color: ${props => props.theme.lightGray};
    }

    &.navLinkActive {
      border-bottom: solid 2px ${props => props.theme.white};
    }

  ${({ mobile }) => !!mobile && `
    border: none;
    padding: 10px 0;
    margin: 20px 0;
  `}
`

let NavBuffer = styled.div`
  height: 120px;
  width: 100%;
`

let MenuColumn = styled.div`
  align-items: center;
  background-color: rgba(0,0,0,0.85);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 0;
  overflow: hidden;
  position: absolute;
  top: 60px;
  right: 0;
  transition: width 0.2s ease-out;
  z-index: 1;
`

let MenuBtn = styled.input`
  display: none;

  &:checked ~ ${MenuColumn} {
    width: 50vw;
  }
`

let MenuIcon = styled.label`
  cursor: pointer;
  margin-left: auto;
  padding: 28px 5vw;
  user-select: none;
`

let NavIcon = styled.span`
  background: ${props => props.theme.white};
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 24px;

  :before,
  :after {
    background: ${props => props.theme.white};
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

let DisabledMenuLink = styled(MenuLink)`
  color: ${props => props.theme.mediumGray};
  pointer-events: none;
`

let Soon = styled.h6`
  color: ${props => props.theme.mediumGray};
  font-size: 0.7rem;

  ${({ mobile }) => !mobile && `
    //position: absolute;
    margin-top: 0px;
  `}
`

let DesktopItem = styled.h4`
  color: inherit;
`

let MobileItem = styled.h3`
  color: inherit;
`


export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedForMobile: false,
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.forceClose = this.forceClose.bind(this);
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

  handleCheckboxChange(e) {
    this.setState({ checkedForMobile: e.target.checked });
  }

  forceClose() {
    this.setState({ checkedForMobile: false });
  }

  negateClick(e) {
    e.preventDefault();
  }

  getMenuItems(isMobile) {
    let index = 0
    return this.props.menuItems.map((item) => {
      if (item["disabled"]) {
        return <DisabledMenuLink
          key={index++}
          styled={{isMobile}}
          mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
          to={""}
          onClick={this.negateClick}
          style={{backgroundColor: '#555555'}}
        >
          {isMobile ? <MobileItem>{item["name"]}</MobileItem> : <DesktopItem>{item["name"]}</DesktopItem>}
          <Soon mobile={isMobile}>Coming Soon!</Soon>
        </DisabledMenuLink>
      }
      else {
        return <MenuLink
          key={index++}
          styled={{isMobile}}
          mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
          as={item["external"] ? "a" : undefined}
          href={item["external"] ? item["link"] : undefined}
          target={item["external"] ? "_blank" : undefined}
          to={item["external"] ? undefined : item["link"]}
          activeClassName={item["external"] ? undefined : "navLinkActive"}
          onClick={this.forceClose}
        >
          {isMobile ? <MobileItem>{item["name"]}</MobileItem> : <DesktopItem>{item["name"]}</DesktopItem>}
        </MenuLink>
      }
    });
  }

  render() {
    const isMobile = this.state.width <= 825;
    const desktopMenu = (
      <React.Fragment>
        <MenuContainer>
          <MenuRow>
            {this.getMenuItems(isMobile)}
          </MenuRow>
        </MenuContainer>
        <LogoContainer>
          <a href="http://www.specpublishing.com/" target="_blank">
            <SpecLogo src={speclogo} alt="Spectator Publishing Company"/>
          </a>
        </LogoContainer>
      </React.Fragment>
    );
    const mobileMenu = (
      <React.Fragment>
        <MenuBtn 
          type="checkbox" 
          id="menu-btn" 
          checked={this.state.checkedForMobile}
          onChange={this.handleCheckboxChange}
        />
        <MenuIcon htmlFor="menu-btn">
          <NavIcon></NavIcon>
        </MenuIcon>
        <MenuColumn>
          {this.getMenuItems(isMobile)}
          <MenuLink
            key={this.props.menuItems.length}
            styled={{isMobile}}
            mobile={isMobile ? 1 : 0} // work around for react-router link not playing nice with non-standard attributes
            as="a"
            href="https://www.columbiaspectator.com/"
            target="_blank"
            onClick={this.forceClose}
          >
            <SpecLogo src={speclogo} alt="Columbia Daily Spectator"/>
          </MenuLink>
        </MenuColumn>
      </React.Fragment>
    );
    return (
      <Wrap>
        <NavContainer fixed={this.props.fixed}>
          <LogoContainer>
            <Link to="/">
              <ShaftLogo src={shaftlogo} alt="The Shaft"/>
            </Link>
          </LogoContainer>
          {isMobile ? mobileMenu : desktopMenu}
        </NavContainer>
        {/* <Banner fixed={this.props.fixed}>COMING SOON: We’re updating theShaft in the coming days to give you all of the latest information on housing and dorms at Columbia. Stay tuned!</Banner>
        {this.props.fixed && <NavBuffer></NavBuffer>} */}
      </Wrap>
    );
  }
}
