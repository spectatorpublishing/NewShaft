import React from "react";
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

let ThemeSection = styled.div`
  margin: 2rem;
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
  ${props => props.theme.grayBorder}
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
  ${props => props.theme.textShadow}
`

let DarkGray = styled.h3`
  color: ${props => props.theme.darkGray};
`

let LightGray = styled.h3`
  color: ${props => props.theme.lightGray};
`

storiesOf('Style Guide', module)
  .add('Fonts', () => 
    <ThemeSection>
      <h1>Heading1 {"<h1>"}</h1>
      <h2>Heading2 {"<h2>"}</h2>
      <h3>Heading3 {"<h3>"}</h3>
      <h4>Heading4 {"<h4>"} - (identical to {"<b>"})</h4>
      <h5>Heading5 {"<h5>"} - (identical to {"<p>"})</h5>
      <h6>Heading6 {"<h6>"} - use only as caption or fine print (hard to read)</h6>
      <br/>
      <p>Text {"<p>"} - (identical to {"<h5>"}</p>
      <b>TextBold {"<b>"} - (identical to {"<h4>"})</b>
    </ThemeSection>
  )
  .add('Colors', () => 
    <ThemeSection>
      <b>Pass colors in through Styled Components' theme prop like so:</b>
      <br/>
      <code>{"${props => props.theme.colorNameHere}"}</code>
      <br/>
      <br/>
      <h6>e.g.</h6>
      <code>{"color: ${props => props.theme.columbiaBlue};"}</code>
      <h6>renders as</h6>
      <code>{"color: #62A8E5;"}</code>
      <br/>
      <br/>
      <h6>except `textShadow` should only be used with the `text-shadow` css property:</h6>
      <code>{"text-shadow: ${props => props.theme.textShadow};"}</code>
      <h6>which renders as</h6>
      <code>{"text-shadow: rgba(0, 0, 0, 0.3) 0 0 10px;"}</code>
      <br/>
      <br/>
      <ClearBG><Black>black</Black></ClearBG>
      <ClearBG><BarnardBlue>barnardBlue</BarnardBlue></ClearBG>
      <ClearBG><ColumbiaBlue>columbiaBlue</ColumbiaBlue></ClearBG>
      <BlackBG><White>white on black</White></BlackBG>
      <BarnardBlueBG><White>white on barnardBlue</White></BarnardBlueBG>
      <ColumbiaBlueBG><WhiteShadowed>white with textShadow on columbiaBlue</WhiteShadowed></ColumbiaBlueBG>
      <ClearBG><WhiteShadowed>textShadow</WhiteShadowed></ClearBG>
      <ClearBG><DarkGray>darkGray</DarkGray></ClearBG>
      <BorderBG><LightGray>lightGray with lightGray border</LightGray></BorderBG>
      <br/>
      <br/>
      <b>Styled Component Source Code:</b>
      <br/>
      <code>{`
      let BlackBG = styled(ClearBG)\`
      background-color: ${props => props.theme.black};
      \`
      `}</code>
      <br/>
      <code>{`
      let BarnardBlueBG = styled(ClearBG)\`
      background-color: ${props => props.theme.barnardBlue};
      \`
      `}</code>
      <br/>
      <code>{`
      let ColumbiaBlueBG = styled(ClearBG)\`
      background-color: ${props => props.theme.columbiaBlue};
      \`
      `}</code>
      <br/>
      <code>{`
      let BorderBG = styled(ClearBG)\`
      ${props => props.theme.grayBorder}
      \`
      `}</code>
      <br/>
      <code>{`
      let Black = styled.h3\`
      color: ${props => props.theme.black};
      \`
      `}</code>
      <br/>
      <code>{`
      let BarnardBlue = styled.h3\`
      color: ${props => props.theme.barnardBlue};
      \`
      `}</code>
      <br/>
      <code>{`
      let ColumbiaBlue = styled.h3\`
      color: ${props => props.theme.columbiaBlue};
      \`
      `}</code>
      <br/>
      <code>{`
      let White = styled.h3\`
      color: ${props => props.theme.white};
      \`
      `}</code>
      <br/>
      <code>{`
      let WhiteShadowed = styled(White)\`
      ${props => props.theme.textShadow}
      \`
      `}</code>
      <br/>
      <code>{`
      let DarkGray = styled.h3\`
      color: ${props => props.theme.darkGray};
      \`
      `}</code>
      <br/>
      <code>{`
      let LightGray = styled.h3\`
      color: ${props => props.theme.lightGray};
      \`
      `}</code>
    </ThemeSection>
  );