import React, { Component } from "react";
import { useEffect, useState } from "react";
import styled from 'styled-components';

const DormButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
  margin-bottom: 1rem;
  width: 100%;
  
  img{
    padding: 0px;
    border: 1px solid ${props => props.theme.lightGray};
    max-height: 9vw;
    min-height: 9vw;
    max-width: 50%;
    min-width: 50%;
    margin-right: 10px;
    margin-bottom: 10px;
    object-fit: cover;

    @media only screen and (max-width: 768px) {
      max-width: 100%;
      min-width: 100%;
      max-height: 25vw;
    }
  }

  .details {
    display: flex;
	  flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
		flex-direction: row;
    margin-bottom: 0.5rem;
  }
`

const SchoolName = styled.div`
  display: flex;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1rem;
  text-transform: capitalize;
`

const ColumbiaName = styled(SchoolName)`
  color: ${props => props.theme.columbiaBlue};
`

const BarnardName = styled(SchoolName)`
  color: ${props => props.theme.barnardBlue};
`

const DormName = styled.div`
  margin-top: .1rem;
  margin-bottom: .25rem;
  font-family: Georgia;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.2rem;
`

const Amenity = styled.div`
  font-size: 0.8rem;
  @media only screen and (max-width: 768px){
    display: none;
  }
`

const Amenities = styled.div`
  
`

const Description = styled.div`
  display: none;
  @media only screen and (min-width: 768px){
    display: inline;
  }
  &>p {
    font-size: 0.8rem;
  }
`

const SeeMore = styled.h6`
  display: inline;
	cursor: pointer;
	color: ${props => props.theme.columbiaBlue};
	text-align: right;  
`

const DormButton = props => {
  const [roomtype, setRoomType] = useState("");
  const [classMakeupFormat, setClassMakeup] = useState("");
  const [dormStyle, setDormStyle] = useState("");
  const schoolName = props.school.toLowerCase();
  const [dormName, setDormName] = useState("");

  useEffect(() => {
    if (props.class_makeup) 
      setClassMakeup(props.class_makeup.split(",").map((el, i) => el.charAt(0).toUpperCase() + el.slice(1)).join(", "));
    
    setDormStyle((props.SUITE_ === 1) ? "Suite-Style" : "Corridor-Style");

    setRoomTypeString();

    if (props.name === "548 W 113th"){
      setDormName("548 W 113th (Symposium)");
    } else if (props.name === "600 W 113th"){
      setDormName("600 W 113th (Nuss)");
    } else {
      setDormName(props.name);
    }

  }, [props.SUITE_, props.name]);

  const setRoomTypeString = () => {
    var roomtype = "";
    
    if (props.WALKTHROUGH){
      roomtype += "Doubles and walkthrough doubles";
    } else {
      if (props.SINGLE_ && props.DOUBLE_ && props.TRIPLE_){
        roomtype += " Singles, doubles, and triples";
      } else if (props.SINGLE_ && props.DOUBLE_){
        roomtype += " Singles and doubles";
      } else {
        if (props.SINGLE_) roomtype += "Singles";
        if (props.DOUBLE_) roomtype += "Doubles";
        if (props.TRIPLE_) roomtype += " and triples";
      }
    }

    setRoomType(roomtype);
  }
    return (
      <DormButtonWrapper>
        <img className="dormimage" src={props.image} />
        <div className="details">
            <DormName> {dormName} </DormName>
            {schoolName == "columbia" ? 
              <ColumbiaName> { schoolName } </ColumbiaName>
            : (schoolName == "barnard" ?
              <BarnardName> { schoolName } </BarnardName>
            :
              <SchoolName> { schoolName } </SchoolName>
              )
            }
            <Amenities> 
              <Amenity>- {dormStyle}</Amenity>
              <Amenity>- {roomtype}</Amenity>
              <Amenity>- {classMakeupFormat}</Amenity>
            </Amenities>
        </div>
        <br />
      </DormButtonWrapper>
    );

}

export default DormButton;
