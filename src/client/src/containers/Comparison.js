import React, { Component } from 'react';
import styled from 'styled-components';
import FAQBubble from "../components/FAQBubble.js";
import { theme } from "../util/GlobalStyles";

let Title = styled.div`
    width:100%;
    text-align:center;
    font-size:2.5rem;
    background-color:${props => props.theme.columbiaBlue}; 
    color: 	${props => props.theme.white};
    border:none;
    padding-top:1rem;
    padding-bottom:1rem;
    font-weight: bold;
    @media only screen and (max-width: 992px){
        font-size:1.5rem;
    }
`

let BlueBGMobile = styled.div`
  background-color: ${props => props.theme.columbiaBlue};
`

let ComparisonContainer = styled.div`
    display: flex;
    width: 100vw;
    padding: 0 auto;
    flex-direction: column;
    background-color: ${props => props.theme.lightGray}
`

let ComparisonContainerMobile = styled.div`
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.lightGray};
`

let SomeText = styled.p`
    color: ${props => props.theme.darkGray};
`

export default class Housing101 extends Component {
    constructor(props){
        super(props);

        this.state = {
            width : window.innerWidth
        }
    }

    render(){
        const { width } = this.state;
        const isMobile = width <= 700;
        const isMedium = this.state.width <= 1400;
        const housing = [
            {
                "title": "Welcome to theSHAFT",
                "content": [
                    {
                        "subtitle": "What is 'the shaft'",
                        "body": "We’re not sure that the McBain shaft exists for any purpose other than to remind you every time you enter your room that you lost the housing lottery. Located within the vertical passages in and between buildings, shafted rooms, which can be found in McBain, Broadway, Woodbridge, and 47 Claremont, are usually hot, noisy and dark, although one perk is that they usually have air conditioning, which can be a game changer."
        
                    }
                   
                ]
            },
    
        ]

        let end = isMobile ? 80 : 200;

        const FAQBubbleMapped = housing.map((el, i) => {
                return(
                    <FAQBubble 
                        titleText={el["title"]}
                        showAll={el["content"]}
                        
                        showSome={el["content"]}
                    />
                );
            }
        );


        if (isMobile) {
            return (
                <div>
                    <ComparisonContainerMobile>
                    <BlueBGMobile>
                        <Title>Comparison Page</Title>
                    </BlueBGMobile> 
                    </ComparisonContainerMobile>
                </div>
            );
        } 
        else{
            return(
            
                <ComparisonContainer>
                    <Title>Comparison Page</Title>
                </ComparisonContainer>
            
            );
        }
    }
}


