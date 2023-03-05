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
const ListWrapper = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  flex-wrap:wrap;
  justify-content:space-between;
  @media only screen and (max-width: 768px){
    flex-direction:column;
  }
`
const CheckListWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  padding: 10px;
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

const ListPoints = styled.text`
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
    FLOORING: "Flooring",
    KITCHEN: "Floor Kitchen",
    LOUNGE: "Lounge",
    LAUNDRY: "Laundry",
    AC: "Air Conditioning",
    GYM: "Gym",
    BIKE: "Bike Storage",
    COMPUTER: "Computer Lab",
    PRINT: "Print Station",
    MUSIC: "Practice Rooms",
    A_ENTRANCE: "Accessible Entrance"
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
    A_ENTRANCE: wheelchair
  }

  return (
    <AmenityWrapper>
      {Object.keys(amenitiesMap).map(amenityKey => {
        const showIncluded = (amenitiesMap[amenityKey]!=="Bathroom") && (amenitiesMap[amenityKey]!=="Flooring")
        let amenityIncluded;
        if (showIncluded) {
          amenityIncluded = (props.amenities && props.amenities[amenityKey]===1) ? 
          <AmenityIncluded color="#73A6E0" ><FontAwesomeIcon icon={faCheck} /> <Span>Included</Span> </AmenityIncluded>
          : <AmenityIncluded color="#9A4A4A" ><FontAwesomeIcon icon={faTimes} /> <Span>Not Included</Span> </AmenityIncluded>
        }
        else {
          amenityIncluded = null
        }

        return (
          <Amenity> 
              <AmenityHeader><Icon src={amenitiesIcons[amenityKey]}/>{amenitiesMap[amenityKey]} </AmenityHeader>
              {amenityIncluded}
              <ListPoints>
                {props.amenities && props.amenities[amenityKey + "_DETAILS"] ? 
                  props.amenities[amenityKey + "_DETAILS"].split(/\r?\n/).map(detail => (<li>{detail}</li>))
                  : null}
              </ListPoints>
            </Amenity>
        )
      })}
    </AmenityWrapper>
  )
}

export default NewAmenities
