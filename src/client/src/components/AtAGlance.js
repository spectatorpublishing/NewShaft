import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  
`;

const SectionTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: #707070;
  font-family: Raleway;

  @media only screen and (max-width: 767px) {
    font-weight: 500;
    color: #707070;
    display:flex;
	}
`;

const Detail = styled.div`
  font-family: sans-serif;
  padding-top: 0.5rem;
  padding-bottom:0.25rem;
  border-bottom:1px solid #C4C4C4;
  font-size:18px;

  @media only screen and (max-width: 767px) {
    border-bottom:0px solid #C4C4C4;
  }

`
const AtAGlanceTitle = styled.div`
  display:flex;
  font-family: Raleway;
  padding-bottom:0.25rem;
  color: #73A6E0;

  @media only screen and (max-width: 767px) {
    padding-bottom: 1rem;
  }
`

const AtAGlanceText = styled.div`
  display:flex;
  font-family: Raleway;
  padding-bottom:0.25rem;
  color: #0000008F;

  @media only screen and (max-width: 767px) {
    padding-bottom: 1rem;
  }
`

const AtAGlance = (props) => {
  return (
    <Wrapper>
      <SectionTitle>At a Glance</SectionTitle>
      <Detail>
        <AtAGlanceTitle>Location</AtAGlanceTitle>
        <AtAGlanceText>{props.address}</AtAGlanceText>
      </Detail>
      <Detail>
        <AtAGlanceTitle>Room Types</AtAGlanceTitle>
        <AtAGlanceText>{props.roomtype}</AtAGlanceText>
      </Detail>
      <Detail>
        <AtAGlanceTitle>Class Makeup</AtAGlanceTitle>
        <AtAGlanceText>{props.classMakeup}</AtAGlanceText>
      </Detail>
    </Wrapper>
  );
}

export default AtAGlance;
