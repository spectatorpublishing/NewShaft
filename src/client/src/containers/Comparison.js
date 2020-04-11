import React, { Component } from 'react';
import styled from 'styled-components';
import FAQBubble from "../components/FAQBubble.js";
import { theme } from "../util/GlobalStyles";
import DropDown from '../components/DropDown.js';
import CompareCarousel from '../components/CompareCarousel.js'
import claremont from '../assets/47 Claremont 1.svg'

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

let DropDownContainer = styled.div`
    display: flex;
    flex-direction: row;
    align items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`
let CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    align items: center;
    justify-content: center;
`
const def = [claremont, claremont, claremont, claremont] /*claremont svg as a placeholder for testing carousel*/


export default class Housing101 extends Component {
    constructor(props){
        super(props);

        this.state = {
            width : window.innerWidth,
            Dorm1 : "Select Dorm",
            Dorm2 : "Select Dorm",
            Dorm3 : "Select Dorm",
            Dorm1urls : def, 
            Dorm2urls : def,
            Dorm3urls : def,
        }

        this.handleDorm1Change = this.handleDorm1Change.bind(this);
        this.handleDorm2Change = this.handleDorm2Change.bind(this);
        this.handleDorm3Change = this.handleDorm3Change.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
    }

    handleUrlChange(Name) {
        /*URLS1-3 are a placeholder for arrays that hold a list of image files for the carousel*/
            if (Name == '47 Claremont') {
                return 'URLS1'
            } else if (Name == 'Nussbaum') {
                return 'URLS2'
            } else if (Name == 'McBain') {
                return 'URLS3'
            } else {
                return def
            }
            
    }

    handleDorm1Change(Name1) {
        this.setState({Dorm1: Name1, Dorm1urls: this.handleUrlChange(Name1)})
    }

    handleDorm2Change(Name2) {
        this.setState({Dorm2: Name2, Dorm2urls: this.handleUrlChange(Name2)})
    }

    handleDorm3Change(Name3) {
        this.setState({Dorm3: Name3, Dorm3urls: this.handleUrlChange(Name3)})
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
                        
                        <DropDownContainer>
                        <DropDown 
                            Name = {this.state.Dorm1}
                            OnNameChange = {this.handleDorm1Change}
                        />

                        <DropDown 
                            Name = {this.state.Dorm2}
                            OnNameChange = {this.handleDorm2Change}
                        />
                    </DropDownContainer>
                    <CarouselContainer> 
                        <CompareCarousel
                            imgUrls = {this.state.Dorm1urls}
                        />
                        <CompareCarousel
                            imgUrls = {this.state.Dorm2urls}
                        />
                    </CarouselContainer>
                    </BlueBGMobile> 
                    </ComparisonContainerMobile>
                </div>
            );
        } 
        else{
            return(
            
                <ComparisonContainer>
                    <Title>Comparison Page</Title>
                    <DropDownContainer>
                        <DropDown 
                            Name = {this.state.Dorm1}
                            OnNameChange = {this.handleDorm1Change}
                        />

                        <DropDown 
                            Name = {this.state.Dorm2}
                            OnNameChange = {this.handleDorm2Change}
                        />

                        <DropDown 
                            Name = {this.state.Dorm3}
                            OnNameChange = {this.handleDorm3Change}
                        />
                    </DropDownContainer>
                    <CarouselContainer> 
                        <CompareCarousel
                            imgUrls = {this.state.Dorm1urls}
                        />
                        <CompareCarousel
                            imgUrls = {this.state.Dorm2urls}
                        />
                        <CompareCarousel
                            imgUrls = {this.state.Dorm3urls}
                        />
                    </CarouselContainer>
                </ComparisonContainer>
            
            );
        }
    }
}


