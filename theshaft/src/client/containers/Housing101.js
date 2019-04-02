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

let Housing101Container = styled.div`
    display: flex;
    width: 100vw;
    padding: 0 auto;
    flex-direction: column;
    background-color: ${props => props.theme.lightGray}
`

let Housing101ContainerMobile = styled.div`
    overflow: hidden;
    flex-direction: column;
    align-items: center;
`

let PageBG = styled.div`
    background-color: ${props => props.theme.lightGray};
    width: 100%;
    min-height: 100vh;
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

        //descriptions need to be passed from elsewhere
        let titleText = "Lorem ipsum";
        let fullDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod tincidunt dolor. Nullam sit amet tristique lectus, ac vulputate mauris. In hac habitasse platea dictumst. Duis at vulputate enim. Quisque sed eros in augue fermentum finibus sed at libero. Nunc accumsan est non finibus euismod. Curabitur et lorem ligula. Maecenas luctus lacinia est, ultricies elementum massa viverra in. Praesent tincidunt vitae dui ut fringilla. Maecenas eleifend magna ut velit vehicula vehicula et eu mi.";
        let truncatedDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        // console.log(truncatedDescription);

        let faqMap = [
            ["Lorem ipsum","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod tincidunt dolor. Nullam sit amet tristique lectus, ac vulputate mauris. In hac habitasse platea dictumst. Duis at vulputate enim. Quisque sed eros in augue fermentum finibus sed at libero. Nunc accumsan est non finibus euismod. Curabitur et lorem ligula. Maecenas luctus lacinia est, ultricies elementum massa viverra in. Praesent tincidunt vitae dui ut fringilla. Maecenas eleifend magna ut velit vehicula vehicula et eu mi."],
            ["Lorem ipsum","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod tincidunt dolor. Nullam sit amet tristique lectus, ac vulputate mauris. In hac habitasse platea dictumst. Duis at vulputate enim. Quisque sed eros in augue fermentum finibus sed at libero. Nunc accumsan est non finibus euismod. Curabitur et lorem ligula. Maecenas luctus lacinia est, ultricies elementum massa viverra in. Praesent tincidunt vitae dui ut fringilla. Maecenas eleifend magna ut velit vehicula vehicula et eu mi."],
            ["Lorem ipsum","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod tincidunt dolor. Nullam sit amet tristique lectus, ac vulputate mauris. In hac habitasse platea dictumst. Duis at vulputate enim. Quisque sed eros in augue fermentum finibus sed at libero. Nunc accumsan est non finibus euismod. Curabitur et lorem ligula. Maecenas luctus lacinia est, ultricies elementum massa viverra in. Praesent tincidunt vitae dui ut fringilla. Maecenas eleifend magna ut velit vehicula vehicula et eu mi."]
        ];

        let end = isMobile ? 40 : 110;

        const FAQBubbleMapped = faqMap.map((el, i) => {
            if (el[1] && el[1] != "" && el[1] != "0" && el[1] != " ") {
                return(
                    <FAQBubble 
                        titleText={el[0]}
                        showAll={
                            <SomeText>  {el[1]}  </SomeText>
                        }
                        showSome={
                            <SomeText>  {el[1].substring(0,end)}... </SomeText>
                        }
                    />
                );
            }
        });


        if (isMobile) {
            return (
                <div>
                    <Housing101ContainerMobile>
                    <BlueBGMobile>
                        <Title>Housing 101</Title>
                    </BlueBGMobile> 
                    <PageBG>
                        {FAQBubbleMapped}
                    </PageBG>
                    </Housing101ContainerMobile>
                </div>
            );
        } 
        else{
            return(
            
                <Housing101Container>
                    <Title>Housing 101</Title>
                    <PageBG>
                        {FAQBubbleMapped}
                    </PageBG>
                </Housing101Container>
            
            );
        }
    }
}


