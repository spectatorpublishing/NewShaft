import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import sad from "../assets/Icons/sad.svg";
import happy from "../assets/Icons/happy.svg";
import icon from "../assets/marker.svg"; // to-do: import all actual icons

let ProConTitle = styled.h2`
  font-size: 2rem;
  font-weight: 48;
  margin-bottom: 1rem;
  color: #707070;

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 1rem;
	}
`;

const Section = styled.div`
    display: flex;
    margin-top: 1rem;

    @media only screen and (max-width: 767px) {
      margin: 0;
      flex-direction: column;
      margin-top: 1rem;
      padding-right: 1rem;
	  }
`
const ListBox = styled.div`
    flex: 1;

    @media only screen and (max-width: 767px) {
      margin-bottom: 1.5rem;
	  }
`

const ListPoints = styled.ul`
  padding-inline-start: 1.2rem;
  margin-left: 1rem;

  @media only screen and (max-width: 767px) {
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    margin: 0;
	}
`

const AmenityIcon = styled.img`
  opacity: 0.5;
  height: 20px;
`

const Amenity = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`


const ProCon = (props) => {
  const [width, setWindowWidth] = useState(window.innerWidth);
  
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    function watchResize() {
      window.addEventListener("resize", handleResize);
    }
    watchResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

        return (
          <div>
            <Section>
            <ListBox>
                <ProConTitle>Pros</ProConTitle>
                <ListPoints>
                  {props.pros? 
                    props.pros.map(pro => (
                      <li>{pro}</li>))
                    : null}
                </ListPoints>
            </ListBox>
            <ListBox>
                <ProConTitle>Cons</ProConTitle>
                <ListPoints>
                {props.cons? 
                    props.cons.map(con => (
                      <li>{con}</li>))
                    : null}
                </ListPoints>
            </ListBox>
          </Section>
          </div>
        );
}

export default ProCon;