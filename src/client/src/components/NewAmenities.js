import React, {useState, useEffect} from 'react'
import styled from 'styled-components/macro'
import laundry from '../assets/laundry-icon.png'
import bathroom from '../assets/bathroom-icon.png'
import gym from '../assets/gym-icon.png'
import practiceRoom from '../assets/practice-room-icon.png'
import kitchen from '../assets/kitchen-icon.png'
import ac from '../assets/ac-icon.png'
import computerLab from '../assets/computer-lab-icon.png'
import bike from '../assets/bike-icon.png'
import carpet from '../assets/carpet-icon.png'
import lounge from '../assets/sofa-icon.png'
import printer from '../assets/printer-icon.png'
import wheelchair from '../assets/wheelchair-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'

const AmenityHeader = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size:1.2rem;
  font-weight:400;
  padding-bottom:0.7rem;
  @media only screen and (max-width: 768px){
    font-size:1rem;
  }
`
const AmenityIncluded = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size:1rem;
  font-weight:400;
  color:${props=> props.color};
  padding-left: .6rem;
  @media only screen and (max-width: 768px){
    font-size:0.8rem;
  }
`

const AmenityWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  flex-wrap:wrap;
  justify-content:space-between;
  @media only screen and (max-width: 768px){
    flex-direction:column;
  }
`
const Amenity = styled.div`
  display:flex;
  flex-direction:column;
  width:45%;
  flex-wrap:wrap;
  padding:1rem 0rem;
  @media only screen and (max-width: 768px){
    width:100%;
  }
`
const Span = styled.span`
  padding-left:0.5rem;
`

const Icon =styled.img`
  width:1.2rem;
  margin-right:1rem;
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

const NewAmenities = (props) => {
  
  const amenitiesMap = {
    BATHROOM: "Bathroom",
    FLOORING: "Floor",
    KITCHEN: "Kitchen",
    LOUNGE: "Lounge",
    LAUNDRY: "Laundry",
    AC: "Air Conditioning",
    COMPUTER: "Computer Lab",
    PRINT: "Printer",
    GYM: "Gym",
    BIKE: "Bike Storage",
    MUSIC: "Practice Rooms",
    ACCESS: "Accessible Entrance"
  }

  const amenitiesIcons = {
    BATHROOM: bathroom,
    FLOORING: carpet,
    KITCHEN: kitchen,
    LOUNGE: lounge,
    LAUNDRY: laundry,
    AC: ac,
    COMPUTER: computerLab,
    PRINT: printer,
    GYM: gym,
    BIKE: bike,
    MUSIC: practiceRoom,
    ACCESS: wheelchair
  }

  // for schapiro
  const TestData = {
    S_BATHROOM: 0,
    C_BATHROOM: 0,
    BOTH_BATHROOM: 1,
    F_KITCHEN: 1,
    S_KITCHEN: 0,
    B_KITCHEN: 0,
    CARPET: 0,
    WOOD_TILE: 1,
    F_LOUNGE: 1,
    SUITE_LOUNGE: 0,
    L_LOUNGE: 1,
    SKY_LOUNGE: 1,
    LAUNDRY: 1,
    AC: 1,
    COMPUTER: 1,
    PRINT: 1,
    GYM: 0,
    BIKE: 0,
    MUSIC: 1,
    ACCESSIBLE: 1
  }

  return (
    <AmenityWrapper>
      {Object.keys(amenitiesMap).map(amenityKey => {
        return (
          <Amenity> 
              <AmenityHeader><Icon src={amenitiesIcons[amenityKey]}/>{amenitiesMap[amenityKey]} </AmenityHeader>
              {(props.amenities && props.amenities[amenityKey]==1) ? 
                <AmenityIncluded color="#73A6E0" ><FontAwesomeIcon icon={faCheck} /> <Span>Included</Span> </AmenityIncluded>
                : <AmenityIncluded color="#9A4A4A" ><FontAwesomeIcon icon={faTimes} /> <Span>Not Included</Span> </AmenityIncluded>
              }
              <ListPoints>
                {TestData && TestData[amenityKey + "_DETAILS"] ? 
                  (TestData[amenityKey + "_DETAILS"].replace("[", "").replace("]","").replaceAll('"', '').split(', ')).map(detail => (
                    <li>{detail}</li>)) 
                  : null}
              </ListPoints>
            </Amenity>
        )
      })}
    </AmenityWrapper>
  )
}

export default NewAmenities
