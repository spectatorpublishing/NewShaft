import React, { Component } from "react";
import { useEffect, useState } from "react";
import styled from 'styled-components';

const DormButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
  margin-bottom: 1rem;
  width: 100%;
  & img{
    padding: 0px;
    border: 1px solid ${props => props.theme.lightGray};
    max-height: 100vw;
    width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .details {
    display: flex;
	  flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
		flex-direction: row;
    & img{
      max-height: 10vw;
      width: 50%;
    }
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
  const [width, setWidth] = useState(window.innerWidth);

  const classMakeupFormat = props.class_makeup.split(",").map((el, i) => el.charAt(0).toUpperCase() + el.slice(1)).join(", ");
    
    var roomtype = "";
    if (props.SUITE) {
      roomtype += "Suite-style";
      if (props.SINGLE_ && props.DOUBLE_)
        roomtype += " singles and doubles";
      else if (props.SINGLE_) roomtype += " singles";
      else if (props.DOUBLE_) roomtype += " doubles";
    } else if (props.WALKTHROUGH)
      roomtype += "Doubles and walkthrough doubles";
    else {
      if (props.SINGLE_ && props.DOUBLE_)
        roomtype += "Singles and doubles";
      else if (props.SINGLE_) roomtype += "Singles";
      else if (props.DOUBLE_) roomtype += "Doubles";
    }
    if (props.TRIPLE_) roomtype += " and triples";

    let schoolName = props.school.toLowerCase();
    return (
      <DormButtonWrapper>
        <img className="dormimage" src={props.image} />
        <div className="details">
            <DormName> {props.name} </DormName>
            {schoolName == "columbia" ? 
              <ColumbiaName> { schoolName } </ColumbiaName>
            : (schoolName == "barnard" ?
              <BarnardName> { schoolName } </BarnardName>
            :
              <SchoolName> { schoolName } </SchoolName>
              )
            }
            <Amenities> 
              {props.dormStyle ? <Amenity>- {props.dormStyle}</Amenity>: null}  
              <Amenity>- {roomtype}</Amenity>
              <Amenity>- {classMakeupFormat}</Amenity>
            </Amenities>
        </div>
        <br />
      </DormButtonWrapper>
    );

}

export default DormButton;
