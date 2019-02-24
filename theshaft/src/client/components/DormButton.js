import React, { Component } from "react";
import styled from 'styled-components';

let Button = styled.div`
  text-align: left;
  border: 5px solid #9B9B9B;
  color: #9B9B9B;
  display: inline-block;
  cursor: pointer;
  margin: 10px;
`

const DormButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: black;
	cursor: pointer;
  margin-bottom: 2px;
  & img{
    padding: 0px;
    border: 1px solid #777777;
    max-height: 100vw;
    width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 768px) {
    display: flex;
		flex-direction: row;
		color: black;
		cursor: pointer;
    margin-bottom: 2px;
    & img{
      padding: 0px;
      border: 1px solid #777777;
      max-height: 10vw;
      width: 50%;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`

const SchoolName = styled.div`
  color: #71a8e0;
  margin-top: 5px;
  margin-bottom: 1px;
  font-size: 0.9em;
`

const DormName = styled.div`
  color: #6f6f6f;
  margin-top: .1em;
  margin-bottom: .25em;
`

const Amenities = styled.div`
  color: #6f6f6f;
  margin: 0px;
`

const Description = styled.div`
  display: none;
  font-size: 13px;
  @media only screen and (min-width: 768px){
    display: inline;
  }
`

const SeeMore = styled.div`
  display: inline;
  font-size: .8em;
	cursor: pointer;
	color: #5187ec;
	text-decoration: underline;
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
    return (
      <DormButtonWrapper>
        <img className="dormimage" src={this.state.image} />
        <div className="details">
            <SchoolName> { this.state.school } </SchoolName>
            <DormName> {this.state.name} </DormName>
            <Amenities> {this.state.amenities} </Amenities>
            <Description> {this.state.description} </Description>
            <SeeMore>see more ></SeeMore>
        </div>
        <br />
      </DormButtonWrapper>
    );
  }
}
