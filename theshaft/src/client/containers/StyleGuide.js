import React, { Component } from "react";
import styled from 'styled-components';

let Theme = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700,800');
  font-family: 'Raleway', sans-serif;
  margin: 2em;
`

let ThemeSection = styled.div`
  padding-bottom: 2em;
  margin-bottom: 2em;
`

let SectionName = styled.h1` 
  border-bottom: solid 1px ${props => props.theme.lightGray};
`

let ClearBG = styled.div`
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let BlackBG = styled(ClearBG)`
  background-color: ${props => props.theme.black};
`

let BarnardBlueBG = styled(ClearBG)`
  background-color: ${props => props.theme.barnardBlue};
`

let ColumbiaBlueBG = styled(ClearBG)`
  background-color: ${props => props.theme.columbiaBlue};
`

let BorderBG = styled(ClearBG)`
  border: solid 1px ${props => props.theme.lightGray};
`

let Black = styled.h3`
  color: ${props => props.theme.black};
`

let BarnardBlue = styled.h3`
  color: ${props => props.theme.barnardBlue};
`

let ColumbiaBlue = styled.h3`
  color: ${props => props.theme.columbiaBlue};
`

let White = styled.h3`
  color: ${props => props.theme.white};
`

let WhiteShadowed = styled(White)`
  text-shadow: ${props => props.theme.textShadow};
`

let DarkGray = styled.h3`
  color: ${props => props.theme.darkGray};
`

let LightGray = styled.h3`
  color: ${props => props.theme.lightGray};
`

export default class StyleGuide extends Component {
  render() {
    return (
      <Theme>
        <ThemeSection>
        <SectionName>Fonts</SectionName>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        <h3>Heading3</h3>
        <h4>Heading4</h4>
        <h5>Heading5</h5>
        <h6>Heading6</h6>
        <br/>
        <p>Text</p>
        <b>TextBold</b>
        </ThemeSection>

        <ThemeSection>
        <SectionName>Colors</SectionName>
        <ClearBG><Black>black</Black></ClearBG>
        <ClearBG><BarnardBlue>barnardBlue</BarnardBlue></ClearBG>
        <ClearBG><ColumbiaBlue>columbiaBlue</ColumbiaBlue></ClearBG>
        <BlackBG><White>white on black</White></BlackBG>
        <BarnardBlueBG><White>white on barnardBlue</White></BarnardBlueBG>
        <ColumbiaBlueBG><WhiteShadowed>white with textShadow on columbiaBlue</WhiteShadowed></ColumbiaBlueBG>
        <ClearBG><WhiteShadowed>textShadow</WhiteShadowed></ClearBG>
        <ClearBG><DarkGray>darkGray</DarkGray></ClearBG>
        <BorderBG><LightGray>lightGray</LightGray></BorderBG>
        </ThemeSection>
      </Theme>
    );
  }
}
