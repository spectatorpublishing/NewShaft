import React, { Component } from 'react';
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
	}
`

const SectionMobile = styled(Section)`
    flex-direction: column;
    margin-top: 1rem;
    padding-right: 1rem;
    
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


export default class ProCon extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          width: window.innerWidth,
        };
      }

      componentWillMount() {
        window.addEventListener("resize", this.handleWindowSizeChange);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowSizeChange);
      }
    
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
    
      showAllAmenities() {
        let index = 0
        return this.state.amenities.map((amenity) => {
          return <Amenity key={index++}>
            <AmenityIcon src={icon} alt={amenity[0]}/>
            <div> {amenity[1]} </div>
          </Amenity>
          });
      }
    
      render() {
      const { width } = this.state;
      const isMobile = width <= 768;
      if (isMobile) {
        let k = 0;
        return (
          <div>
            <SectionMobile>
            <ListBox>
                <ProConTitle>Pros</ProConTitle>
                <ListPoints>
                  {this.state.pros.map(pro => (
                    <li key={k++}>{pro}</li>))}
                </ListPoints>
            </ListBox>
            <ListBox>
                <ProConTitle>Cons</ProConTitle>
                <ListPoints>
                  {this.state.cons.map(con => (
                    <li key={k++}>{con}</li>))}
                </ListPoints>
            </ListBox>
          </SectionMobile>
          </div>
        );
      }
      
      else {
      let k = 0;
        return (
        <div>
          <Section>
            <ListBox>
              <></>
              <ProConTitle>Pros</ProConTitle>
              <ListPoints>
                {this.props.pros.map(pro => (
                  <li key={k++}>{pro}</li>))}
              </ListPoints>
            </ListBox>
            <ListBox>
              <ProConTitle>Cons</ProConTitle>
              <ListPoints>
                {this.props.cons.map(con => (
                  <li key={k++}>{con}</li>))}
              </ListPoints>
            </ListBox>
          </Section>
          </div>
        );
      }
    }
}