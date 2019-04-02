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
            },
            {
                "title": "Housing as a Group",
                "content": [
                    {
                        "subtitle": "How do mixed year groups work?",
                        "body": "The order of room selection is determined first by point value and then lottery number. First-years have a default of 10 points, sophomores have 20 points, and juniors have 30 points. If you’ve got a healthy mix of rising sophomores, juniors, and seniors in your group, the point value of your group will be determined by the average of its CC and SEAS members. For example, a group with two seniors, three juniors and one sophomore will have a point value of 21.67. Such a group would choose after all exclusively senior groups, but before exclusively junior groups. Members in such groups are unable to participate in senior/junior regroup or sophomore pair-up."
                    },
                    {
                        "subtitle": "What is sophomore pair-up?",
                        "body": "During in-person group selection, groups of four to eight people comprised exclusively of rising sophomores have the option to split up into pairs and select corridor doubles. Given how difficult the housing situation is for sophomores, we strongly suggest that you form an even-numbered group of two to eight people if you’re currently a first-year. This way, even if your group doesn’t get a great lottery number and all the suites are taken, you’ll still be able to room with a friend instead of ending up in a blind double in the McBain shaft."
                    },
                    {
                        "subtitle": "What is senior regroup?",
                        "body": "If your group is entirely made up of rising seniors and you aren’t able to get the all-single suite in EC that you wanted (we do love those low lottery numbers), senior regroup is your second chance to live at the center of the party scene. For senior regroup, you’ll be invited into the John Jay Lounge again and given the chance to choose a room with a new two to eight person group before the juniors."
                    },
                    {
                        "subtitle": "What is junior regroup?",
                        "body": "Groups exclusively made up of rising juniors can choose to participate in junior regroup, which follows the same process as senior regroup. Junior regroup takes place after all junior and senior groups have selected, but before the sophomores have."
                    }
                ]
            },
            {
                "title": "Special Housing",
                "content": [
                    {
                        "subtitle": "How does the Barnard/Columbia housing exchange work?",
                        "body": "Up to 40 Barnard students will be able to live in Columbia residence halls (and vice-versa) each year through the Barnard/Columbia housing exchange. Rising seniors at Barnard can register for Columbia in-person suite selection, and Barnard students of all class levels can apply to live in Special Interest Communities and Greek housing. Columbia College and School of Engineering and Applied Science students can also register for Barnard Room Selection. Columbia students who identify as male can only join a Barnard suite if the group they are in fills the entire suite. For more details, read here about Barnard Students Living at Columbia (BC@CU) and Columbia Students Living at Barnard (CU@BC)."

                    },
                    {
                        "subtitle": "How does housing work if I want to study abroad?",
                        "body": "If you’re returning from either one or two semesters of study abroad, welcome back, and don’t worry about housing: Columbia guarantees housing for all students on approved study abroad. To select your room, either register and select a room online or find a friend and designate them as a proxy to select a room for you during in-person group selection."
                    },
                    {
                        "subtitle":"Where and how can I get disability accommodations?",
                        "body": "For disability accommodations, fill out and submit this form as soon as possible, by either emailing it to disability@columbia.edu or sending it to the Disability Services office in Wien Hall. The deadline to submit the form was February 1st for the fall semester next year, but late applications will still be accepted and considered. Accommodations will be made on a case-by-case basis."
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


