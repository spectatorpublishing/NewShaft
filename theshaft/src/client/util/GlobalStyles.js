import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,700,800');
    font-family: 'Raleway', sans-serif;
    }
    h1 {
    font-size: 3rem;
    font-weight: 800; // extra bold
    margin: 0;
    }
    h2 {
    font-size: 1.7rem;
    font-weight: 700; // bold
    margin: 0;
    }
    h3 {
    font-size: 1.3rem;
    font-weight: 700; // bold
    margin: 0;
    }
    h4 {
    font-size: 1rem;
    font-weight: 700; // bold
    margin: 0;
    }
    h5 {
    font-size: 1rem;
    font-weight: 400; // normal
    margin: 0;
    }
    h6 {
    font-size: 0.8rem;
    font-weight: 700; // bold
    margin: 0;
    }
    p {
    font-size: 1rem;
    font-weight: 400; // normal
    margin: 0;
    }
    b {
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
    lightGray: "#DDDDDD",
    textShadow: "rgba(0, 0, 0, 0.3) 0 0 10px"
};
