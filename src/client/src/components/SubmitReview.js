import React, { useState } from 'react';
import styled from 'styled-components';
import '../css/SubmitReview.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




const Base = styled.div`
    position: center;
    margin: 0 0 4rem 0;
    overflow:auto;
    padding: 1rem 0 0 0;
    display:flex;
    flex-direction: column;
    align-items:center;
`

const Title = styled.h1`
    color: #FFFFFF;
    font-weight: 900;
    font-size:2.5rem;
    line-height: 3rem;
    padding: 0 1rem 0 1rem;
`

const Question = styled.div`
    width: 60%;
    margin: 0 0 2rem 0;
`

const Caption = styled.div`
    color: #FFFFFF;
    font-size: 1.2rem;
    display:flex;
    margin: 1rem 0 1rem 0;
`

const TextEnter = styled.input`
    background: #C4C4C4;
    border:none;
    width:100%;
    height: 2rem;
`

const Note = styled.p`
    color:lightgray;
    font-size: .7rem;
    margin:.5rem 0 -.7rem 0;
`

const Submit = styled.button`
    background:#73A6E0;
    color: #FFFFFF;
    border:none;
    border-radius: 16px;
    width: 16rem;
    height: 4rem;
    font-family: Raleway;
    font-size: 1.6rem;
`

const Close =  styled.button`
    margin-top: 1.5rem;
    font-family: Raleway;
    background:none;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 16px;
    width: 7rem;
    height: 2.8rem;
    font-size: 1.3rem;
`

const SubmitReview = () => {
    const [building,setBuilding]=useState('');
    const [room,setRoom]=useState('');
    const [year,setYear]=useState('');
    const [rating,setRating]=useState('');
    const [explanation,setExplanation]=useState('');


    return (
        <Base>
            <Title>Submit a Review for Dorm</Title>
            <Question>
                <Caption>Which Building? *</Caption>
                <DropdownButton
                    title={building}
                    id="dd"
                    onSelect={setBuilding}
                    >
                        <Dropdown.Item className="item" eventKey="47 Claremont">47 Claremont</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="600 W 113th">600 W 113th</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Broadway">Broadway</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Carlton Arms">Carlton Arms</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="East Campus">East Campus</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Furnald Hall">Furnald Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Harmony Hall">Harmony Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Hogan Hall">Hogan Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="McBain Hall">McBain Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="River Hall">River Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Ruggles Hall">Ruggles Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Schapiro Hall">Schapiro Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Watt Hall">Watt Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Wien Hall">Wien Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Woodbridge Hall">Woodbridge Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Hewitt Hall">Hewitt Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Elliot Hall<">Elliot Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Sulzberger Tower">Sulzberger Tower</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="600 W 116th">600 W 116th</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="616 W 116th">616 W 116th</Dropdown.Item>   
                        <Dropdown.Item className="item" eventKey="620 W 116th">620 W 116th</Dropdown.Item> 
                        <Dropdown.Item className="item" eventKey="601 W 110th">601 W 110th</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Cathedral Gardens">Cathedral Gardens</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Plimpton Hall">Plimpton Hall</Dropdown.Item>
                </DropdownButton>
            </Question>
            <Question>
                <Caption>Which Room? *</Caption>
                <form>
                    <TextEnter type="text" onChange={setRoom} maxLength="20" />
                    <Note>Maximum length: 20 characters</Note>
                </form>
            </Question>
            <Question>
                <Caption>Which Year? *</Caption>
                <DropdownButton
                    title={year}
                    id="dd"
                    onSelect={setYear}
                    >
                        <Dropdown.Header className="comment">Most recent residence:</Dropdown.Header>
                        <Dropdown.Item className="item" eventKey="2017">2017</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="2018">2018</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="2019">2019</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="2020">2020</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="2021">2021</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Furnald Hall">Furnald Hall</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="Harmony Hall">Harmony Hall</Dropdown.Item>
                </DropdownButton>
            </Question>
            <Question>
                <Caption>Rating? *</Caption>
                <DropdownButton
                    title={rating}
                    id="dd"
                    onSelect={setRating}
                    >
                        <Dropdown.Header className="comment">Number of stars:</Dropdown.Header>
                        <Dropdown.Item className="item" eventKey="1 Star (Worst)">1 (Worst)</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="2 Stars">2</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="3 Stars">3</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="4 Stars">4</Dropdown.Item>
                        <Dropdown.Item className="item" eventKey="5 Stars (Best)">5 (Best)</Dropdown.Item>
                </DropdownButton>
            </Question>
            <Question>
                <Caption>Why this Rating? *</Caption>
                <form>
                    <TextEnter type="text" onChange={setExplanation} maxLength="300"/>
                    <Note>Maximum length: 300 characters</Note>
                </form>
            </Question>
            <Submit>Submit Review</Submit>
            <Close>Close</Close>
        </Base>
    )
}

export default SubmitReview;