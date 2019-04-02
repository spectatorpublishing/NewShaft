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
    height: 150vh;
    padding: 0 auto;
    overflow: hidden;
    flex-direction: column;
    background-color: ${props => props.theme.lightGray}
    overflow-y: scroll;
`

let Housing101ContainerMobile = styled.div`
    overflow: hidden;
    flex-direction: column;
    align-items: center;
`

let ToggleMobileView = styled.div`
    height: 50px;
    display: flex;
    position: relative;
    z-index: 1;
    align-items: center;
    color: ${props => props.theme.black};
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.3);
    &>div{
      flex-grow: 1;
      text-align: center;
      margin: 0 10%;
      padding: 10px 0;
    }
    &>div:nth-child(2n+${props => String(props.currActive)}){
      border-bottom: 5px solid ${props => props.theme.columbiaBlue};
    }
`

let PageBG = styled.div`
    background-color: ${props => props.theme.lightGray};
    width: 100%;
    height: 100%;
`

let SomeText = styled.h5`
    color: ${props => props.theme.darkGray};
    font-size: 1.6em;
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
                        {FAQBubbleMapped}
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


