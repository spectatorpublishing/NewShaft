import React, { Component } from "react";
import styled from 'styled-components';
import { theme } from "../util/GlobalStyles";
import FAQBubble from "../components/FAQBubble";


let Blurb = styled.div`
  background-color: ${props => props.theme.columbiaBlue};
  color: ${props => props.theme.white};
  position: relative;
  top: -100px;
  min-height: 40px;
  margin: 0 15% -100px 15%;
  padding: 1.8vw;
  border-radius: 20px;
  @media only screen and (max-width: 767px) {
    top: -220px;
    margin-bottom: -220px;
    min-height: 80px;
  }
`;


export default class FAKEfaqbubblecontainer extends React.PureComponent {
    constructor(props) {
        super(props);
        let screen_width = window.innerWidth;

        this.state = {
            width: screen_width
        }
    }

    render() {

        const isMobile = this.state.width <= 768;

        let fullDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod tincidunt dolor. Nullam sit amet tristique lectus, ac vulputate mauris. In hac habitasse platea dictumst. Duis at vulputate enim. Quisque sed eros in augue fermentum finibus sed at libero. Nunc accumsan est non finibus euismod. Curabitur et lorem ligula. Maecenas luctus lacinia est, ultricies elementum massa viverra in. Praesent tincidunt vitae dui ut fringilla. Maecenas eleifend magna ut velit vehicula vehicula et eu mi.";
        let truncatedDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        return(
            <div>
                {(isMobile && truncatedDescription) ? 
                    <FAQBubble 
                    custom={{
                        boxStyle: `
                        background-color: "white";
                        position: relative;
                        top: -100px;
                        min-height: 40px;
                        margin: 0 15% -100px 15%;
                        padding: 1.8vw;
                        border-radius: 20px;
                        @media only screen and (max-width: 767px) {
                            top: -220px;
                            margin-bottom: -220px;
                            min-height: 80px;
                        }
                        `,
                        color: "white",
                        textColor: theme.white,
                    }} 
                    showAll={fullDescription}
                    showSome={truncatedDescription}
                    />
                :
                    <Blurb>{fullDescription}</Blurb>
                }
            </div>
        );
    }
}




