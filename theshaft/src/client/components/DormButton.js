import React, { Component } from "react";
import styled from 'styled-components';

const DormButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	cursor: pointer;
  margin-bottom: 2px;
  & img{
    padding: 0px;
    border: 1px solid ${props => props.theme.lightGray};
    max-height: 100vw;
    width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;
    object-fit: cover;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
		flex-direction: row;
		color: black;
		cursor: pointer;
    margin-bottom: 2px;
    & img{
      padding: 0px;
      border: 1px solid ${props => props.theme.lightGray};
      max-height: 10vw;
      width: 50%;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`

let SchoolName = styled.h6`
  margin-top: 5px;
  margin-bottom: 1px;
  text-transform: capitalize;
`

let ColumbiaName = styled(SchoolName)`
  color: ${props => props.theme.columbiaBlue};
`

let BarnardName = styled(SchoolName)`
  color: ${props => props.theme.barnardBlue};
`

const DormName = styled.b`
  margin-top: .1em;
  margin-bottom: .25em;
`

const Amenities = styled.p`
`

const Description = styled.p`
  display: none;
  @media only screen and (min-width: 768px){
    display: inline;
  }
`

const SeeMore = styled.h6`
  display: inline;
	cursor: pointer;
	color: ${props => props.theme.columbiaBlue};
	text-align: right;  
`


export default class DormButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: this.props.school,
      name: this.props.name,
      image: this.props.image,
      amenities: this.props.amenities,
      description: this.props.description
    };
  }

  componentDidUpdate(oldProps){
    if(oldProps != this.props)
      this.setState({
        school: this.props.school,
        name: this.props.name,
        image: this.props.image,
        amenities: this.props.amenities,
        description: this.props.description
      });
  }

  render() {

    // Truncate dorm desciption to 100 characters if exceeds
    const truncatedDescription = this.state.description.length > 100 
      ? this.state.description.substring(1,120) + '...'
      : this.state.description

    let schoolName = this.state.school.toLowerCase();
    return (
      <DormButtonWrapper>
        <img className="dormimage" src={this.state.image} />
        <div className="details">
            {schoolName == "columbia" ? 
              <ColumbiaName> { schoolName } </ColumbiaName>
            : (schoolName == "barnard" ?
              <BarnardName> { schoolName } </BarnardName>
            :
              <SchoolName> { schoolName } </SchoolName>
              )
            }
            <DormName> {this.state.name} </DormName>
            <Amenities> {this.state.amenities} </Amenities>
            <Description> {truncatedDescription} </Description>
            <SeeMore>see&nbsp;more&nbsp;></SeeMore>
        </div>
        <br />
      </DormButtonWrapper>
    );
  }
}
