import React, {useState} from 'react'
import styled from 'styled-components'
import laundry from '../assets/laundry-icon.png'
import bathroom from '../assets/bathroom-icon.png'
import gym from '../assets/gym-icon.png'
import practiceRoom from '../assets/practice-room-icon.png'
import kitchen from '../assets/kitchen-icon.png'
import ac from '../assets/ac-icon.png'
import computerLab from '../assets/computer-lab-icon.png'
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
  margin-right:0.5rem;
`

const NewAmenities = (props) => {
  const amenitiesMap = {
    P_BATHROOM: "Single-Use Bathroom",
    LAUNDRY: "Laundry",
    CARPET: "Carpeted Floor",
    F_KITCHEN: "Floor Kitchen",
    P_KITCHEN: "Private Kitchen",
    LOUNGE: "Lounge",
    GYM: "Gym",
    BIKE: "Bike Storage",
    COMPUTER: "Computer Lab",
    PRINT: "Print Station",
    AC: "Air Conditioning",
    MUSIC: "Practice Rooms"
  }

  const amenitiesIcons = {
    P_BATHROOM: bathroom,
    LAUNDRY: laundry,
    CARPET: "",
    F_KITCHEN: kitchen,
    P_KITCHEN: kitchen,
    LOUNGE: "",
    GYM: gym,
    BIKE: "",
    COMPUTER: computerLab,
    PRINT: computerLab,
    AC: ac,
    MUSIC: practiceRoom
  }
  
  
  return (
    <AmenityWrapper>
      {Object.keys(props.amenities).map(key =>{
        if(props.amenities[key]==1){
          return <Amenity> 
            <AmenityHeader><Icon src={amenitiesIcons[key]}/>{amenitiesMap[key]} </AmenityHeader>
            <AmenityIncluded color="#73A6E0" ><FontAwesomeIcon icon={faCheck} /> <Span>Included</Span> </AmenityIncluded>
            <br/> 
            </Amenity>
        }
        else{
          return <Amenity> 
          <AmenityHeader><Icon src={amenitiesIcons[key]}/>{amenitiesMap[key]} </AmenityHeader>
          <AmenityIncluded color="#9A4A4A" ><FontAwesomeIcon icon={faTimes} /> <Span>Not Included</Span> </AmenityIncluded>
          <br/> 
          </Amenity>
        }
      })}
    </AmenityWrapper>
  )
}

export default NewAmenities