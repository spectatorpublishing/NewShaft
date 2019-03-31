import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,
  button {
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,700,800');
    font-family: 'Raleway', sans-serif;
  }
  div {
    color: ${props => props.theme.darkGray};
  }
  h1 {
    color: ${props => props.theme.darkGray};
    font-size: 3rem;
    font-weight: 800; // extra bold
    margin: 0;
  }
  h2 {
    color: ${props => props.theme.darkGray};
    font-size: 1.7rem;
    font-weight: 700; // bold
    margin: 0;
  }
  h3 {
    color: ${props => props.theme.darkGray};
    font-size: 1.3rem;
    font-weight: 700; // bold
    margin: 0;
  }
  h4 {
    color: ${props => props.theme.darkGray};
    font-size: 1rem;
    font-weight: 700; // bold
    margin: 0;
  }
  h5 {
    color: ${props => props.theme.darkGray};
    font-size: 1rem;
    font-weight: 400; // normal
    margin: 0;
  }
  h6 {
    color: ${props => props.theme.darkGray};
    font-size: 0.8rem;
    font-weight: 700; // bold
    margin: 0;
  }
  p {
    color: ${props => props.theme.darkGray};
    font-size: 1rem;
    font-weight: 400; // normal
    margin: 0;
  }
  b {
    color: ${props => props.theme.darkGray};
    font-size: 1rem;
    font-weight: 700; // bold
    margin: 0;
  }
`

export const theme = {
  black: "#000000",
  white: "#FFFFFF",
  barnardBlue: "#00489A",
  columbiaBlue: "#62A8E5",
  darkGray: "#555555",
  mediumGray: "#AAAAAA",
  lightGray: "#DDDDDD",
  shadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  grayBorder: "border: 1px #DDDDDD solid; border-radius: 10px;",
  borderRadius: "10px",
};
