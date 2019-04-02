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

// let ToggleMobileView = styled.div`
//     height: 50px;
//     display: flex;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     color: ${props => props.theme.black};
//     text-transform: uppercase;
//     font-weight: bold;
//     box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.3);
//     &>div{
//       flex-grow: 1;
//       text-align: center;
//       margin: 0 10%;
//       padding: 10px 0;
//     }
//     &>div:nth-child(2n+${props => String(props.currActive)}){
//       border-bottom: 5px solid ${props => props.theme.columbiaBlue};
//     }
// `

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
            {
                "title": "Housing Registration Basics",
                "content": [
                    {
                        "subtitle": "Group vs. Individual Selection",
                        "body": "Groups consist of two to eight people and must be decided upon when you register. The recommended deadline to form and verify a group for Columbia students was Wednesday, March 6. Once groups are formed, they can only be broken, not expanded, with the exception of senior/junior regroup. In-person room selection occurs between April 2 and April 8 this year and is only available for groups. Individuals, along with groups that don’t choose during in-person selection, choose rooms through online room selection in the second half of April. "
                    },
                    {
                        "subtitle": "Difference between in-person and online room selection",
                        "body": "If you’re planning on living in a double or suite next semester, your group will be invited to John Jay Lounge (aka “The Cage”) sometime between April 2 and April 8 based on your lottery number. (Read this article to learn more about the room selection timeline.) All group members must be present or send proxies to select rooms; proxies must be made during the registration application before the appointment. The suites picked must match the size of your group, though during in-person selection, rising sophomores in groups have the additional option of pairing off and selecting doubles in corridor-style halls like McBain or Wien. &#10; If you’re in a group and can’t make your in-person appointment, you can also choose to drop to online selection. Although your group will retain its lottery number, be aware that some of the more popular rooms might be gone by the time online registration rolls around. &#10; If you’re applying as an individual or aren’t able to select a room with your group, you’ll be automatically given an online registration appointment sometime between April 15 and 30. During your appointment slot, you’ll be able to select singles, half-filled doubles, or full-doubles. If you were originally in a group that wasn’t able to secure a suite, online registration is a great opportunity to find rooms on the same floor so you can still be near your friends next semester."
                    }
                ]
            }
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


