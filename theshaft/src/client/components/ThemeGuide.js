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
  border-bottom: solid 1px lightgray;
`

let Heading1 = styled.h1`
  font-size: 3rem;
  font-weight: 800; // extra bold
  margin: 0;
`

let Heading2 = styled.h2`
  font-size: 1.7rem;
  font-weight: 700; // bold
  margin: 0;
`

let Heading3 = styled.h3`
  font-size: 1.3rem;
  font-weight: 700; // bold
  margin: 0;
`

let Heading4 = styled.h4`
  font-size: 1rem;
  font-weight: 800; // bold
  margin: 0;
`

let Heading5 = styled.h5`
  font-size: 1rem;
  font-weight: 400; // normal
  margin: 0;
`

let Text = styled.p`
  font-size: 1rem;
  font-weight: 400; // normal
  margin: 0;
`

let TextBold = styled.p`
  font-size: 1rem;
  font-weight: 700; // bold
  margin: 0;
`

let LabelTiny = styled.span`
  font-size: 0.8rem;
  font-weight: 400; // bold
  margin: 0;
`

let ClearBG = styled.div`
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let BlackBG = styled.div`
  background-color: #000000;
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let BarnardBlueBG = styled.div`
  background-color: #00489A
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let ColumbiaBlueBG = styled.div`
  background-color: #62A8E5;
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let BorderBG = styled.div`
  border: solid 1px #DDDDDD;
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let Black = styled.h3`
  color: #000000;
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let BarnardBlue = styled.h3`
  color: #00489A
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let ColumbiaBlue = styled.h3`
  color: #62A8E5;
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let White = styled.h3`
  color: #FFFFFF;
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let TextGray = styled.h3`
  color: #555555;
  margin: 0.2rem 0;
  padding: 0.3rem;
`

let DecorGray = styled.h3`
  color: #DDDDDD;
  margin: 0.2rem 0;
  padding: 0.3rem;
`

export default class ThemeGuide extends Component {
  render() {
    return (
      <Theme>
        <ThemeSection>
        <SectionName>Fonts</SectionName>
        <Heading1>Heading1</Heading1>
        <Heading2>Heading2</Heading2>
        <Heading3>Heading3</Heading3>
        <Heading4>Heading4</Heading4>
        <Heading5>Heading5</Heading5>
        <br/>
        <Text>Text</Text>
        <TextBold>TextBold</TextBold>
        <br/>
        <LabelTiny>LabelTiny</LabelTiny>
        </ThemeSection>

        <ThemeSection>
        <SectionName>Colors</SectionName>
        <ClearBG><Black>Black</Black></ClearBG>
        <ClearBG><BarnardBlue>BarnardBlue</BarnardBlue></ClearBG>
        <ClearBG><ColumbiaBlue>ColumbiaBlue</ColumbiaBlue></ClearBG>
        <BlackBG><White>White on BlackBG</White></BlackBG>
        <BarnardBlueBG><White>White on BarnardBlueBG</White></BarnardBlueBG>
        <ColumbiaBlueBG><White>White on ColumbiaBlueBG</White></ColumbiaBlueBG>
        <ClearBG><TextGray>TextGray</TextGray></ClearBG>
        <BorderBG><DecorGray>DecorGray</DecorGray></BorderBG>
        </ThemeSection>
      </Theme>
    );
  }
}
