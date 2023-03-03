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
    ACCESSIBLE: "Accessible Entrance"
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
    ACCESSIBLE: wheelchair
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

  const TestStrings = {
    S_BATHROOM: "Single-Use",
    C_BATHROOM: "Communal bathrooms",
    BOTH_BATHROOM: "Mixed single and communal",
    F_KITCHEN: "One per floor",
    S_KITCHEN: "One per suite",
    B_KITCHEN: "One per building",
    CARPET: "Carpeted",
    WOOD_TILE: "Wood/Tile",
    F_LOUNGE: "Floor lounge",
    SUITE_LOUNGE: "In-Suite lounge",
    L_LOUNGE: "Lobby lounge",
    SKY_LOUNGE: "Sky Lounge",
    LAUNDRY: "",
    AC: "",
    COMPUTER: "",
    PRINT: "",
    GYM: "",
    BIKE: "",
    MUSIC: "",
    ACCESSIBLE: ""
  }

  const TestCategories = {
    S_BATHROOM: "Bathroom",
    C_BATHROOM: "Bathroom",
    BOTH_BATHROOM: "Bathroom",
    F_KITCHEN: "Kitchen",
    S_KITCHEN: "Kitchen",
    B_KITCHEN: "Kitchen",
    CARPET: "Floor",
    WOOD_TILE: "Floor",
    F_LOUNGE: "Lounge",
    SUITE_LOUNGE: "Lounge",
    L_LOUNGE: "Lounge",
    SKY_LOUNGE: "Lounge",
    LAUNDRY: "",
    AC: "",
    COMPUTER: "",
    PRINT: "",
    GYM: "",
    BIKE: "",
    MUSIC: "",
    ACCESSIBLE: ""
  }

  return (
    <AmenityWrapper>
      {Object.keys(amenitiesMap).map(amenityKey => {
        const showKitchen = TestData["F_KITCHEN"]==1 || TestData["S_KITCHEN"]==1 || TestData["B_KITCHEN"]==1;
        const showLounge = TestData["F_LOUNGE"]==1 || TestData["SUITE_LOUNGE"]==1 || TestData["L_LOUNGE"]==1 || TestData["SKY_LOUNGE"]==1;
        
        let amenityIncluded
        if (amenitiesMap[amenityKey]=="Kitchen" || amenitiesMap[amenityKey]=="Lounge") {
          if (showKitchen && amenitiesMap[amenityKey]=="Kitchen" || showLounge && amenitiesMap[amenityKey]=="Lounge") {
            amenityIncluded = <AmenityIncluded color="#73A6E0" ><FontAwesomeIcon icon={faCheck} /> <Span>Included</Span></AmenityIncluded>;
          }
          else {
            amenityIncluded = <AmenityIncluded color="#9A4A4A" ><FontAwesomeIcon icon={faTimes} /> <Span>Not Included</Span></AmenityIncluded>;
          }
        }
        else if (amenitiesMap[amenityKey]=="Bathroom" || amenitiesMap[amenityKey]=="Floor") {
          amenityIncluded = null
        }
        else {
          amenityIncluded = (TestData && TestData[amenityKey]==1) 
          ?
            <AmenityIncluded color="#73A6E0" ><FontAwesomeIcon icon={faCheck} /> <Span>Included</Span></AmenityIncluded>
          :
            <AmenityIncluded color="#9A4A4A" ><FontAwesomeIcon icon={faTimes} /> <Span>Not Included</Span></AmenityIncluded>
        }

        return (
          <Amenity> 
              <AmenityHeader><Icon src={amenitiesIcons[amenityKey]}/>{amenitiesMap[amenityKey]} </AmenityHeader>
              {amenityIncluded}
              {Object.keys(TestData).map(dataKey => {
                return (
                  <ListWrapper>
                    {(TestData[dataKey]==1 && TestCategories[dataKey]==amenitiesMap[amenityKey] && (amenitiesMap[amenityKey]=="Bathroom" || amenitiesMap[amenityKey]=="Floor")) 
                      ? (TestStrings[dataKey].replace("[", "").replace("]","").replaceAll('"', '').split(', ')).map(detail => (
                        <CheckListWrapper><FontAwesomeIcon color="#73A6E0" icon={faCheck} /><li>{detail}</li></CheckListWrapper>))
                      : null
                    }   
                    <ListPoints>
                      {TestData[dataKey]==1 && TestCategories[dataKey]==amenitiesMap[amenityKey] && amenitiesMap[amenityKey]!="Bathroom" && amenitiesMap[amenityKey]!="Floor"
                        ? (TestStrings[dataKey].replace("[", "").replace("]","").replaceAll('"', '').split(', ')).map(detail => (
                          <li>{detail}</li>))
                        : null}
                    </ListPoints>
                  </ListWrapper>
                  
                )
              })}
            </Amenity>
        )
      })}
    </AmenityWrapper>
  )
}

export default NewAmenities
